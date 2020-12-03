// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.5.1
// source: expand.proto

package expand

import (
	context "context"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

type ExpandReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Key string `protobuf:"bytes,1,opt,name=key,proto3" json:"key,omitempty"`
}

func (x *ExpandReq) Reset() {
	*x = ExpandReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_expand_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ExpandReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ExpandReq) ProtoMessage() {}

func (x *ExpandReq) ProtoReflect() protoreflect.Message {
	mi := &file_expand_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ExpandReq.ProtoReflect.Descriptor instead.
func (*ExpandReq) Descriptor() ([]byte, []int) {
	return file_expand_proto_rawDescGZIP(), []int{0}
}

func (x *ExpandReq) GetKey() string {
	if x != nil {
		return x.Key
	}
	return ""
}

type ExpandResp struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Url string `protobuf:"bytes,1,opt,name=url,proto3" json:"url,omitempty"`
}

func (x *ExpandResp) Reset() {
	*x = ExpandResp{}
	if protoimpl.UnsafeEnabled {
		mi := &file_expand_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ExpandResp) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ExpandResp) ProtoMessage() {}

func (x *ExpandResp) ProtoReflect() protoreflect.Message {
	mi := &file_expand_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ExpandResp.ProtoReflect.Descriptor instead.
func (*ExpandResp) Descriptor() ([]byte, []int) {
	return file_expand_proto_rawDescGZIP(), []int{1}
}

func (x *ExpandResp) GetUrl() string {
	if x != nil {
		return x.Url
	}
	return ""
}

var File_expand_proto protoreflect.FileDescriptor

var file_expand_proto_rawDesc = []byte{
	0x0a, 0x0c, 0x65, 0x78, 0x70, 0x61, 0x6e, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06,
	0x65, 0x78, 0x70, 0x61, 0x6e, 0x64, 0x22, 0x1d, 0x0a, 0x09, 0x65, 0x78, 0x70, 0x61, 0x6e, 0x64,
	0x52, 0x65, 0x71, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x03, 0x6b, 0x65, 0x79, 0x22, 0x1e, 0x0a, 0x0a, 0x65, 0x78, 0x70, 0x61, 0x6e, 0x64, 0x52,
	0x65, 0x73, 0x70, 0x12, 0x10, 0x0a, 0x03, 0x75, 0x72, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x03, 0x75, 0x72, 0x6c, 0x32, 0x3b, 0x0a, 0x08, 0x65, 0x78, 0x70, 0x61, 0x6e, 0x64, 0x65,
	0x72, 0x12, 0x2f, 0x0a, 0x06, 0x65, 0x78, 0x70, 0x61, 0x6e, 0x64, 0x12, 0x11, 0x2e, 0x65, 0x78,
	0x70, 0x61, 0x6e, 0x64, 0x2e, 0x65, 0x78, 0x70, 0x61, 0x6e, 0x64, 0x52, 0x65, 0x71, 0x1a, 0x12,
	0x2e, 0x65, 0x78, 0x70, 0x61, 0x6e, 0x64, 0x2e, 0x65, 0x78, 0x70, 0x61, 0x6e, 0x64, 0x52, 0x65,
	0x73, 0x70, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_expand_proto_rawDescOnce sync.Once
	file_expand_proto_rawDescData = file_expand_proto_rawDesc
)

func file_expand_proto_rawDescGZIP() []byte {
	file_expand_proto_rawDescOnce.Do(func() {
		file_expand_proto_rawDescData = protoimpl.X.CompressGZIP(file_expand_proto_rawDescData)
	})
	return file_expand_proto_rawDescData
}

var file_expand_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_expand_proto_goTypes = []interface{}{
	(*ExpandReq)(nil),  // 0: expand.expandReq
	(*ExpandResp)(nil), // 1: expand.expandResp
}
var file_expand_proto_depIdxs = []int32{
	0, // 0: expand.expander.expand:input_type -> expand.expandReq
	1, // 1: expand.expander.expand:output_type -> expand.expandResp
	1, // [1:2] is the sub-list for method output_type
	0, // [0:1] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_expand_proto_init() }
func file_expand_proto_init() {
	if File_expand_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_expand_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ExpandReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_expand_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ExpandResp); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_expand_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_expand_proto_goTypes,
		DependencyIndexes: file_expand_proto_depIdxs,
		MessageInfos:      file_expand_proto_msgTypes,
	}.Build()
	File_expand_proto = out.File
	file_expand_proto_rawDesc = nil
	file_expand_proto_goTypes = nil
	file_expand_proto_depIdxs = nil
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// ExpanderClient is the client API for Expander service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ExpanderClient interface {
	Expand(ctx context.Context, in *ExpandReq, opts ...grpc.CallOption) (*ExpandResp, error)
}

type expanderClient struct {
	cc grpc.ClientConnInterface
}

func NewExpanderClient(cc grpc.ClientConnInterface) ExpanderClient {
	return &expanderClient{cc}
}

func (c *expanderClient) Expand(ctx context.Context, in *ExpandReq, opts ...grpc.CallOption) (*ExpandResp, error) {
	out := new(ExpandResp)
	err := c.cc.Invoke(ctx, "/expand.expander/expand", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ExpanderServer is the server API for Expander service.
type ExpanderServer interface {
	Expand(context.Context, *ExpandReq) (*ExpandResp, error)
}

// UnimplementedExpanderServer can be embedded to have forward compatible implementations.
type UnimplementedExpanderServer struct {
}

func (*UnimplementedExpanderServer) Expand(context.Context, *ExpandReq) (*ExpandResp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Expand not implemented")
}

func RegisterExpanderServer(s *grpc.Server, srv ExpanderServer) {
	s.RegisterService(&_Expander_serviceDesc, srv)
}

func _Expander_Expand_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ExpandReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExpanderServer).Expand(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/expand.expander/Expand",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExpanderServer).Expand(ctx, req.(*ExpandReq))
	}
	return interceptor(ctx, in, info, handler)
}

var _Expander_serviceDesc = grpc.ServiceDesc{
	ServiceName: "expand.expander",
	HandlerType: (*ExpanderServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "expand",
			Handler:    _Expander_Expand_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "expand.proto",
}
