var sqlite3 = require('sqlite3').verbose(); // require sqlite3
var db = new sqlite3.Database('./forumDB.db'); // use 'new' to create a new database


db.run("CREATE TABLE Topics (Topics_ID INTEGER PRIMARY KEY AUTOINCREMENT, Title varchar, Body text, Vote integer, Writtten_by varchar);");

/*
Topics Table - Correlates to comments table

| ID | Title                     | Body       | Vote | Written_by |
|----|---------------------------|------------|------|------------|
| 1  | JavaScript Desktop Apps   | Comment_01 |   0  | Bobby      |
| 2  | Node.js & Express         | Comment_02 |   0  | Cary       |
| 3  | Ruby gone mobile          | Comment_03 |   0  | Kangil     |
| 4  | Adobe's Brackets Editor   | Comment_04 |   0  | Efosa      |
| 5  | Chuck Norris tames Python | Comment_05 |   0  | Mickey     |
*/

db.run("CREATE TABLE Comments (Comments_ID INTEGER PRIMARY KEY AUTOINCREMENT, Body text, Location varchar, Topics_ID integer, FOREIGN KEY (Topics_ID) REFERENCES topics (id));");

/*
Comments Table - Correlates to Topics table by FOREIGN KEY

| Body       | Location                  | Topics_ID |
|------------|---------------------------|-----------|
| Comment_01 | Saint. Elizabeth, Jamaica |     1     |
| Comment_02 | Queens, New York          |     2     |
| Comment_03 | Tenri, Japan              |     3     |
| Comment_04 | Boyle Heights, California |     4     |
| Comment_05 | Chernobly, Ukraine        |     5     |
*/

