Drop database if exists purchasedItems_db;
create database purchasedItems_db;
use purchasedItems_db;

create table purchasedItems (
id int auto_increment not null,
item_name varchar(255) not null,
category varchar(255),
expiration_date date not null,
notes text,
warranty_valid boolean default true,
phone_number bigint(20),
createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
primary key (id)
);