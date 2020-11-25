## Ada Capital Front End Test

Consuming the Yelp ALI to make a functional front-end to retrieve Restaurants data and apply both client-side and server-side filters. 

## Installation and Setup Instructions 

Clone down this repository. You will need `node` and `npm` installed globally on your machine.
There are two parts of the project, the front-end client and a proxy server to bypass CORS errors

### Proxy Server:

  Navigate to the proxy folder and run:
  `npm install`  
  
  Then, start the server by running:
  `npm run start`  

  By default, the server will run on `localhost:3000`, **make sure that nothing else is running on your machine at that port before running the server**.

### Front-end Client (The actual test):
  
  Open a new terminal, and in the root folder, run:
  `npm install`  
  
  Then, start the server by running:
  `npm start` 

  Then visit the app at:
  `localhost:8080`  

## Areas of potential improvement

Use of CSS preprocessors can greatly improve the readability of the CSS styles in the App.

Use of useReducer hook to manage state inside the custom hooks that fetch data from the API can also be a potential improvement.

Use of UI libraries such as Material-UI etc. would have potentially increased the speed of development of components such as card and drop-down menu. However, I chose to develop these components myself to showcase my abilities to the recruiter.

Due to time constraint, I implemented HashRouter instead of BrowserRouter as BrowserRouter requires additional server configuration.

## Use of libraries

Axios for API requests

Material UI for Rating UI element

React Router DOM for client side routing

## Notes

The [`categories` endpoit](https://www.yelp.com/developers/documentation/v3/all_categories) provided by Yelp and mentioned in the test description returns all the business categories available at Yelp, and not just restaurant's categories, this is a [huge list.](https://www.yelp.com/developers/documentation/v3/all_category_list)
Therefore, instead of filling the categories menu through the API, I am using static category options. There was no way to use that endpoint for filling in these options.

I have, however, implemented suble animation on buttons and drop down menu headers. I have also implemented the map inside the detail view page.

Considering that providing tests were listed as a bonus, I did not provide them due to time constraint. However, if I had, I would have used Jest + Enzyme.
