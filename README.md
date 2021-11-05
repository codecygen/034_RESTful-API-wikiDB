How It Works?
===
1) localhost:3000 will show all the entered title and contents to the database.
2) GLOBAL GET, POST, DELETE REQUESTS: if there is nothing exists, new title and content can be added to the database with POSTMAN App's POST request from the localhost:3000/articles. This link is the link for GET, POST and DELETE requests for database and all of the can be done from POSTMAN App. From the same link, you can also delete the entire database with DELETE request.
3) SPECIFIC GET REQUEST: If you would like to request a title and content, GET request can be done via localhost:3000/articles/"countryname". If "countryname" is not in the database, web app will warn you that it does not exist in the database.
4) SPECIFIC PUT REQUEST: If you would like to edit a title and/or content, go to localhost:3000/articles/"countryname". Then with POSTMAN App fire up a PUT request, change title and/or content to the one you want and click send. In PUT request, for example if you leave title section empty but only put a new content section, PUT request will update the title section as an empty string and content will be the content you newly requested.
5) SPECIFIC PATCH REQUEST: If you would like to edit a title and/or content, go to localhost:3000/articles/"countryname". Then with POSTMAN App fire up a PATCH request, change title and/or content to the one you want and click send. In PATCH request, for example if you leave title section empty but only put a new content section, PATCH request will keep the title section as the original one in database and content will be the content you newly requested.
6) SPECIFIC DELETE REQUEST: If you would like to delete a title and content, go to localhost:3000/articles/"countryname". Then with POSTMAN App fire up a DELETE request. This will delete the entry from the database for that specific country.


Entries we would like to enter

title: Canada  
content: Canada is the largest country in the Western hemisphere and the second largest country in the world   after Russia and borders only one country, the United States of America.

title: France  
content: France is the largest country in the EU and sometimes called the hexagon.

title: Brazil  
content: Brazil's name comes from the pau-brasil, Portuguese for Brazil tree, the country's national tree and a natural resource that played an important role in the economic development of the nation.


How to Do GET, POST, PUT, PATCH, DELETE REQUEST
===

Download POSTMAN App locally.

Open up the software on your computer.

Create a POST request. enter these sections

POST: http://localhost:3000/articles  
KEY: VALUE  
title: Canada  
content: Canada is the largest country in the Western hemisphere and the second largest country in the world after Russia and borders only one country, the United States of America.

Click on "Body" tab and select "x-www-form-urlencoded" then hit "Send" button. This will send POST a request. If your program sends the request successfully, POSTMAN should show the message like:

"Successfully added a new article."

or in case sending fails, the message will be like,

"There has been a problem. Please contact admin."

GET, POST, PUT, PATCH and DELETE Requests
===

You can use POSTMAN App similarly to send GET, POST, PUT, PATCH and DELETE requests. All you need to do is to change verb to GET, POST, PUT, PATCH and DELETE, specify the link location, and then provide the key value pairs if necessary.