## npm :-
 1. npm does not means Node Package manager. It doesn't have any full form.
 2. npm manages packages. ALl the packages hosted there. (install:- npm init -y)
 3. npm is the standard repositary for all the packages . its the biggest pakage manager.
 4. all the libraries, all the utitlity comes from the npm.
 5. ## package.json file is a configration for our npm. 
          Also it keeps the track of what approx version of package or dependency intalled in our system.
 6. the most important package is Bundler (webpack,vite, fusebox,browserify,rollup,parcel) 
 7. Bundlers job is to bundles our app or package our app for Production ready.
 8. package-lock.json keeps the track of all the exact version of all the dependency which is installed. 
 9. package.json have caret in it but package-lock.json has not coz it tracks exact version.
       


Things need to make our app production ready:- Bundling, Codespliting, junking, image optimization,  remove comments, compressing, minify.

## There are two types of dependency that our app can have :-

1. Dev dependency     (it is generally required for in a development phase) (eg. npm install -D parcel)

2. Normal dependency   (used in Production also)

## Quesion in interview => ^ (caret)and ~ (tilde) in package.json.

^  :- this will upgrade minor version.
~  :- this will upgrade major version.

## node_modules:-
1. node_modules contains the actual data or code of those dependency that we needs. 
2. Its like a database.
3. node_modules fetches all the code of al the dependency into our systen and we can use that code.
4. TRANSITIVE dependencies :- dependency needs it own dependency.
    eg. parcel is dependent on other dependencies. these all dependencies are called TRANSITIVE dependencies.
5. Every dependency has its own package.json in which it has its own dependencies. ** 
6. Every package has its dependencies and their dependencies have their own dependencies and 
   their dependencies have their own dependencies. Thats why node_modules is big and huge.
7.node_modules is collection of dependencies (contains all our files, all codes, all our packages).  
8. We don't need to push node_modules in github coz its size is very big.
9. we put node_modules in gitignore file.
10. If you want some files will not go to production or not go to git so put it inside gitignore.
11. If you have package.json and package-lock.json than you can re-create all your node_modules.
12. i can generate node_modules on the server.


## parcel (bundler):-
1.(npx parcel index.html) cmd will make a development build.
  (npx parcel build index.html) cmd will make a production build.
2. parcel will host our app a server for us.
3. npx command will executes a package.
4. npm command install a package.
5. Dev Build
6. Local server
7. HMR = HOT Module Replacement ( automatically tracking our file changes and refreshing broswer after changing in files). 
8. File watching algorithm written in c++.
9. caching - Faster builds.
10. Image Optimization
11. Minification
12. Bundling
13. Compressing (removing white spaces)
14. parcel is managing everthing for you.
15. Consistent Hashing
16. Code Spliting
17. Differential Bundling :- to support older browsers.
18. Diagnostic
19. Error Handling
20. HTTPs
21. Tree Shaking - remove unused code for you.
22. parcel is fast coz it has parcel.cache .
23. Different for dev and production bundles.
24. when we do (npx parcel index.html) it genrates a development build of your project
hosted on to (local1234) and so when its generates build it will puts it in (dist) folder. then the code is coming from dist folder.
25. when you refresh page it will use (.parcel-cache) and (dist) folder to update page using HMMR.
26. we no need to push .parcel-cache and dist folder to github coz it will regenerate it on server when we run (npx parcel index.html).




React cdn links not a good way to inject react in our app.
1. Using cdn links make our app to get inject react from a other network call.
2. Its makes us easy or better if react is already in our node_modules.
3. Also we have to keep updating our urls cdn links for a new version so its better to have react in node_modules.


Normal javascript does not have import and export.

## REACT IS NOT THE ONLY THING THAT MAKING YOUR APP FAST. WE NEED ALOT MORE THINGS. ##


## Browerlist (package) :-
1. IT is such a powerfull tool.
2. we can configure settings on which browsers and versions of browsers your app will perform 100% better.
3. IT can also configure in which country our app perform better.


## SCRIPTS (package.json)
1. In Scripts we configure shotcut commands that are used in projects.
2. Example:- "Scripts" :{ "start": "parcel index.html"} used to start development build.
3. TO run it we do :- (npm run start ) => it will execute above command in scripts.
4. npm start can execute only for this. start is keyword reserved by npm.
4. Example:- "Scripts" :{ "build": "parcel build index.html"} used to start production build.
5. TO run it we do :- (npm run build) => it will execute build command shwon above in scripts.


