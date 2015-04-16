## - Forum
### Description
- Requesting a Forum
- Purpose (Jake loves discussion amongst his friends, but he wants a way to keep it organized. He wants his own forum.)

<br/>


## Client Request: Forum Requirements

1) Jake wants his friends to be able to discuss things by topics.
  -
Users should be able to create topics, and other users should be able to comment on those topics.

2) ~~Jake isn't concerned about sub-comments, for now~~

3) Jake also wants to be able to see what topics have the most comments.

4) Jake thinks it would be cool if users could vote on topics, and have the topics displayed based on popularity.

5) Jake is a nerd, and is a fan of proper formatting. He wants everyone to write their discussion posts in markdown format.

6) Jake would like the application to automatically tag posts with the location from which they are written (He does not want his friends to have to enter their location).

<br/>

### Client Request simplified

- User can create a topic
- User can create a comment on a topic
- Other users should be able to comment on those topics.
- Able to see what topics have the most comments.
- Users could vote on topics
- Users are able to have the topics displayed based on popularity.
- Users must write their discussion posts in markdown format. API:  [marked](https://github.com/chjj/marked)
- Application must be able to automatically tag posts with the location from which they are written (He does not want his friends to have to enter their location). API: [ipinfo.io](http://ipinfo.io/)

![ERD](https://github.com/SaintClever/Knope/blob/master/w04/d05/Homework/ERD.jpg)

### Topic Table - Correlates to comments table by FOREIGN KEY

| ID | Title                     | Body      | Vote | Commenter |
|----|---------------------------|-----------|------|-----------|
| 1  | JavaScript Desktop Apps   | Comment_1 |   9  | Bobby     |
| 2  | Node.js & Express         | Comment_2 |   7  | Cary      |
| 3  | Ruby gone mobile          | Comment_3 |   3  | Kangil    |
| 4  | Adobe's Brackets Editor   | Comment_4 |   6  | Efosa     |
| 5  | Chuck Norris tames Python | Comment_5 |  22  | Mickey    |

<br/>


### Comments Table - Correlates to Topics table

| ID | Topic_ID | Body      | Location                         |
|----|----------|-----------|----------------------------------|
| 1  |    1     | Comment_1 | [ipinfo.io](http://ipinfo.io/)_1 |
| 2  |    2     | Comment_2 | [ipinfo.io](http://ipinfo.io/)_2 |
| 3  |    3     | Comment_3 | [ipinfo.io](http://ipinfo.io/)_3 |
| 4  |    4     | Comment_4 | [ipinfo.io](http://ipinfo.io/)_4 |
| 5  |    5     | Comment_5 | [ipinfo.io](http://ipinfo.io/)_5 |
