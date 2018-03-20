\c cloudsurvey;



delete from studentdata;
insert into studentdata (name, sid, cgpa, option) values ('Aman', 14103026, 8.80, 'Placement');
insert into studentdata (name, sid, cgpa, option) values ('Darwin', 14103084, 9.90, 'Placement');
insert into studentdata (name, sid, cgpa, option) values ('Amisha', 14103063, 8.90, 'MS');
insert into studentdata (name, sid, cgpa, option) values ('Aman', 14103026, 8.80, 'Placement');

delete from admin;
insert into admin (email_id, password) values ('aman@gmail.com', 'temp');
insert into admin (email_id, password) values ('darwin@gmail.com', 'temp');
insert into admin (email_id, password) values ('amisha@gmail.com', 'temp');



-- create type studentchoice as enum ('Placement','MS','MBA','MTech');

-- drop table if exists studentdata;
-- create table studentdata(
--     id serial primary key,
--     name varchar not null,
--     sid integer not null unique,
--     cgpa varchar not null,
--     option studentchoice not null
-- );
-- drop table if exists admin;
-- create table admin (
--     id serial primary key,
--     email_id text not null unique,
--     password text not null
-- );
-- delete from studentdata;
-- insert into studentdata (name, sid, cgpa, option) values ('Aman', 14103026, 8.80, 'Placement');
-- insert into studentdata (name, sid, cgpa, option) values ('Darwin', 14103084, 9.90, 'Placement');
-- insert into studentdata (name, sid, cgpa, option) values ('Amisha', 14103063, 8.90, 'MS');
-- insert into studentdata (name, sid, cgpa, option) values ('Abhinav', 14103081, 8.80, 'MTech');

-- delete from admin;
-- insert into admin (email_id, password) values ('aman@gmail.com', 'temp');
-- insert into admin (email_id, password) values ('darwin@gmail.com', 'temp');
-- insert into admin (email_id, password) values ('amisha@gmail.com', 'temp');