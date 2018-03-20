# My project's README

Steps to build:-
1) Install Postgresql and run the following .sql file to import the tables.
/Library/PostgreSQL/10/bin/psql -U postgres -f database/studentplus.sql
2) Install Node & NPM
3) Once you clone the repository, Change the PostgreSql user name and password in the connection string. Located in the file queries.js
4) Do "npm install" to install the dependencies.
5) Do "npm start" to start the server
6) Trigger the API : http://localhost:3000/api/query?q=<URL encoded sql query>

Sample query to get all posts part of a topic :-
http://localhost:3000/api/query?q=select%20%2A%20from%20feed_item%20where%20id%20%3D%28select%20ft.feed_id%20from%20feed_topic%20ft%20where%20ft.topic_id%3D1%29%20and%20parent%20is%20null%3B




#Command to commit with author.
git add -A .
git commit --author="Smart Engineer <smartengg7@gmail.com>" -m "Query API backend"
git push
