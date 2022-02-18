# ID---Assignment-2

## Running Web Application
### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Website target and purpose
- our website is deloyed by a government entity (gov.sg)
- target audience: citizens of Singapore
- which want to use the website to garner attention and spread awareness regarding the covid-19 cases around the world. Through using an interactive hot map to gamify the experience and make it more interactive and visually friendly for the user with up to date figures.
- in addition we have up to date global headlines news daily to allow user to stay updated with real time statistics and credible news.
- further more we provide information regarding the different available vaccination informing and educating the user and allowing them to evaluate and finally book an appointment with us for vaccination.

## Pages & their features
### Home page (index.html)
-An overview of what covid-19 is and how it has impacted our lives in Singapore.
-Also contains information on the threat of covid-19 and it could negatively affect usbif it is not collectively contained.

### Global headlines
 (uses API)(news-app.js)
- UN response 
- WHO measures
- Safety measurements
- global headlines around the world
- update user on reliable sources and how global community has responded and provide current circulating news.


### Analytics page 
(uses API)(Covid19-tracker.js)
- Card displaying figures of (cases/ recovered/ deaths)
- figures regarding all countries
- Interactive map (analysing different countries)


### Vaccination (vaccination.html)
- An overview of what a vaccine is and why you should take it
What each type of vaccine and their differences
The side effects of taking a vaccine
- to inform people on what vaccination is for what and which vaccine should the user take as well as to warn them ahead of time of the temporary side effects it causes. Before allowing them to make an appointment.


### Appointment(Appointment .html)
(Uses lottie animation)(uses JS & Jquery)(helpline.html)
- display location of ministry of health head quarter
- who to call for regarding covid (helping provided)
- MOH and all
https://www.moh.gov.sg/contact-us
- Appointment for vaccination
(Once Appoinment booked lottie is used as a form of confirmation)(this is linked to vaccination page allowing the user to make a sound decision after they get an overview of all the available vaccines)

### Nav bar
-link to our parent web page gov.sg
-allow user to navigate through all the pages 

### Footer
- Will include all social links 
-with trademark below 



## Unique Features
### Analytical and interactive page
- On this page user are able to hover and shift the axis, chose different fields(which contains countries,
and see the variation in Covid cases and be able to view data derived from an API containg much information relating to covid around the world. Allowing user to graspe the Covid cases and visualise it in differnet manner. Including number, statistics and visuals.


## Project description 
### Design process 
- first we created the wireframe for both web and mobile version disregarding the background and images
-thereafter we searched all the relevant images 
- then we made fetches for all respective apis information regarding the analytics page and the global headlines page.
- thereafter we insert the content and added beatification to all pages
- then we ensured responsiveness amongst the pages.
- lastly we link all pages on deployment with inclusion of nav bar.

## Test documentation
### Home
- NIL -

### Global headlines
- News api have been successfully retrived with the ability to refresh every once in awhile with update global headlines. As it has been crossed referenced daily to check the changes and updates by pulling from the respective update api.

### Analytics
- All components tested when every user changes the selection of countryies the card will be updated respectively with (cases/deaths/recovers).
(In addition is checked to update daily base on their time zones, hence if the days data have not been update yet it will not be displayed and will display a default value of +0 but the total cases/deaths/recovery of the respective country will still be displayed)
-Additional when user press the pop up info of each country on the hot map it has been mapped correctly and accurately of its info to the respective country.
- In addition console.log has also been used to check when a change of component activated the useEffect code and excute the respective code.
- Figures have been crossed references with the exact figured from the table to the relibale documentation of covid cases in google and all data have been accurate and updated.

### Vaccination
- NIL -

### Appointment
- Form validation


### HTML & CSS
- all html and css has gone through respective validation website and have been cleared with no errors detected.

### Javascript 
- have been validated using console with little to one minor error appearing and all others error have been fixed, all functions is able to execute successfully.

## Technologies Used
languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, name is provided, a link to its official site and a short sentence of why it was used.

### HTML 
- Used to provide the content of the page.
- It is also used in react to along side JS, using JSX.
- (No official website)

### CSS 
- Used to provide styling to the contents.
- (No official website)

### JavaScript
- Makes our web pages interactive, such as our form when the user submit their details.
- https://js.org/

### JQuery (JS Library)
- The project uses JQuery to simplify DOM manipulation.
- https://openjsf.org/

### React (JS Library)
- The project uses React to build user interface based on UI components.
- https://reactjs.org/
-  We also used extensions, "ES7+ React/Redux/React-Native snippets" which allows us to use JavaScript and React/Redux snippets in ES7 with Babel plugin features for VS Code. 
-  https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

### Node js (Run Time environment)
- The project uses Node JS to create scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task. This would
deter it from blocking the web from running especially for event driven servers like ours.
-https://nodejs.org/en/

### Matrerial UI (JS Liabries)
- The project uses Material-UI (library) that allows us to import and use different components to create a user interface in our React applications. 
- https://mui.com/

### Numeral js (JS Library)
- We use Numeral JS for formatting and manipulating numbers.
- https://www.npmjs.com/package/numeral

### Lottie
-  We use Lottie as animation to captivate and entertain the user while the page is loading and including when the user submits a form to validate and reassure its submission.
- https://lottiefiles.com/animation/js

### firebase
- we use firebase to specially deploy our website for the react based web apllication as it require fetching and interaction with api.
- https://firebase.google.com/
### bootstrap
- we use bootstrap to help with certain styling of our web application including the forms
- https://getbootstrap.com/


## Credits
### API
https://disease.sh
### Logo 
 The Logo and Icons used for these websites are mostly obtained from
- https://www.gov.sg/        (logo)
- https://www.flaticon.com/  (icon)
- https://lottiefiles.com/   (animation)

### Media 
 The photos used in this site were obtained from
- https://www.gov.sg/-/media/gov/logo.png?as=0&mw=1000&hash=66C1E0D1EE8B1238022B377C728DF485 (gov.sg website)(Gov logo)
- https://www.tracetogether.gov.sg/img/tt-og-2.png (gov.sg website)(TT icon)
- https://cdn.discordapp.com/attachments/492353774829043713/935071279655030854/covid-19-vaccine-mixing-shutterstock_1891563244.png (Vaccine Image)
- https://c.files.bbci.co.uk/D505/production/_115033545_gettyimages-1226314512.jpg (Virus Image)
- https://images.theconversation.com/files/422498/original/file-20210921-19-1kb6j0s.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop (Virus Image)
- https://cdn-icons.flaticon.com/png/512/5341/premium/5341753.png?token=exp=1643009386~hmac=c69c878e265bc722ccdb1614b01ebb26 (Virus Protection Shield Image)


### Data and Resources
- https://disease.sh/docs/#/ (Covid API to get info for our Analytics page)
- https://leafletjs.com/ (Map Display for our Analytics page)
- https://www.google.com/maps (Map Display to display the head quater location in HelpLine page)









