MDLIVE QA code challenge. 

Hello, 
My name is Benjamin Moore IV and this is my submission for the MDLIVE QA challenge. The purpose of this challenge was to test our ability to paginate over an array of JSON objects and be able to sort them and view them. I made an array of 10 JSON objects, all of which had an ID number that was given via an automatic Mongoose Schema along with an app name ("my-app-001"). 

My task was to build a way to allow pagination over the objects. I attempted this task using a combination of Mongoose, Express and JavaScript. Using Mongoose, I created a schema and seeded 10 app objects into a database I saved on the MongoDB cloud. After I saved the objects, I created a server.js file where I connected my Mongo database to the server. I then created a base route ("/") that would act as a "Splash Page" due to the fact that I didn't do any front-end work on here. 

With setting up the paginations  I created a function to act as a model for future use. I had to do some research on how to set it up but once I did get the function set up, I was able to use a very minimal get request for the apps route. This model also allows for easy expansion to other GET requests as needed. 

The hardest part for the model was trying to make it sort by either the name or the ID. After asking around for help from my mentors and colleagues I devised a way to make the sort aspect be its own variable. By setting it as a variable I was able to put in words to match such as "name" becoming the sort functionality of making the file sort by name but still being able to refresh and put in the ability to make it sort by ID. By making this set of functions its own variables, I would be able to make the code not only sort by name and ID, but also make it sort by ascending or descending name and ID as well with some extra lines of code. 

Due to the difficulty with the code and the unfamiliarity of pagination (I had built several databases and worked with pulling data from servers and also from other APIS but had never implemented my own pagination code into my own servers and databases) I was unable to complete the stretch goals of making it run automatic testing. 

Overall I am very satisfied with my work and hope this coding challenge is a great way to showcase my talents. 

The code is deployed to https://sleepy-crag-14052.herokuapp.com/ 

At the splash page you can start inputing your parameters in the style of "/apps?page=<pagenumber>&limit=<limitnumber>&sort<id or name>" (All characters inside of "<>" are the variables you can fill in). 