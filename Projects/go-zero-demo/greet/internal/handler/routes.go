// Code generated by goctl. DO NOT EDIT.
package handler

import (
	"net/http"

	"go-mini/Projects/go-zero-demo/greet/internal/svc"

	"github.com/tal-tech/go-zero/rest"
)

func RegisterHandlers(engine *rest.Server, serverCtx *svc.ServiceContext) {
	engine.AddRoutes(
		[]rest.Route{
			{
				Method:  http.MethodGet,
				Path:    "/greet/from/:name",
				Handler: greetHandler(serverCtx),
			},
		},
	)
}
