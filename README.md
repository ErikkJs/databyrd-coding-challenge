# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


This is our coding challenge. It gives us a chance to see your abilities and how you approach problems. It is designed to give you unlimited creative freedom as you develop a solution. Feel free to use any packages/tools/etc. you'd like to build out the project.

You will need to build a simple web app where you will make some calls to a NASA API and put the data on the screen as you see fit! 

Relevant Link to documentation: https://api.nasa.gov/

HTTP Request
GET https://api.nasa.gov/planetary/apod

concept_tags are now disabled in this service. Also, an optional return parameter copyright is returned if the image is not public domain.

Query Parameters
Parameter	Type	Default	Description
date	YYYY-MM-DD	today	The date of the APOD image to retrieve
start_date	YYYY-MM-DD	none	The start of a date range, when requesting date for a range of dates. Cannot be used with date.
end_date	YYYY-MM-DD	today	The end of the date range, when used with start_date.
count	int	none	If this is specified then count randomly chosen images will be returned. Cannot be used with date or start_date and end_date.
thumbs	bool	False	Return the URL of video thumbnail. If an APOD is not a video, this parameter is ignored.
api_key	string	DEMO_KEY	api.nasa.gov key for expanded usage




To run the challenge:

- FORK this repo
- Download forked repo and run `npm install && npm start`
- Open `localhost:3000` in your browser
- Enjoy

Once complete, please email us a link to your forked repo with clean, tested code. We will use Chrome to run it.

- databyrd Engineering