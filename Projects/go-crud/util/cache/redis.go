/*
 * @Author: aleimu
 * @Date: 2020-11-19 23:14:23
 * @Description: file content
 */
package cache

import (
	"os"
	"strconv"
	"time"

	"github.com/go-redis/redis"
)

// RedisClient Redis缓存客户端单例
var RedisClient *redis.Client

func init() {
	db, _ := strconv.ParseUint(os.Getenv("REDIS_DB"), 10, 64)
	url := os.Getenv("REDIS_ADDR")
	pwd := os.Getenv("REDIS_PW")
	client := Redis(url, pwd, db)
	RedisClient = client
}

// Redis 在中间件中初始化redis链接
func Redis(url, pwd string, db uint64) *redis.Client {

	client := redis.NewClient(&redis.Options{
		Addr:         url,
		Password:     pwd,
		DB:           int(db),
		DialTimeout:  10 * time.Second,
		ReadTimeout:  30 * time.Second,
		WriteTimeout: 30 * time.Second,
		PoolSize:     5,
		PoolTimeout:  30 * time.Second,
	})

	_, err := client.Ping().Result()

	if err != nil {
		panic(err)
	}
	return client
}

// redis的操作需要看看example中的例子
