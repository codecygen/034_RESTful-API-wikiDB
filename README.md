​ REST (Representational State Transfer):
Client ------------------------------------------------> Server
	                 HTTP Request
	      app.get(function(req, res) {};

req is request to the server, res is the response of the server.

Requests:
HTTP: Hyper Text Transfer Protocol Secure request
HTTPS: Secure Hyper Text Transfer Protocol Secure request
FTP: File Transfer Protocol request

REST is an architectural style for designing APIs.
SOAP, GraphQL, FALCOR are some other architectural styles.

To make your API RESTful, there are couple of cases.
1) Use HTTP Request Verbs (GET, POST, PUT, PATCH, DELETE).
CRUD (Create, Read, Update, Delete) works same for databases just like HTTP Verbs.

In HTTP,
GET corresponds to READ of database (app.get).
POST corresponds to CREATE of database (app.post).
PUT AND PATCH correspond to UPDATE of database (app.put, app.patch). PUT updates entire entry, while PATCH is only updates the relevant section of the entry.
DELETE corresponds to DELETE of database (app.delete)


2) Use Specific Pattern of Routes/Endpoint URLs.















