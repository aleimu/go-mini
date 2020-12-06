<!--
 * @Author: aleimu
 * @Date: 2020-11-25 22:47:27
 * @Description: file content
-->
# Go7天系列

[原始项目](https://github.com/geektutu/7days-golang)

# 工具集

1. go-spew打印一些复杂结构体真的太好用了
```
package main

import (
    "github.com/davecgh/go-spew/spew"
)

func main() {

    scs := spew.ConfigState{Indent: "\t"}

    // Output using the ConfigState instance.
    v := map[string]int{"one": 1}
    scs.Printf("v: %v\n", v)
    scs.Dump(v)
}
```



# 常见问题

```
[Go]解决 can't load package: cannot find module providing package github.com/xxxxx
当我执行go install  github.com/xxxxx 时候 , 报错:
can't load package: cannot find module providing package github.com/xxx: working directory is not part of a module
使用的go module来解决依赖问题
执行一下
go mod init
```