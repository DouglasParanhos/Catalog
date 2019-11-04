# Catalog
Web app using react + nodeJS + mysql to manage albums in a Catalog.

This Webapp runs in localhost

MySQL configurations are:
 host: 'localhost',
 port: 3306,
 user: 'admin',
 password: 'admin',
 database: 'Catalog'

If you want customized configurations, you should edit it in server/db/connection.js.
Script with database tables is in server/create_database.mysql but don't worry, if you don't want to create it by yourself, when jondeJS starts, it will be created.

Command to init NodeJS should be ran in server folder.
NodeJS uses port 3001 (can be configured in server/index.js) and uses some modules:

express (npm install express)
consign (npm install consign)
body-parser (npm install body-parser)
mysql (npm install mysql)
