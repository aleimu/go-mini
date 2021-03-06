package logic

import (
	"context"

	"shorturl/rpc/expand/expand"
	"shorturl/rpc/expand/internal/svc"

	"github.com/tal-tech/go-zero/core/logx"
)

type ExpandLogic struct {
	ctx    context.Context
	svcCtx *svc.ServiceContext
	logx.Logger
}

func NewExpandLogic(ctx context.Context, svcCtx *svc.ServiceContext) *ExpandLogic {
	return &ExpandLogic{
		ctx:    ctx,
		svcCtx: svcCtx,
		Logger: logx.WithContext(ctx),
	}
}

func (l *ExpandLogic) Expand(in *expand.ExpandReq) (*expand.ExpandResp, error) {
	// todo: add your logic here and delete this line

	return &expand.ExpandResp{}, nil
}
