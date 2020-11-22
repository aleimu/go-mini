/*
 * @Author: aleimu
 * @Date: 2020-11-22 12:51:46
 * @Description: file content
 */
package util

import (
	_ "go-mini/conf"
	"go-mini/util/cache"
	"go-mini/util/db"
	"os"
	"strconv"

	"github.com/go-redis/redis"
	"github.com/jinzhu/gorm"
)

// DB 数据库链接单例
var DbClient *gorm.DB

// RedisClient Redis缓存客户端单例
var RedisClient *redis.Client
var RedisNil = redis.Nil

func init() {

	// 初始化mysql链接
	DbClient = db.Database(os.Getenv("MYSQL_DSN"), true)
	// 初始化redis链接
	db, _ := strconv.ParseUint(os.Getenv("REDIS_DB"), 10, 64)
	url := os.Getenv("REDIS_ADDR")
	pwd := os.Getenv("REDIS_PW")
	RedisClient = cache.Redis(url, pwd, db)
}

// 检查数据库
func CheckStaus() bool {
	result := DbClient.HasTable("users")
	return result
}
