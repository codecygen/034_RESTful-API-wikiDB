HOW IT WORKS?
===
1) localhost:3000 will show all the entered title and contents to the database.
2) if there is nothing exists, new title and content can be added to the database with POSTMAN App's POST request from the localhost:3000/articles. This link is the link for GET, POST and DELETE requests for database and all of the can be done from POSTMAN App.
3) If you would like to request a special title and content, GET request can be done via localhost:3000/articles/"countryname". If "countryname" is not in the database, web app will warn you that it does not exist in the database.


Entries we would like to enter

title: Canada  
content: Canada is the largest country in the Western hemisphere and the second largest country in the world   after Russia and borders only one country, the United States of America.

title: France  
content: France is the largest country in the EU and sometimes called the hexagon.

title: USA  
content: The capital city of the USA is called Washington D.C. D.C. stands for District of Columbia.


POST REQUEST
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

GET and DELETE REQUEST
===

You can use POSTMAN App similarly to send a GET request. All you need to do is to change verb to GET.