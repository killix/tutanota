type ReadCounterData = {
	_type: TypeRef<ReadCounterData>;
	_format: NumberString;
	monitor: string;
	owner: Id;

}

type ReadCounterReturn = {
	_type: TypeRef<ReadCounterReturn>;
	_format: NumberString;
	value: ?NumberString;

}

type WriteCounterData = {
	_type: TypeRef<WriteCounterData>;
	_format: NumberString;
	counterType: ?NumberString;
	row: string;
	column: Id;
	value: NumberString;

}

type ApprovalMail = {
	_type: TypeRef<ApprovalMail>;
	_format: NumberString;
	_id: IdTuple;
	_ownerGroup: ?Id;
	_permissions: Id;
	date: ?Date;
	range: ?string;
	text: string;

	customer: ?Id;
}

