var sqlite3 = require('sqlite3').verbose(); // require sqlite3
var db = new sqlite3.Database('./forumDB.db'); // use 'new' to create a new database

// **** ASK FRITZ **** whenever I insert this info I get a weird error

/*
events.js:85
      throw er; // Unhandled 'error' event
            ^
Error: SQLITE_ERROR: near "s": syntax error
    at Error (native)
    */

//These are the values that are already inserted into topics table
db.run("INSERT INTO topics (title, body, vote, written_by) VALUES ('JavaScript Desktop Apps', 'Comment_01', 0, 'Bobby');");
db.run("INSERT INTO topics (title, body, vote, written_by) VALUES ('Node.js & Express', 'Comment_02', 0, 'Cary');");
db.run("INSERT INTO topics (title, body, vote, written_by) VALUES ('Ruby gone mobile', 'Comment_03', 0, 'Kangil');");
db.run("INSERT INTO topics (title, body, vote, written_by) VALUES ('Adobe Brackets Editor', 'Comment_04', 0, 'Efosa');");
db.run("INSERT INTO topics (title, body, vote, written_by) VALUES ('Chuck Norris tames Python', 'Comment_05', 0, 'Mickey');");

// *** NOTE *** YOU HAVE TO INSERT ONE TABLES INFO AT A TIME

// //These are the values that are already inserted into comments table
db.run("INSERT INTO comments (body, location, topics_id) VALUES ('comment_01', 'Saint. Elizabeth, Jamaica', 1);");
db.run("INSERT INTO comments (body, location, topics_id) VALUES ('comment_02', 'Queens, New York', 2);");
db.run("INSERT INTO comments (body, location, topics_id) VALUES ('comment_03', 'Tenri, Japan', 3);");
db.run("INSERT INTO comments (body, location, topics_id) VALUES ('comment_04', 'Boyle Heights, California', 4);");
db.run("INSERT INTO comments (body, location, topics_id) VALUES ('comment_05', 'Chernobly, Ukraine', 5);");

/*
Topics Table - Correlates to comments table

| id | title                     | body       | vote | written_by |
|----|---------------------------|------------|------|------------|
| 1  | JavaScript Desktop Apps   | Comment_01 |   0  | Bobby      |
| 2  | Node.js & Express         | Comment_02 |   0  | Cary       |
| 3  | Ruby gone mobile          | Comment_03 |   0  | Kangil     |
| 4  | Adobe's Brackets Editor   | Comment_04 |   0  | Efosa      |
| 5  | Chuck Norris tames Python | Comment_05 |   0  | Mickey     |


Comments Table - Correlates to Topics table by FOREIGN KEY

| body       | location                  | topics_id |
|------------|---------------------------|-----------|
| Comment_01 | Saint. Elizabeth, Jamaica |     1     |
| Comment_02 | Queens, New York          |     2     |
| Comment_03 | Tenri, Japan              |     3     |
| Comment_04 | Boyle Heights, California |     4     |
| Comment_05 | Chernobly, Ukraine        |     5     |
*/

