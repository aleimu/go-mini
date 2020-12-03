// Code generated by goctl. DO NOT EDIT!
// Source: shorten.proto

package main

import (
	"flag"
	"fmt"

	"shorturl/rpc/shorten/internal/config"
	"shorturl/rpc/shorten/internal/server"
	"shorturl/rpc/shorten/internal/svc"
	"shorturl/rpc/shorten/shorten"

	"github.com/tal-tech/go-zero/core/conf"
	"github.com/tal-tech/go-zero/zrpc"
	"google.golang.org/grpc"
)

var configFile = flag.String("f", "etc/shorten.yaml", "the config file")

func main() {
	flag.Parse()

	var c config.Config
	conf.MustLoad(*configFile, &c)
	ctx := svc.NewServiceContext(c)
	srv := server.NewShortenerServer(ctx)

	s := zrpc.MustNewServer(c.RpcServerConf, func(grpcServer *grpc.Server) {
		shorten.RegisterShortenerServer(grpcServer, srv)
	})
	defer s.Stop()

	fmt.Printf("Starting rpc server at %s...\n", c.ListenOn)
	s.Start()
}