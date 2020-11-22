/*
 * @Author: your name
 * @Date: 2020-11-19 23:14:23
 * @LastEditTime: 2020-11-22 15:42:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \go-mini\conf\conf.go
 */

package conf

import (
	"os"

	"github.com/joho/godotenv"
)

var (
	LogFilePath = "./logs/"
	LogFileName = "my.log"
	FilePath    = "./upload/"
)

// init 初始化配置项
func init() {
	// 从本地读取环境变量
	err := godotenv.Load()
	if err == nil {
		LogFilePath = os.Getenv("LogFilePath")
		LogFileName = os.Getenv("LogFileName")
		FilePath = os.Getenv("UPLOADFILE") + string(os.PathSeparator)
	}
}
