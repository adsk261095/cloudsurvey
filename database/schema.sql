drop database if exists cloudsurvey;
create database cloudsurvey;

\c cloudsurvey;


create type studentchoice as enum ('Placement','MS','MBA','MTech');

drop table if exists studentdata;
create table studentdata(
    id serial primary key,
    name varchar not null,
    sid integer not null unique,
    cgpa varchar not null,
    option studentchoice 
);

drop table if exists admin;
create table admin (
    id serial primary key,
    email_id text not null unique,
    password text not null, 
);
