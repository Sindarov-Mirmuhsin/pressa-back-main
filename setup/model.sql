CREATE DATABASE pressa;
\c pressa;

create extension pgcrypto;

CREATE TABLE IF NOT EXISTS admins(
    admin_id serial primary key,
    username varchar(32) not null,
    password varchar(60) not null
);


CREATE TABLE IF NOT EXISTS categories(
    category_id serial primary key,
    category_name varchar(30) not null,
    status varchar(15) default 'active',
    created_at timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS sub_categories(
    sub_category_id serial primary key,
    sub_category_name varchar(30) not null,
    category_id int references categories(category_id),
    status varchar(15) default 'active',
    created_at timestamp default current_timestamp
);


CREATE TABLE IF NOT EXISTS event(
    event_id serial primary key,
    body text not null,
    event_img text not null,
    description varchar(300) not null,
    event_link text not null,
    event_type varchar(20) not null,
    event_date varchar(10) not null,
    event_time varchar(5) not null,
    event_count int default 0,
    status varchar(15) default 'new',
    created_at timestamp default current_timestamp,
    user_role varchar(20) not null,
    user_name varchar(64) not null,
    user_proff varchar(100) not null,
    company_name varchar(100),
    phone_number varchar(20) not null,
    phone_second varchar(20) not null,
    sub_category_id int references sub_categories(sub_category_id),
    category_id int references categories(category_id)
);







