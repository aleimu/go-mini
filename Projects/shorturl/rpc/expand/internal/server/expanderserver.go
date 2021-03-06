// Code generated by goctl. DO NOT EDIT!
// Source: expand.proto

package server

import (
	"context"

	"shorturl/rpc/expand/expand"
	"shorturl/rpc/expand/internal/logic"
	"shorturl/rpc/expand/internal/svc"
)

type ExpanderServer struct {
	svcCtx *svc.ServiceContext
}

func NewExpanderServer(svcCtx *svc.ServiceContext) *ExpanderServer {
	return &ExpanderServer{
		svcCtx: svcCtx,
	}
}

func (s *ExpanderServer) Expand(ctx context.Context, in *expand.ExpandReq) (*expand.ExpandResp, error) {
	l := logic.NewExpandLogic(ctx, s.svcCtx)
	return l.Expand(in)
}