# JSX
1. jsx is a javascript syntax which is easier to create react element.
2. jsx is not a part of react. they both different.
3. because we can write react without jsx also.
4. jsx makes the developer life easy.
5. jsx is separate and react is separate.
6. jsx is a convention where we kind of merge html and javascript together.
7. # jsx is not html inside javascript. jsx is different than html.
8. jxs is a html like syntax.
9. jxs is not a valid pure javascript.
10. Browser understand or javascript engine ES6 only.
11. # JSX code is Transpiled before it reaches the  JS Engine. 
12. # Transpiled means jsx code is coverted to the code ReactElement(js object) which browser can understand.
13. # Transpiling is done by PARCEL!!! but but its not parcel actually it assign this to a package.
## -------------------------------------------------------------------
14. # This transpiling done by package named!!!!!! Babel!!!!!!!!!1.
## -------------------------------------------------------------------
15. Babel is transpiling our code so that react will understand it .
16. Babel is a javascript compiler that js engine will understand.
17. # jxs => Babel transpile it to React.createElement => ReactElement (js object) => HtmlElementt(render).
18. Babel also Transpile es6 code to a code that older browser understand.
19. Babel is a some piece of javascript code / javascript library/ npm package.
20. Babel is another important package after parcel.
21. # To give attributes in jsx we use camelcase .



# This is a react element.
1. Heading is react element (js object).

2. const Heading = (
   <div id="container">
      <h1>Namaste React Functional component</h1>
   </div>
); 



# React Components :- 1. Class Based Components (old way) 2. Functional Components (New way).
  Everything in react is a component.
1. Always write functional components , no need to write class based componenets.
2. Class Based Components use javascript classes and Functional Components used javascript functions.
3. # when you creating any component named it with a capital letter otherwise you will get error later.

# Functional Components (New way)
1.Functional Components is a normal javascript function which return some piece of jsx.
2. which returns some jsx elements.
3.Functional Components is a javascript function which returns a ReactElements.
4. const Heading = () => (
   <div id="container">
      <h1>Namaste React Functional component</h1>
   </div>
); 
5. render functional component :- abc.render( <Heading />).
6.component composition :- composing two components in one another.
7. # WE can inject any type of javascript code in jsx using --> {}.
8. jsx also prevent cross-scripting attacks in your browser coz its like sanitize data before pass into it.


# Props (properties)
1. Passing a prop to a component is just a passing argument to a function.
2. React is wrapping these props and pass an object to the component.


# config driven ui 
1. means:- our website is driven by data/congif which comes from backend.
2. Our webiste data comes from the backend.
3. The config data will drive your ui.


# restdata?.data  This is known as optional chaining.



# You need to pass key in map() .
1. Lets take an example that there are many restaurants cards in our app and they are redering from map() . suppose a new card is added in your restaurants and if you don't give keys to previous restaurants card then react cant't distinguish between the new card and the previous listed restaurants cards then react wwil re-render all the restaurants cards again and its not a good pratice and if you have 1000 cards then react will render all 1000 restaurants cards everytime when a new card is inserted in restaurants cards.
2. # So its important is to have key in map().
3. {restlist.map((restaurants)=> {<Restaurants key={} resdata={restaurants} />})}.
# you should use always unique id in keys.
4.{restlist.map((restaurants, index)=> {<Restaurants key={index} resdata={restaurants} />})}
 # react itself says that its not recomended use index as key. (if order of data will be changed it will mess up)



 # what react will do , you can do same with html, css, javascript.
 # React or any other library or frameowork makes code developer friendly and you have to less write code.


 # It is good habit to name your constants in capital letters.



 # when you Export something using " Named Export " then you have to import it in currly brasis {}.
 example -: export const URL = {[...]}.
            import {URL} from "src".

# when you Export something using " Default Export " then you have to import it in normally.
 example -: const URL = {[...]}.
            export default URL.
            import URL from "src".           



# React Hooks
 Hooks are a normal js utility function for a purpose that react given to us.
 whenever you see a function starting with use than it is a hook.

## useState() 
1. useState() :- superpowerfull state variables in react.
2. Declare inside the component not outisde.
3. Don't create useState hook in if else condition, for loop or function.
   Maintains the state of your components.
  ## eg1. const [listOfRestaurants, setListOfRestaurants] = useState(RES_DATA);
  ##  useState() returns an array. ##
  ## eg2. const arr = useState(RES_DATA);
       const listOfRestaurants = arr[0];
       const setListOfRestaurants = arr[2];
   Above examples are same. we just destruct in eg2.
# whenever a state variable is update, react will re render the component. 

##  useEffect(()=>{},[])  ##
1. if no dependencies array passed => useEffect is called on every render.
2. if dependencies array passed => useEffect is called on initial render(just once).
3. if dependencies array is [btnName] and everytime btnName is updated then useEffect is called.

 useEffect is called after every render of that component. jab bhi component render hoga useEffect call hoga.
## This react hook useEffect will be called automatically after the component is rendered.





