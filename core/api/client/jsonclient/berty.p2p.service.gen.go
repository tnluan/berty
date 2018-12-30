// this file was generated by protoc-gen-gotemplate
package jsonclient

import (
	"context"
	"encoding/json"

	"berty.tech/core/api/client"
	"berty.tech/core/api/p2p"
	"berty.tech/core/pkg/tracing"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
)

func init() {
	registerUnary("berty.p2p.HandleEnvelope", P2pHandleEnvelope)
	registerUnary("berty.p2p.Ping", P2pPing)
}
func P2pHandleEnvelope(client *client.Client, ctx context.Context, jsonInput []byte) (interface{}, metadata.MD, metadata.MD, error) {
	tracer := tracing.EnterFunc(ctx, string(jsonInput))
	defer tracer.Finish()
	ctx = tracer.Context()
	tracer.SetTag("full-method", "berty.p2p.HandleEnvelope")
	var typedInput p2p.Envelope
	if err := json.Unmarshal(jsonInput, &typedInput); err != nil {
		return nil, nil, nil, err
	}
	var header, trailer metadata.MD
	ret, err := client.P2p().HandleEnvelope(
		ctx,
		&typedInput,
		grpc.Header(&header),
		grpc.Trailer(&trailer),
	)
	tracer.SetAnyField("header", header)
	tracer.SetAnyField("trailer", trailer)
	return ret, header, trailer, err
}
func P2pPing(client *client.Client, ctx context.Context, jsonInput []byte) (interface{}, metadata.MD, metadata.MD, error) {
	tracer := tracing.EnterFunc(ctx, string(jsonInput))
	defer tracer.Finish()
	ctx = tracer.Context()
	tracer.SetTag("full-method", "berty.p2p.Ping")
	var typedInput p2p.Void
	if err := json.Unmarshal(jsonInput, &typedInput); err != nil {
		return nil, nil, nil, err
	}
	var header, trailer metadata.MD
	ret, err := client.P2p().Ping(
		ctx,
		&typedInput,
		grpc.Header(&header),
		grpc.Trailer(&trailer),
	)
	tracer.SetAnyField("header", header)
	tracer.SetAnyField("trailer", trailer)
	return ret, header, trailer, err
}
