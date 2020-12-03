├── greet
│   ├── etc
│   │   └── greet-api.json        // 配置文件
│   ├── greet.go                  // main文件
│   └── internal
│       ├── config
│       │   └── config.go         // 配置定义
│       ├── handler
│       │   ├── greethandler.go   // get/put/post/delete等路由定义文件
│       │   └── routes.go         // 路由列表
│       ├── logic
│       │   └── greetlogic.go     // 请求逻辑处理文件
│       ├── svc
│       │   └── servicecontext.go // 请求上下文，可以传入mysql, redis等依赖
│       └── types
│           └── types.go          // 请求、返回等类型定义
└── greet.api                     // api描述文件