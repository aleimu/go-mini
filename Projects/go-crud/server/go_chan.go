/*
 * @Author: aleimu
 * @Date: 2020-11-22 12:39:29
 * @Description: chan在mysql和redis中使用
 */

package server

import (
	"go-crud/util"
	"go-crud/util/db"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Status struct {
	Code  int    `json:"code"`
	Redis string `json:"redis"`
	Mysql string `json:"mysql"`
}

// Ping 状态数据库和redis等组件的服务状态
func Ping(c *gin.Context) {
	chredis := make(chan int)
	chmysql := make(chan int)
	go PingRedis(chredis)
	go PingMysql(chmysql)
	go DbTransaction()
	data := Status{Code: util.OK, Redis: "redis正常", Mysql: "mysql正常"}
	if <-chredis == util.ERR {
		data.Code = util.ERR
		data.Redis = "redis服务异常"
	}
	if <-chmysql == util.ERR {
		data.Code = util.ERR
		data.Mysql = "mysql服务异常"
	}
	c.JSON(http.StatusOK, gin.H{"code": data.Code, "data": data})
}

// PingRedis 检查redis服务是否可用
func PingRedis(ch chan int) {
	_, err := util.RedisClient.Ping().Result()
	if err != nil {
		ch <- util.ERR
	}
	ch <- util.OK
}

// PingMysql 检查db服务是否可用
func PingMysql(ch chan int) {
	flag := util.CheckStaus()
	if !flag {
		ch <- util.ERR
	}
	ch <- util.OK
}

// DbTransaction 检查db事务是否可用
func DbTransaction() {
	// 开始事务
	tx := util.DbClient.Begin()
	// 在事务中做一些数据库操作（从这一点使用'tx'，而不是'db'）
	// tx.Create()
	user := db.User{UserName: "Jinzhu"}
	tx.NewRecord(user) // => 主键为空返回`true`
	tx.Create(&user)
	// 发生错误时回滚事务
	tx.Rollback()
	// 或提交事务
	tx.Commit()

}
