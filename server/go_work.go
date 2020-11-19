/*
 * @Author: your name
 * @Date: 2020-11-19 23:14:23
 * @LastEditTime: 2020-11-19 23:29:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \go-mini\server\go_work.go
 */

package server

import (
	"go-mini/util"
	"net/http"

	"github.com/gin-gonic/gin"
)

type mmp struct {
	A     int               `json:"a"` //json tag
	B     string            `json:"b"`
	C     []string          `json:"c"`
	D     map[string]string `json:"d"`
	chIn  chan struct{}
	chOut chan struct{} // 增加一个chan
}

type Data struct {
	A int      `json:"a"`
	B string   `json:"b"`
	C []string `json:"c"`
	D mmp      `json:"d"`
	e *mmp     `json:"e"` //小写是不会被导出的
}

// Ping 状态检查页面
func Ping(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"code": util.OK, "data": nil})
}

func GetGroups(c *gin.Context) {

	ch1 := make(chan int)
	ch2 := make(chan string)
	ch3 := make(chan mmp)
	ch4 := make(chan *mmp)

	go work1(ch1)
	go work2(ch2)
	go work3(ch3)
	go work4(ch4)

	// data := new(Data)
	// data.A = <-ch2
	// data.B = <-ch1
	// data.C = []string{"c", "c", "c"}
	// data.D = <-ch3
	// data.e = <-ch4

	data := &Data{
		A: <-ch1,
		B: <-ch2,
		C: []string{"c", "c", "c"},
		D: <-ch3,
		e: <-ch4,
	}

	c.JSON(http.StatusOK, gin.H{"code": util.OK, "data": data})
}

func work1(ch chan int) {
	w := 1
	ch <- w
}

func work2(ch chan string) {
	w := "work1"
	ch <- w
}

func work3(ch chan mmp) {
	w := mmp{
		A: 10,
		B: "b",
		C: []string{"a", "b", "c"},
		D: map[string]string{"a": "a", "b": "b", "c": "c"},
	}
	ch <- w
}

func work4(ch chan *mmp) {
	w := &mmp{
		A: 10,
		B: "b",
		C: []string{"a", "b", "c"},
		D: map[string]string{"a": "a", "b": "b", "c": "c"},
	}
	ch <- w
}