##### To collect value from Filter function use a const variable to collect result value
 Eg:-          const filter = listOfRestaurants.filter((res) => {
              return res.info.avgRating > 4.4;
            });
##### Pass props should be listOfRestaurants={listOfRestaurants} like this.
##### use a variable to destruction of it like data.listOfRestaurants.



## React is super fast coz it is good at Dom Manipulation . IT refresh components very very fast. ##




## In react16 a new algorithm is came out to update Dom is which is Recociliation Algorithm (react fiber):-
1. react fiber is a new way of finding the div and update the dom.
2. It has a Diff Algorithm.
3. iff Algorithm is it will find out the difference between the old virtual dom and new virtual dom and update the original/actual Dom.
4. virtual dom is a representation of Actuall Dom.
5. virtual dom is a javascript object. 
6. react keep all the track of UI or all the dom nodes.

## Why React is fast ##
Answer:- react is fast coz Dom Manipluation is Efficiently in react.
         How Because it has an virtual dom. virtual dom is a js object.
         React use a alogrithm react fiber and diff algorithm to do this all stuffs.
         It finds out difference between old virtual dom and new virtual dom and whenever react gots difference it will update the actual dom.
         IT maintains Data layer and UI layer in sync.

# Monolithic
1. All UI , BE , DB , auth are together.
# Microservices Architecture
1. seperation of concerns/ single resposibility priciple.
2. BE, UI, DB, sms service, Auth . they all are connected to each other via urls/api calls and interact to each other.


# Two approch to render data from backend to UI:-
Approch1. Loads -> Api (5000ms) -> render
Approch2. Loads -> render -> Api (5000ms) -> render :-
 1. second approch is a better UX .
 2. we use useEffect to fetch the data after render page and after getting data we will re render it.
 

## Shimmer UI ##
1. A grey skelton is loaded quickly in our web app page before our app fully rendered with data.
2. It a new technique of better UX.

## Conditional rendering : rendering something in condtion.



###### useState variables vs javascript variables:-  ######
1. they are special and powerfull variables.Using state variables will re render the whole component once again and update component with new values.
2. Normal variables will not render whole component again so if any changes occured than we can't refresh our compoment with that new values.

## Whenever state variables update, react triggers a reconciliation cycle (re-renders the component) ##



## react-router-dom ## Give components: 1.createBrowserRouter  2.RouterProvider 3. OutLet 4. Link
1. we will install npm i react-router-dom to install this package.
2. we will use createBrowserRouter to give configration of our routing.
3. Routing is way to create routes to different pages of our react app but pages is nothing but a normal components.
4. eg how to configure routing:-
    const appRouter = createBrowserRouter([
      {
         path: "/",
         element: <AppLayout />
      },
      {
         path: "/about",
         element: <About />
      },
      {
         path: "/contact",
         element: <contact />
      }

    ]);

5. createBrowserRouter takes an array of object.
6. This RouterProvider provides us the Actual Routing configration to our app.
7. react-router-dom gave us a hook called useRouteError.
   eg. import { useRouteError } from "react-router-dom";
   This will give us an error object which we can use to pass error information.
# OutLet:-
8. Children routes:-
   1. we use Outlet component from "react-router-dom" to do this.
   2. Outlet is getting filled with components that is passed as childrens into my parent.
   3. we can have mutiple parents and childrrens and all will reder.
   4. Outlet is replaced by the components.

# Never use anker tag for routing in react coz it will reloads your page.
# In react we can navigate to a new page without reloading our current page.


# Link:-
1. Link component work exactly same as anker tag.
2. Link component will navigate our page to different routes and refresh our components without reloading whole page but anker tag will reloading my whole page.
3. In different places.
 ##  IN code:-
   <li>  
   <Link to="/contact">Contact us</Link>
   </li>

 ##  IN Developer tools :-
   <li>  
   <a href="/contact">Contact us</a>
   </li>
4. It takes (to) as a property to navigate our different routes.
5. Link is a component which is given to us by react router dom.
6. Behind the scenes link is using anker tag.(eg see link in inspect-elements).
7. Link is a wrapper over anker tag.
8. react router dom also will keep a track of a link and you don't have to refresh the page.
9. html, js , browser did't understand link , only react router dom will understand this link and making anker tag for them.

# 5. Thats why React application is known as Single page Application.
# 6. Everything in React is a component. Thats why we call it .

# There are two types of routing in web application :-
1. Server side routing.
 :- A Network call request is send by browser to server to give back a particular file eg. contact.html that user is requesting.It will reloads our website everytime when the browser makes a Network call.
2. Client side routing.
 :- Browser don't make any Network call coz our all app components is already reloaded in the initially phase. we use react routing dom for it.
 It will just refresh the components when we navigate our web pages thats why we call react is fast and its a single page application.

## Dynamic Routing ##
1. 