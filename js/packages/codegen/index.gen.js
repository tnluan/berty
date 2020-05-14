import jsonPb from './index.pb.js'

export const berty = {
	chat: {
		ChatService: jsonPb.lookup('.berty.chat.ChatService'),
		Search: jsonPb.lookup('.berty.chat.Search'),
		EventSubscribe: jsonPb.lookup('.berty.chat.EventSubscribe'),
		DevEventSubscribe: jsonPb.lookup('.berty.chat.DevEventSubscribe'),
		ConversationList: jsonPb.lookup('.berty.chat.ConversationList'),
		ConversationGet: jsonPb.lookup('.berty.chat.ConversationGet'),
		ConversationCreate: jsonPb.lookup('.berty.chat.ConversationCreate'),
		ConversationUpdate: jsonPb.lookup('.berty.chat.ConversationUpdate'),
		ConversationMute: jsonPb.lookup('.berty.chat.ConversationMute'),
		ConversationLeave: jsonPb.lookup('.berty.chat.ConversationLeave'),
		ConversationErase: jsonPb.lookup('.berty.chat.ConversationErase'),
		ConversationInvitationSend: jsonPb.lookup('.berty.chat.ConversationInvitationSend'),
		ConversationInvitationAccept: jsonPb.lookup('.berty.chat.ConversationInvitationAccept'),
		ConversationInvitationDecline: jsonPb.lookup('.berty.chat.ConversationInvitationDecline'),
		MessageList: jsonPb.lookup('.berty.chat.MessageList'),
		MessageGet: jsonPb.lookup('.berty.chat.MessageGet'),
		MessageSend: jsonPb.lookup('.berty.chat.MessageSend'),
		MessageEdit: jsonPb.lookup('.berty.chat.MessageEdit'),
		MessageHide: jsonPb.lookup('.berty.chat.MessageHide'),
		MessageReact: jsonPb.lookup('.berty.chat.MessageReact'),
		MessageRead: jsonPb.lookup('.berty.chat.MessageRead'),
		MemberList: jsonPb.lookup('.berty.chat.MemberList'),
		MemberGet: jsonPb.lookup('.berty.chat.MemberGet'),
		ContactList: jsonPb.lookup('.berty.chat.ContactList'),
		ContactGet: jsonPb.lookup('.berty.chat.ContactGet'),
		ContactBlock: jsonPb.lookup('.berty.chat.ContactBlock'),
		ContactRemove: jsonPb.lookup('.berty.chat.ContactRemove'),
		ContactRequestSend: jsonPb.lookup('.berty.chat.ContactRequestSend'),
		ContactRequestAccept: jsonPb.lookup('.berty.chat.ContactRequestAccept'),
		ContactRequestDecline: jsonPb.lookup('.berty.chat.ContactRequestDecline'),
		AccountList: jsonPb.lookup('.berty.chat.AccountList'),
		AccountGet: jsonPb.lookup('.berty.chat.AccountGet'),
		AccountCreate: jsonPb.lookup('.berty.chat.AccountCreate'),
		AccountUpdate: jsonPb.lookup('.berty.chat.AccountUpdate'),
		AccountOpen: jsonPb.lookup('.berty.chat.AccountOpen'),
		AccountClose: jsonPb.lookup('.berty.chat.AccountClose'),
		AccountRemove: jsonPb.lookup('.berty.chat.AccountRemove'),
		AccountPairingInvitationCreate: jsonPb.lookup('.berty.chat.AccountPairingInvitationCreate'),
		AccountRenewIncomingContactRequestLink: jsonPb.lookup(
			'.berty.chat.AccountRenewIncomingContactRequestLink',
		),
	},
	chatmodel: {
		Contact: jsonPb.lookup('.berty.chatmodel.Contact'),
		Device: jsonPb.lookup('.berty.chatmodel.Device'),
		Conversation: jsonPb.lookup('.berty.chatmodel.Conversation'),
		Member: jsonPb.lookup('.berty.chatmodel.Member'),
		Message: jsonPb.lookup('.berty.chatmodel.Message'),
		Attachment: jsonPb.lookup('.berty.chatmodel.Attachment'),
		Reaction: jsonPb.lookup('.berty.chatmodel.Reaction'),
		Account: jsonPb.lookup('.berty.chatmodel.Account'),
	},
	protocol: {
		ProtocolService: jsonPb.lookup('.berty.protocol.ProtocolService'),
	},
	types: {
		GroupType: jsonPb.lookup('.berty.types.GroupType'),
		EventType: jsonPb.lookup('.berty.types.EventType'),
		Account: jsonPb.lookup('.berty.types.Account'),
		Group: jsonPb.lookup('.berty.types.Group'),
		GroupMetadata: jsonPb.lookup('.berty.types.GroupMetadata'),
		GroupEnvelope: jsonPb.lookup('.berty.types.GroupEnvelope'),
		MessageHeaders: jsonPb.lookup('.berty.types.MessageHeaders'),
		MessageEnvelope: jsonPb.lookup('.berty.types.MessageEnvelope'),
		EventContext: jsonPb.lookup('.berty.types.EventContext'),
		AppMetadata: jsonPb.lookup('.berty.types.AppMetadata'),
		ContactAddAliasKey: jsonPb.lookup('.berty.types.ContactAddAliasKey'),
		GroupAddMemberDevice: jsonPb.lookup('.berty.types.GroupAddMemberDevice'),
		DeviceSecret: jsonPb.lookup('.berty.types.DeviceSecret'),
		GroupAddDeviceSecret: jsonPb.lookup('.berty.types.GroupAddDeviceSecret'),
		MultiMemberGroupAddAliasResolver: jsonPb.lookup(
			'.berty.types.MultiMemberGroupAddAliasResolver',
		),
		MultiMemberGrantAdminRole: jsonPb.lookup('.berty.types.MultiMemberGrantAdminRole'),
		MultiMemberInitialMember: jsonPb.lookup('.berty.types.MultiMemberInitialMember'),
		GroupAddAdditionalRendezvousSeed: jsonPb.lookup(
			'.berty.types.GroupAddAdditionalRendezvousSeed',
		),
		GroupRemoveAdditionalRendezvousSeed: jsonPb.lookup(
			'.berty.types.GroupRemoveAdditionalRendezvousSeed',
		),
		AccountGroupJoined: jsonPb.lookup('.berty.types.AccountGroupJoined'),
		AccountGroupLeft: jsonPb.lookup('.berty.types.AccountGroupLeft'),
		AccountContactRequestDisabled: jsonPb.lookup('.berty.types.AccountContactRequestDisabled'),
		AccountContactRequestEnabled: jsonPb.lookup('.berty.types.AccountContactRequestEnabled'),
		AccountContactRequestReferenceReset: jsonPb.lookup(
			'.berty.types.AccountContactRequestReferenceReset',
		),
		AccountContactRequestEnqueued: jsonPb.lookup('.berty.types.AccountContactRequestEnqueued'),
		AccountContactRequestSent: jsonPb.lookup('.berty.types.AccountContactRequestSent'),
		AccountContactRequestReceived: jsonPb.lookup('.berty.types.AccountContactRequestReceived'),
		AccountContactRequestDiscarded: jsonPb.lookup('.berty.types.AccountContactRequestDiscarded'),
		AccountContactRequestAccepted: jsonPb.lookup('.berty.types.AccountContactRequestAccepted'),
		AccountContactBlocked: jsonPb.lookup('.berty.types.AccountContactBlocked'),
		AccountContactUnblocked: jsonPb.lookup('.berty.types.AccountContactUnblocked'),
		InstanceExportData: jsonPb.lookup('.berty.types.InstanceExportData'),
		InstanceGetConfiguration: jsonPb.lookup('.berty.types.InstanceGetConfiguration'),
		ContactRequestReference: jsonPb.lookup('.berty.types.ContactRequestReference'),
		ContactRequestDisable: jsonPb.lookup('.berty.types.ContactRequestDisable'),
		ContactRequestEnable: jsonPb.lookup('.berty.types.ContactRequestEnable'),
		ContactRequestResetReference: jsonPb.lookup('.berty.types.ContactRequestResetReference'),
		ContactRequestSend: jsonPb.lookup('.berty.types.ContactRequestSend'),
		ContactRequestAccept: jsonPb.lookup('.berty.types.ContactRequestAccept'),
		ContactRequestDiscard: jsonPb.lookup('.berty.types.ContactRequestDiscard'),
		ContactBlock: jsonPb.lookup('.berty.types.ContactBlock'),
		ContactUnblock: jsonPb.lookup('.berty.types.ContactUnblock'),
		ContactAliasKeySend: jsonPb.lookup('.berty.types.ContactAliasKeySend'),
		MultiMemberGroupCreate: jsonPb.lookup('.berty.types.MultiMemberGroupCreate'),
		MultiMemberGroupJoin: jsonPb.lookup('.berty.types.MultiMemberGroupJoin'),
		MultiMemberGroupLeave: jsonPb.lookup('.berty.types.MultiMemberGroupLeave'),
		MultiMemberGroupAliasResolverDisclose: jsonPb.lookup(
			'.berty.types.MultiMemberGroupAliasResolverDisclose',
		),
		MultiMemberGroupAdminRoleGrant: jsonPb.lookup('.berty.types.MultiMemberGroupAdminRoleGrant'),
		MultiMemberGroupInvitationCreate: jsonPb.lookup(
			'.berty.types.MultiMemberGroupInvitationCreate',
		),
		AppMetadataSend: jsonPb.lookup('.berty.types.AppMetadataSend'),
		AppMessageSend: jsonPb.lookup('.berty.types.AppMessageSend'),
		GroupMetadataEvent: jsonPb.lookup('.berty.types.GroupMetadataEvent'),
		GroupMessageEvent: jsonPb.lookup('.berty.types.GroupMessageEvent'),
		GroupMetadataSubscribe: jsonPb.lookup('.berty.types.GroupMetadataSubscribe'),
		GroupMetadataList: jsonPb.lookup('.berty.types.GroupMetadataList'),
		GroupMessageSubscribe: jsonPb.lookup('.berty.types.GroupMessageSubscribe'),
		GroupMessageList: jsonPb.lookup('.berty.types.GroupMessageList'),
		GroupInfo: jsonPb.lookup('.berty.types.GroupInfo'),
		ActivateGroup: jsonPb.lookup('.berty.types.ActivateGroup'),
		DeactivateGroup: jsonPb.lookup('.berty.types.DeactivateGroup'),
		ContactState: jsonPb.lookup('.berty.types.ContactState'),
		ShareableContact: jsonPb.lookup('.berty.types.ShareableContact'),
	},
}
export const google = {
	api: {
		http: jsonPb.lookup('.google.api.http'),
		Http: jsonPb.lookup('.google.api.Http'),
		HttpRule: jsonPb.lookup('.google.api.HttpRule'),
		CustomHttpPattern: jsonPb.lookup('.google.api.CustomHttpPattern'),
	},
	protobuf: {
		FileDescriptorSet: jsonPb.lookup('.google.protobuf.FileDescriptorSet'),
		FileDescriptorProto: jsonPb.lookup('.google.protobuf.FileDescriptorProto'),
		DescriptorProto: jsonPb.lookup('.google.protobuf.DescriptorProto'),
		ExtensionRangeOptions: jsonPb.lookup('.google.protobuf.ExtensionRangeOptions'),
		FieldDescriptorProto: jsonPb.lookup('.google.protobuf.FieldDescriptorProto'),
		OneofDescriptorProto: jsonPb.lookup('.google.protobuf.OneofDescriptorProto'),
		EnumDescriptorProto: jsonPb.lookup('.google.protobuf.EnumDescriptorProto'),
		EnumValueDescriptorProto: jsonPb.lookup('.google.protobuf.EnumValueDescriptorProto'),
		ServiceDescriptorProto: jsonPb.lookup('.google.protobuf.ServiceDescriptorProto'),
		MethodDescriptorProto: jsonPb.lookup('.google.protobuf.MethodDescriptorProto'),
		FileOptions: jsonPb.lookup('.google.protobuf.FileOptions'),
		MessageOptions: jsonPb.lookup('.google.protobuf.MessageOptions'),
		FieldOptions: jsonPb.lookup('.google.protobuf.FieldOptions'),
		OneofOptions: jsonPb.lookup('.google.protobuf.OneofOptions'),
		EnumOptions: jsonPb.lookup('.google.protobuf.EnumOptions'),
		EnumValueOptions: jsonPb.lookup('.google.protobuf.EnumValueOptions'),
		ServiceOptions: jsonPb.lookup('.google.protobuf.ServiceOptions'),
		MethodOptions: jsonPb.lookup('.google.protobuf.MethodOptions'),
		UninterpretedOption: jsonPb.lookup('.google.protobuf.UninterpretedOption'),
		SourceCodeInfo: jsonPb.lookup('.google.protobuf.SourceCodeInfo'),
		GeneratedCodeInfo: jsonPb.lookup('.google.protobuf.GeneratedCodeInfo'),
		Timestamp: jsonPb.lookup('.google.protobuf.Timestamp'),
	},
}
export const gogoproto = {
	goprotoEnumPrefix: jsonPb.lookup('.gogoproto.goprotoEnumPrefix'),
	goprotoEnumStringer: jsonPb.lookup('.gogoproto.goprotoEnumStringer'),
	enumStringer: jsonPb.lookup('.gogoproto.enumStringer'),
	enumCustomname: jsonPb.lookup('.gogoproto.enumCustomname'),
	enumdecl: jsonPb.lookup('.gogoproto.enumdecl'),
	enumvalueCustomname: jsonPb.lookup('.gogoproto.enumvalueCustomname'),
	goprotoGettersAll: jsonPb.lookup('.gogoproto.goprotoGettersAll'),
	goprotoEnumPrefixAll: jsonPb.lookup('.gogoproto.goprotoEnumPrefixAll'),
	goprotoStringerAll: jsonPb.lookup('.gogoproto.goprotoStringerAll'),
	verboseEqualAll: jsonPb.lookup('.gogoproto.verboseEqualAll'),
	faceAll: jsonPb.lookup('.gogoproto.faceAll'),
	gostringAll: jsonPb.lookup('.gogoproto.gostringAll'),
	populateAll: jsonPb.lookup('.gogoproto.populateAll'),
	stringerAll: jsonPb.lookup('.gogoproto.stringerAll'),
	onlyoneAll: jsonPb.lookup('.gogoproto.onlyoneAll'),
	equalAll: jsonPb.lookup('.gogoproto.equalAll'),
	descriptionAll: jsonPb.lookup('.gogoproto.descriptionAll'),
	testgenAll: jsonPb.lookup('.gogoproto.testgenAll'),
	benchgenAll: jsonPb.lookup('.gogoproto.benchgenAll'),
	marshalerAll: jsonPb.lookup('.gogoproto.marshalerAll'),
	unmarshalerAll: jsonPb.lookup('.gogoproto.unmarshalerAll'),
	stableMarshalerAll: jsonPb.lookup('.gogoproto.stableMarshalerAll'),
	sizerAll: jsonPb.lookup('.gogoproto.sizerAll'),
	goprotoEnumStringerAll: jsonPb.lookup('.gogoproto.goprotoEnumStringerAll'),
	enumStringerAll: jsonPb.lookup('.gogoproto.enumStringerAll'),
	unsafeMarshalerAll: jsonPb.lookup('.gogoproto.unsafeMarshalerAll'),
	unsafeUnmarshalerAll: jsonPb.lookup('.gogoproto.unsafeUnmarshalerAll'),
	goprotoExtensionsMapAll: jsonPb.lookup('.gogoproto.goprotoExtensionsMapAll'),
	goprotoUnrecognizedAll: jsonPb.lookup('.gogoproto.goprotoUnrecognizedAll'),
	gogoprotoImport: jsonPb.lookup('.gogoproto.gogoprotoImport'),
	protosizerAll: jsonPb.lookup('.gogoproto.protosizerAll'),
	compareAll: jsonPb.lookup('.gogoproto.compareAll'),
	typedeclAll: jsonPb.lookup('.gogoproto.typedeclAll'),
	enumdeclAll: jsonPb.lookup('.gogoproto.enumdeclAll'),
	goprotoRegistration: jsonPb.lookup('.gogoproto.goprotoRegistration'),
	messagenameAll: jsonPb.lookup('.gogoproto.messagenameAll'),
	goprotoSizecacheAll: jsonPb.lookup('.gogoproto.goprotoSizecacheAll'),
	goprotoUnkeyedAll: jsonPb.lookup('.gogoproto.goprotoUnkeyedAll'),
	goprotoGetters: jsonPb.lookup('.gogoproto.goprotoGetters'),
	goprotoStringer: jsonPb.lookup('.gogoproto.goprotoStringer'),
	verboseEqual: jsonPb.lookup('.gogoproto.verboseEqual'),
	face: jsonPb.lookup('.gogoproto.face'),
	gostring: jsonPb.lookup('.gogoproto.gostring'),
	populate: jsonPb.lookup('.gogoproto.populate'),
	stringer: jsonPb.lookup('.gogoproto.stringer'),
	onlyone: jsonPb.lookup('.gogoproto.onlyone'),
	equal: jsonPb.lookup('.gogoproto.equal'),
	description: jsonPb.lookup('.gogoproto.description'),
	testgen: jsonPb.lookup('.gogoproto.testgen'),
	benchgen: jsonPb.lookup('.gogoproto.benchgen'),
	marshaler: jsonPb.lookup('.gogoproto.marshaler'),
	unmarshaler: jsonPb.lookup('.gogoproto.unmarshaler'),
	stableMarshaler: jsonPb.lookup('.gogoproto.stableMarshaler'),
	sizer: jsonPb.lookup('.gogoproto.sizer'),
	unsafeMarshaler: jsonPb.lookup('.gogoproto.unsafeMarshaler'),
	unsafeUnmarshaler: jsonPb.lookup('.gogoproto.unsafeUnmarshaler'),
	goprotoExtensionsMap: jsonPb.lookup('.gogoproto.goprotoExtensionsMap'),
	goprotoUnrecognized: jsonPb.lookup('.gogoproto.goprotoUnrecognized'),
	protosizer: jsonPb.lookup('.gogoproto.protosizer'),
	compare: jsonPb.lookup('.gogoproto.compare'),
	typedecl: jsonPb.lookup('.gogoproto.typedecl'),
	messagename: jsonPb.lookup('.gogoproto.messagename'),
	goprotoSizecache: jsonPb.lookup('.gogoproto.goprotoSizecache'),
	goprotoUnkeyed: jsonPb.lookup('.gogoproto.goprotoUnkeyed'),
	nullable: jsonPb.lookup('.gogoproto.nullable'),
	embed: jsonPb.lookup('.gogoproto.embed'),
	customtype: jsonPb.lookup('.gogoproto.customtype'),
	customname: jsonPb.lookup('.gogoproto.customname'),
	jsontag: jsonPb.lookup('.gogoproto.jsontag'),
	moretags: jsonPb.lookup('.gogoproto.moretags'),
	casttype: jsonPb.lookup('.gogoproto.casttype'),
	castkey: jsonPb.lookup('.gogoproto.castkey'),
	castvalue: jsonPb.lookup('.gogoproto.castvalue'),
	stdtime: jsonPb.lookup('.gogoproto.stdtime'),
	stdduration: jsonPb.lookup('.gogoproto.stdduration'),
	wktpointer: jsonPb.lookup('.gogoproto.wktpointer'),
}
