#Routes: HTTP route architecture for App

![routeArchitecture](https://github.com/SaintClever/Knope/blob/master/w04/d05/Homework/ERD.jpg)

<br />

##Welcome Page: get('/')
- The welcome page request the route get('/topics')

<br />

##The Forum Page: get('/topics')
- Requests Create Your Topic page with the route of get('/topics/new') through New Topic link
- Requests individual Topic Title ID page with the route of get('topics/:ID') if one of the Topics are clicked

<br />

##Create your topic page: get('/new')
- Allows user to CREATE a new Topic and topic body
- After user hits submit it POST/Creates a ('/topics') for viewing within ('/topics')
- And REDIRECTS user to ('/topics')

<br />

##Topic Title: get('topics/:id)
- Allows user to Put/Update individual topic's votes (basically increments votes)
- Allows user to Put/Update individual topic's comments (basically adds comments)

![ERD](https://github.com/SaintClever/Knope/blob/master/w04/d05/Homework/ERD.jpg)

###Site Map
![siteMap](https://github.com/SaintClever/Knope/blob/master/w04/d05/Homework/ERD.jpg)
