/*
 * @Author: your name
 * @Date: 2020-11-19 23:14:23
 * @LastEditTime: 2020-11-19 23:29:13
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \go-mini\main.go
 */
package main

import (
	"go-mini/conf"
	"go-mini/middleware"
	"go-mini/server"
	"go-mini/util"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

func NewApp() *gin.Engine {
	r := gin.Default()
	// 给表单限制上传大小 (默认 32 MiB)
	r.MaxMultipartMemory = 8 << 20 // 8 MiBr

	// 使用自定义中间件, 使用顺序需要注意
	r.Use(middleware.Recovery())      // 处理各种异常,保障返回为json CatchExpection
	r.Use(util.LoggerToFile())        // Logging to a file.
	r.Use(middleware.BeforeRequest()) // flask.g
	r.Use(middleware.Cors())
	r.Use(middleware.CurrentUser())
	r.NoRoute(go404)
	return r

}

// NewRouter 路由配置
func NewRouter() *gin.Engine {
	r := NewApp()
	// 自测分组,尝试新姿势
	v0 := r.Group("v1/test")
	{
		// 服务内部的重定向
		v0.GET("/test", func(c *gin.Context) {
			c.Request.URL.Path = "/v1/test/test2"
			r.HandleContext(c)
		})
		v0.GET("/test2", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{"hello": "world"})
		})
		// 重定向到外部
		v0.GET("/test3", func(c *gin.Context) {
			c.Redirect(http.StatusFound, "wwww.baidu.com")
		})
		// 静态文件目录,不适合单个文件查看
		v0.StaticFS("/image", http.Dir("./upload/"))
		//r.StaticFile("/image/:filename", "./upload/")
		//1. 异步
		r.GET("/async", func(c *gin.Context) {
			// goroutine 中只能使用只读的上下文 c.Copy()
			cCp := c.Copy()
			go func() {
				time.Sleep(5 * time.Second)
				// 注意使用只读上下文
				util.Log.Println("Done! in path " + cCp.Request.URL.Path)
			}()
			c.JSON(http.StatusOK, gin.H{"user": gin.H{"a": gin.H{"b": "b"}, "Number": 123}, "Message": "hey", "Number": 123})
		})
		// 两个请求本质是两个goroutine,他们之间能相互传递信息吗? --- 单向可以,chan1请求发送后,chan2请求也发送了,chan1才会有返回;双向不行,类似于死锁
		ch1 := make(chan string)
		//ch2 := make(chan string)
		v0.GET("/chan1", func(c *gin.Context) {
			ch1 <- c.Query("ch")
			c.JSON(http.StatusOK, gin.H{"hello": "world"})
		})
		v0.GET("/chan2", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{"hello": <-ch1})
		})
	}

	// 用户路由
	v1 := r.Group("/v1/user")
	{
		v1.POST("ping", server.Ping)
		// // 用户登录
		// v1.POST("/register", server.UserRegister)
		// // 用户登录
		// v1.POST("/login", server.UserLogin)
		// // 需要登录保护的
		// v1.Use(middleware.AuthRequired())
		// {
		// 	// User Routing
		// 	v1.GET("/me", server.UserMe)
		// 	v1.DELETE("/logout", server.UserLogout)
		// }
	}
	// 广告管理路由
	v2 := r.Group("/v1")
	{
		// 上传图片
		v2.GET("/groups", server.GetGroups)
	}
	return r
}

func go404(c *gin.Context) {
	c.JSON(http.StatusNotFound, gin.H{"code": "404", "msg": "page not found!", "data": nil})
	return
}

func main() {
	// 从配置文件读取配置
	conf.Init()
	// 装载路由
	r := NewRouter()

	r.Run(":3001")
}
