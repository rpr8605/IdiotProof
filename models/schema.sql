create database items_db;
use items_db;

create table items (
id int auto_increment not null,
item_name varchar(255) not null,
category varchar(255),
expiration_date date not null,
notes text,
warranty_valid boolean default true,
primary key (id)
);