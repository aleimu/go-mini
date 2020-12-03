<!--
 * @Author: aleimu
 * @Date: 2020-12-01 15:26:03
 * @Description: file content
-->

## https://my.oschina.net/kevwan/blog/4536192

```
goctl api go -api shorturl.api -dir api


生成的文件结构如下：

.
├── api
│   ├── etc
│   │   └── shorturl-api.yaml         // 配置文件
│   ├── internal
│   │   ├── config
│   │   │   └── config.go             // 定义配置
│   │   ├── handler
│   │   │   ├── expandhandler.go      // 实现expandHandler
│   │   │   ├── routes.go             // 定义路由处理
│   │   │   └── shortenhandler.go     // 实现shortenHandler
│   │   ├── logic
│   │   │   ├── expandlogic.go        // 实现ExpandLogic
│   │   │   └── shortenlogic.go       // 实现ShortenLogic
│   │   ├── svc
│   │   │   └── servicecontext.go     // 定义ServiceContext
│   │   └── types
│   │       └── types.go              // 定义请求、返回结构体
│   └── shorturl.go                   // main入口定义
├── go.mod
├── go.sum
└── shorturl.api


```

go run api/shorturl.go -f api/etc/shorturl-api.yaml

