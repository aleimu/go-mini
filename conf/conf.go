/*
 * @Author: your name
 * @Date: 2020-11-19 23:14:23
 * @LastEditTime: 2020-11-19 23:30:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \go-mini\conf\conf.go
 */

package conf

import (
	"go-mini/cache"
	"os"

	"github.com/joho/godotenv"
)

var (
	LogFilePath = "./logs/"
	LogFileName = "my.log"
	FilePath    = "./upload/"
)

// Init 初始化配置项
func Init() {
	// 从本地读取环境变量
	err := godotenv.Load()
	if err == nil {
		LogFilePath = os.Getenv("LogFilePath")
		LogFileName = os.Getenv("LogFileName")
		FilePath = os.Getenv("UPLOADFILE") + string(os.PathSeparator)
	}

	// 连接数据库
	// model.Database(os.Getenv("MYSQL_DSN"), true)
	cache.Redis()
}
