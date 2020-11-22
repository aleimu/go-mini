/*
 * @Author: aleimu
 * @Date: 2020-11-22 12:51:46
 * @Description: file content
 */
package db

import (
	"os"
	"time"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	//_ "github.com/go-sql-driver/mysql"
)

// DB 数据库链接单例
var DB *gorm.DB

func init() {
	DB = Database(os.Getenv("MYSQL_DSN"), true)
}

// Database 在中间件中初始化mysql链接
func Database(connString string, flag bool) *gorm.DB {
	println("mysql:", connString)
	db, err := gorm.Open("mysql", connString)
	db.LogMode(true)
	// Error
	if err != nil {
		panic(err)
	}
	//设置连接池
	//空闲
	db.DB().SetMaxIdleConns(20)
	//打开
	db.DB().SetMaxOpenConns(100)
	//超时
	db.DB().SetConnMaxLifetime(time.Second * 30)
	if flag {
		// 自动迁移模式
		db.AutoMigrate(&User{}, &Image{})
	}
	return db

}
