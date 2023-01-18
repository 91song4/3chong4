function create(o: object | null): void {}

create({ prop: 0 });
create(null);

create(42);
create("string");
create(false);
create(undefined);
