CREATE TABLE wedding (
    id serial primary key,
    name varchar(100),
    guest varchar(100),
    attend boolean,
    meal varchar (100),
    guestmeal varchar (100)
);