## npm :-

1.  npm does not means Node Package manager. It doesn't have any full form.
2.  npm manages packages. ALl the packages hosted there. (install:- npm init -y)
3.  npm is the standard repositary for all the packages . its the biggest pakage manager.
4.  all the libraries, all the utitlity comes from the npm.
5.  ## package.json file is a configration for our npm.
          Also it keeps the track of what approx version of package or dependency intalled in our system.
6.  the most important package is Bundler (webpack,vite, fusebox,browserify,rollup,parcel)
7.  Bundlers job is to bundles our app or package our app for Production ready.
8.  package-lock.json keeps the track of all the exact version of all the dependency which is installed.
9.  package.json have caret in it but package-lock.json has not coz it tracks exact version.

Things need to make our app production ready:- Bundling, Codespliting, junking, image optimization, remove comments, compressing, minify.

## There are two types of dependency that our app can have :-

1. Dev dependency (it is generally required for in a development phase) (eg. npm install -D parcel)

2. Normal dependency (used in Production also)

## Quesion in interview => ^ (caret)and ~ (tilde) in package.json.

^ :- this will upgrade minor version.
~ :- this will upgrade major version.

## node_modules:-

1. node_modules contains the actual data or code of those dependency that we needs.
2. Its like a database.
3. node_modules fetches all the code of al the dependency into our systen and we can use that code.
4. TRANSITIVE dependencies :- dependency needs it own dependency.
   eg. parcel is dependent on other dependencies. these all dependencies are called TRANSITIVE dependencies.
5. Every dependency has its own package.json in which it has its own dependencies. \*\*
6. Every package has its dependencies and their dependencies have their own dependencies and
   their dependencies have their own dependencies. Thats why node_modules is big and huge.
   7.node_modules is collection of dependencies (contains all our files, all codes, all our packages).
7. We don't need to push node_modules in github coz its size is very big.
8. we put node_modules in gitignore file.
9. If you want some files will not go to production or not go to git so put it inside gitignore.
10. If you have package.json and package-lock.json than you can re-create all your node_modules.
11. i can generate node_modules on the server.

## parcel (bundler):-

1.(npx parcel index.html) cmd will make a development build.
(npx parcel build index.html) cmd will make a production build. 2. parcel will host our app a server for us. 3. npx command will executes a package. 4. npm command install a package. 5. Dev Build 6. Local server 7. HMR = HOT Module Replacement ( automatically tracking our file changes and refreshing broswer after changing in files). 8. File watching algorithm written in c++. 9. caching - Faster builds. 10. Image Optimization 11. Minification 12. Bundling 13. Compressing (removing white spaces) 14. parcel is managing everthing for you. 15. Consistent Hashing 16. Code Spliting 17. Differential Bundling :- to support older browsers. 18. Diagnostic 19. Error Handling 20. HTTPs 21. Tree Shaking - remove unused code for you. 22. parcel is fast coz it has parcel.cache . 23. Different for dev and production bundles. 24. when we do (npx parcel index.html) it genrates a development build of your project
hosted on to (local1234) and so when its generates build it will puts it in (dist) folder. then the code is coming from dist folder. 25. when you refresh page it will use (.parcel-cache) and (dist) folder to update page using HMMR. 26. we no need to push .parcel-cache and dist folder to github coz it will regenerate it on server when we run (npx parcel index.html).

React cdn links not a good way to inject react in our app.

1. Using cdn links make our app to get inject react from a other network call.
2. Its makes us easy or better if react is already in our node_modules.
3. Also we have to keep updating our urls cdn links for a new version so its better to have react in node_modules.

Normal javascript does not have import and export.

## REACT IS NOT THE ONLY THING THAT MAKING YOUR APP FAST. WE NEED ALOT MORE THINGS.

## Browerlist (package) :-

1. IT is such a powerfull tool.
2. we can configure settings on which browsers and versions of browsers your app will perform 100% better.
3. IT can also configure in which country our app perform better.

## SCRIPTS (package.json)

1. In Scripts we configure shotcut commands that are used in projects.
2. Example:- "Scripts" :{ "start": "parcel index.html"} used to start development build.
3. TO run it we do :- (npm run start ) => it will execute above command in scripts.
4. npm start can execute only for this. start is keyword reserved by npm.
5. Example:- "Scripts" :{ "build": "parcel build index.html"} used to start production build.
6. TO run it we do :- (npm run build) => it will execute build command shwon above in scripts.

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
11. # JSX code is Transpiled before it reaches the JS Engine.
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

1.Functional Components is a normal javascript function which return some piece of jsx. 2. which returns some jsx elements.
3.Functional Components is a javascript function which returns a ReactElements. 4. const Heading = () => (

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

# restdata?.data This is known as optional chaining.

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

## useState() returns an array.

## eg2. const arr = useState(RES_DATA);

       const listOfRestaurants = arr[0];
       const setListOfRestaurants = arr[2];

Above examples are same. we just destruct in eg2.

# whenever a state variable is update, react will re render the component.

## useEffect(()=>{},[])

1. if no dependencies array passed => useEffect is called on every render.
2. if dependencies array passed => useEffect is called on initial render(just once).
3. if dependencies array is [btnName] and everytime btnName is updated then useEffect is called.

useEffect is called after every render of that component. jab bhi component render hoga useEffect call hoga.

## This react hook useEffect will be called automatically after the component is rendered.

##### To collect value from Filter function use a const variable to collect result value

Eg:- const filter = listOfRestaurants.filter((res) => {
return res.info.avgRating > 4.4;
});

##### Pass props should be listOfRestaurants={listOfRestaurants} like this.

##### use a variable to destruction of it like data.listOfRestaurants.

## React is super fast coz it is good at Dom Manipulation . IT refresh components very very fast.

## In react16 a new algorithm is came out to update Dom is which is Recociliation Algorithm (react fiber):-

1. react fiber is a new way of finding the div and update the dom.
2. It has a Diff Algorithm.
3. iff Algorithm is it will find out the difference between the old virtual dom and new virtual dom and update the original/actual Dom.
4. virtual dom is a representation of Actuall Dom.
5. virtual dom is a javascript object.
6. react keep all the track of UI or all the dom nodes.

## Why React is fast

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

1.  second approch is a better UX .
2.  we use useEffect to fetch the data after render page and after getting data we will re render it.

## Shimmer UI

1. A grey skelton is loaded quickly in our web app page before our app fully rendered with data.
2. It a new technique of better UX.

## Conditional rendering : rendering something in condtion.

###### useState variables vs javascript variables:-

1. they are special and powerfull variables.Using state variables will re render the whole component once again and update component with new values.
2. Normal variables will not render whole component again so if any changes occured than we can't refresh our compoment with that new values.

## Whenever state variables update, react triggers a reconciliation cycle (re-renders the component)

## react-router-dom ## Give components: 1.createBrowserRouter 2.RouterProvider 3. OutLet 4. Link

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

# useRouterError() hook :-

1. we use useRouterError hook to read error messages.
2. we make our own error page.
3. eg. import { useRouteError } from "react-router-dom";
4. Give error object.

# Never use anker tag for routing in react coz it will reloads your page.

# In react we can navigate to a new page without reloading our current page.

# Link:-

1. Link component work exactly same as anker tag.
2. Link component will navigate our page to different routes and refresh our components without reloading whole page but anker tag will reloading my whole page.
3. In different places.

## IN code:-

   <li>  
   <Link to="/contact">Contact us</Link>
   </li>

## IN Developer tools :-

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

## Dynamic Routing

# we gave path to restaurant menu page eg. path: "/restaurants/:id"

1.we give id of different restaurants in path. 2. we use <Link> while maping our restaurant menu list. 3. we use useParam hook which return us ID.
eg.import { useParams } from "react-router-dom"; 4. We passed id's of restaurant in api url so that we got data of that particular restaurant.

# Function base component and class bases componnets:-

1.  Function based componnets are just normal functions in js.
2.  class based componnets are just class in in js.

3.  how to write class based components:-
    eg.
    import react from "react;
    class UserClass extends React.component{
    render(){
    return(
    <div>
    <h2>Mohit</h2>
    <h3>Chandigarh</h3>
    </div>
    );
    }
    }
    export default UserClass;

- class-based component that will inherit a User class component from its parent React.Component.
- the React.component is a class which given to us by react. so we will import this from react package;
- User class is inheriting properties from it.

4.  how to write function based components:-
    eg. const User = () => {
    return(
    <div>
    <h2>Mohit</h2>
    <h3>Chandigarh</h3>
    </div>
    );
    }
    export default User;

5.  we use render() in class based component and return jsx;
6.  props in Functional component and Class based component:-
    eg.

const app = () => {
return(

         <User name={ "Mohit(function)" } />
         <UserClass name={ "Mohit(class)" } />
      );

}  
 export default App;

import react from "react;

    const User = ({name}) => {
         return(
            <div>
            <h2>Mohit</h2>
            <h3>Chandigarh</h3>
            </div>
         );
    }
    export default User;

    const User = () => {
      constructor(props){
         super(props);
         console.log(this.props);
      }
         return(
            <div>
            <h2>Name:{this.props.name}</h2>
            <h3>Chandigarh</h3>
            </div>
         );
    }
    export default User;

    * we use constructor to pass props in class based component.
    * we also definitly use super(props).
    * we use super(props) to use this.props in constructor.
    * This is because the child class constructor i.e. the User Class here, will not recognize this keyword until super() function has been called.
    * Using this keyboard we can access props anywhere in our class.

# Mounting or Invoking a function :- Loading that function component on web page.

- create state variables:-
  eg const [count] = useState(0);
  const [count2] = useState(1);
  use: {count}
- behind the scenes react containing all the states in one big object same a class based components.

# Instance of class based component:- Loading a class based component on our web page means that i am creating a new instance of a class.

- when a create a new instance of a class then constructor function is called and this is the best place to receive props and best place to create state variables.
- create state variables:-
  eg this.state = {
  count: 0,
  count2: 1,
  };
  use: {this.state.count}
  - this.state is a big object which contains all the state variables that we will creates.
  # NEVER UPDATES STATE VARIABLES DIRECTLY
- Update state variables:-
  . we can update state variables in class based component using:-
  this.setState({}) and it takes an object in it to update state variable.
  eg. this.setState({count: this.state.count + 1});

# First thing when a class loads the constructor() is called immedeatly and then render() is called.

# ComponentDidMount() when our class component is compeletly mounted on the page then ComponentDidMount() is called.

- It is used to make api calls.
  why coz:-
- First my component will render quickly then api is callled then it filled with data.

# lifecycle of class based components:-

1. constructor() is called.
2. render() is called.
3. ComponentDidMount() is called.

###### React life cycle diagram:-

# 1. Mounting 2. Updating 3.Unmounting

# site:- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

# 1. Mounting

- There are two phases: 1. Render phase 2. Commit phase
- render phase: react render parents contructor() and render() and their childrens constructor() and render() quickly.
- commit phase: dom is updated as our state updates with api data using componentDidMount.

# componentDidMount() :- used to make api call and re-render component.

- when we have two childrens in a parent class based component then first parent contructor() will call then parent render will call then the render phase of first child is called (constructor() and render()) then render phase of second child is called (constructor() and render()) then commit phase of first child and then second child commit phase is called (componentDidMount()).
- we will make async() to componentDidMount().
  eg. async componentDidMount() {}.
- we will call api in this.
  eg.async componentDidMount() {
  const data = await fetch("https://api.github.com/users/mohit2713");
  const json = await data.json();
  this.setState({
  userInfo: json,
  });
  console.log(json);
  }

# React will optimize this and React will batch the render phases of multiple childs and then the commit phase of mutiple childs starts (componentDidMount()) and react updates the dom.

- Dom manipulation is most expensive thing when we updating our component.
- React will batching all childs render phases (virtual dom) then batching all childs commit phase and updating the dom.
- First it will run all render phase then all commit phase.

# This will optimize performance of react app ,That's why react is fast.

# 2. updating :- componentDidUpdate()

- when our state updates in componentDidMount() then it will re-render the component with new api data values filled in it.
- and then componentDidUpdate() is called.
- and keeping updating when state updates.

# 3. Unmounting :- componentWillUnmount()

- when component will disappear.
- when we changed our existing component to a new component then the componentWillUnmount() will called.
- why we need this suppose there is setInterval(()=>{log("Hi")},1000) in componentdidMount() then every time we loads this page or go to a new page then this setInterval is continously going on like onnce, twice, thrice and so on. so we need to clean up things thats why we use componentWillUnmount.
- we use clearInterval() in componentWillUnmount() to avoid this inconsistency of code.
- we use this keyword to give reference.
  eg. this.timer = setInterval(()=>{log("Hi")},1000)
  eg. clearInterval(this.timer)

##### In a useEffect() we do a return()=>{} in it that will run after i leave my page.

eg. useEffect(()=>{
console.log("UseEffect");
const timer = setInterval(()=>{log("Hi")},1000)
return () => {
console.log("Run when we leave this page");
clearInterval(timer);
}
},[])

## Modularity

- Means you breaks down your code into small small modules (small small tasks).
- A component should has a single responsibilitys so that code become more maintainable and more testable.
- single responsibility principle helps in reuseability of code.

## If a function start from use then react knows that it is a hook.

- hook is normal utility js function.

- Differece between a normal function and react hook.

1. A function wriiten in react way is a react hook. It has its own state and own useEffect.
2. As per industry standard you should use use conventions. Also for linters.
3. we generally write utility funtions as hook in react.

## Chunking, Code Spliting, dynamic bundling, lazy loading, ondemand loading, dynamic import ... etc

# All means you have to split your app in small small bundles or chunks for better performance.

# we don't need to request for a big js file (bundlers :- compress all files into one file) which contains our all the code . so we split it into small small bundlers so that our app work more fast.

# Lazing loading or on demand loading or dynamic import :-

1. Means load that page data only when user demands its.
2. get data for that page only when user demand its.
3. using lazy() :- given to us by react.
4. when we use dynamic import than all the codes does not comes at once. it only come when it is requested.
5. used in big scaling apps when there are 1000 of components.
6. used in when your bundle size is getting heavier.
7. In simple terms, lazy loading is a design pattern. It allows you to load parts of your application on-demand to reduce the initial load time. For example, you can initially load the components and modules related to user login and registration. Then, you can load the rest of the components based on user navigation.
8. # import {lazy, Suspense} from "react";
9. # eg const Grocery = lazy(() => import("./components/Grocery"));
10. lazy loading used when our app bundles size is increasing.

# Lazing loading with suspense :-

1. import {lazy, Suspense} from "react";
   eg. <Suspense fallback={<h1>Loading please wait...</h1>}>
   <Grocery/>
   </Suspense>
2. we use suspense to handle the state. Suppose this Grocery component takes 12 mile second to run but react tries to render grocery but its not there that state that coz error.
3. Grocery will take time in fetching data from api's. so we need something to show on screen unless component is ready to render so we use fallback{}.
4. we wrap our component in suspense component which is not available at the movement.
5. fallback{} :- what should react render when the component is not available.we can pass jsx in it.

# Material ui :- is a react component library.

# Bootstrap :- Most popular Html, css and js library.Import components yoy need.

# Ant design :- popular React ui library .

# tailwind css :-

Tailwind CSS makes it quicker to write and maintain the code of your application. By using this utility-first framework, you don't have to write custom CSS to style your application. Instead, you can use utility classes to control the padding, margin, color, font, shadow, and more of your application.

# Tailwind PostCSS :- a tool for transforming CSS with javascript. Tailwind css uses PostCss behind the scenes.

# Install tailwind css:-

- npm install -D tailwindcss postcss
  npx tailwindcss init

- Configure PostCSS
  Create a .postcssrc file in your project root, and enable the tailwindcss plugin.
- {
  "plugins": {
  "tailwindcss": {}
  }
  }

- Configure your template paths
  Add the paths to all of your template files in your tailwind.config.js file.

  content: [
  "./src/**/*.{html,js,ts,jsx,tsx}",
  ],

- Telling in which file we need to use tailwind.
- In this project we use html,js only.
  eg :- content: [
  "./src/**/*.{html,js}",
  ],

## Parcel need to use .postcssrc to read the taiwind.

## Your bundler use postcssrc to understand the tailwind.

## From postcssrc our project understand what written in tailwind.

# Tailwind :-

1. Tailwind css gives you classnames automatically for every css you want to write in your app.
2. we can Tailwind css intelligence extension for more help using tailwind.
3. tailwind css is very light weight coz suppose in our code when parcel will make the bundle of css it will only include the css that is required on our web page. suppose if we m-4 (margin)class is written many times in our code then tailwind import only one m-4 class for all of them.
4. its tiny - never ship unused CSS again :- when you add some css classs in your app then only its add to css file only.
5. using tailwind all the developers comes in a sink writting the css. there no unused css or duplicate css clases in our app coz all developers using similar kind of classes.

# High order component is a function that takes a component and returns a component.

1. This high order component are pure functions.
2. Higher order component used to enhance the component.

# Major use of higher order component is when we have to enchance a component.

##### imp :- React app built using : Data layer and UI layer.

#### Keep your data layer strong so your ui will automatically strong.

# All react have two layers :-

1. UI layer :- jsx.
2. Data layer :- state, props, local variable, {}.

- Ui layer is impowered by data layer.

# Accordion :- represents information in a limited amount of space.

1. Accordian has a Header and body.
2. Example in restaurantCategories.js component.

# how to create a drop down feature :-

1. Using state variables.

# React Developer tool:-

1. React developer is best debuging tool .
2. You can see full react component tree.
3. You can see components loading time.
4. You can see behaviour of components.

# Controlled and Uncontrolled Controlled :-

- Controlled Controlled:-

1. If a component is controlled by its parents its known as control component. Means child component state is controlled by parent component.

- Uncontrolled Controlled:-

2. If a component is controlled by itself or it managing its own state by itself then its known a uncontrolled component.

# Most Advanced and Important Topic ******\*\*\******* :-

# LIFTING STATE UP :-(Accordion example in react docs)

1. Sometimes we need to Lift the state up to control the child components.

# Props Drilling :

# React context : Holds some data and give excess of that data to everywhere in our app.

1. Helps to avoid props drilling.
2. TWO ways to recieve data : 1. useContext 2. <UserContext.Consumer>{(data) => {data}}<UserContext.Consumer/>.
3. useContext({}):- holds some piece of information that it will hold.
4. useContext is a hook which comes from react.
5. <userContext.Consumer> is used to consume value in classbase components. <userContext.Consumer> takes a call back function and extract value.
   eg.<userContext.Consumer>
   {
   ({loggedInUser}) => (
   <h1>{loggedInUser}</h2>
   )
   }
   </userContext.Consumer>
6. To modify or update or override default value we use :
   <userContext.Provider value={{ loggedInUser: userName }} >
   </userContext.Provider>

7. <userContext.Provider value={{ loggedInUser: userName }} > is used to wrapped the root div or used for a specific portion in our app.

# imp :- IN CLASS BASED COMPONENTS WE DO NOT HAVE ANY HOOKS.

# React context vs Redux Toolkit :-

1. interview question : Difference between react context and redux store.
   answer :- So redux is a state management library and its a external library and its not inside react. we have to do npm redux to use it.

# Redux : Data Managment library or State Managment library.

1. Redux is not Mandatory.
2. React and Redux are seperate library.
3. Redux is not only state management library.
4. Zustand is another state management libraray.
5.

## Redux store is a Big object and it is kept in a Central Global Space.

## Redux slice means dividing our redux store to diferrent categories of data.

eg. CartSlice

1. Redux says when have to modify a cart than you can't update it directly.
2. Way to update a card is :-

# CLICK ON ADDBUTTON => DISPATCH an ACTION => FUNCTION :- REDUCER() => UPDATE OUR REDUX STORE SLICE.

3. Reduc call dispatch(action) and dispatch an action will call a function() and this function() will internally modify the slice of our redux store.
4. This function() is known as Reducer function.
5. This above is used to writing the data.
6. To Reading data from Our Redux store slice to our React component we need to use SELECTOR.
7. # SELECTOR :- Reading the data from redux to react component.
8. # SELECTOR refers to the Subscribing to the Store means our react component is Linked to the redux store and if data in redux store will changes than our react components data will also updates and have a sync to redux store.This subscribe is using SELECTOR.
9. Example:- Our CART is subscribed to the Redux Store using a SELECTOR and whenever our slice of cart store is updated in redux store then our CART DATA will get updated.

## Redux Toolkit

1. Install two libraries :- @reduxjs/toolkit and react-redux.
2. Build our store
3. Connect our store to our app
4. Slice (cartSlice)
5. Dispatch(action)
6. Selector (Selector is a hook inside the react).

# How Redux Work:-

## CREATED OUR STORE:-

1. We create our store using :- configureStore();
1. import {configureStore} from "@reduxjs/toolkit";

# eg. const appstore = configureStore({});

2. This will create our store.
3. We will add slices to our store in configureStore({}).

## PROVIDE STORE TO OUR APPLICATION :-

4.  We use 'provider' to provide redux store to our app.
5.  'Provider' will provide bridge between our react app and redux store.
6.  import {Provider} from "react-redux";
7.  We pass this provider to root of our app
    eg. <Provider store={appstore}>

        </Provider>

8.  Provider takes store={} as a prop.
9.  we pass store={appstore} and our store is provided to our app.
10. Where you need to use this store, you will wrapped it with this provider.

## Create Slice of our Store:-

1. We create a new js file.
2. we import create slice() to create a slice.
3. eg.
   import {createSlice} from "@reduxjs/toolkit";

   const cartSlice = createSlice({
   name: 'cart',
   initialState:{
   items:[]
   },
   reducers:{
   // write actions nd reducer functions in this
   addItem: (state,action) => {
   // imp we are mutating our state/ directly changing
   state.items.push(action.payload);
   },
   removeItem: (state) => {
   state.items.pop();
   },
   clearCart: (state)=>{
   state.items.length = 0;
   }
   },
   });

4. _reducers:{} :- addItem is a action and we attached a reducer function to it. When we dispatch an action, it will call the reducer function and reducer function will update our store and our store is subscribed to our cart so it will also get updates._
5. reducer function will modify our cart and basically modify the slice of our store.
6. addItem: (state,action) => {
   state.items.push(action.payload);
   }
   This is our reducer function and has two parameters(state,action).It will modify state based on action.
7. we will export reducers and actions.
   eg. export const {addItem, removeItem, clearCart} = cartSlice.actions;
   export default cartSlice.reducer;
8. ## when we will do createSlice() then it will return an object in the --- const cartSlice ---This cartSlice object have actions and reducers in it.

   eg. {
   actions:{
   addItems:
   }.
   reducers:{

   }
   }

# 9. cartSlice is a big object having actions & reducers in it.

10. So we exporting actions and reducers from it.

# 11. We will add this (cartSlice) to our redux store.

eg. const appStore = configureStore({
reducer:{
cart: cartReducer,
users: userReducer,
theme: themeReducer,
}
});
This reducer is a big reducer of our redux store. This reducer contains small reducers of each slice (eg cartReducer). We exported this cartReducer from our CartSlice component.

# 12. Now we need to make a synk between Cart Component and slice of redux store(cartSlice component).

# 13. So we use a Selector to subscribe cart component to the store to our cartSlice.

# 14. _Selector is nothing but a Hook Inside React. It comes from react-redux library._

# 15. import {useSelector} from "react-redux";

# 16. This use selector hook gives us access to our Redux store.

17. We need to tell what portion of our store we need to access to.

# 18. _const cartItems = useSelector((store) => store.cart.items);_

      eg. subscribing a part of our store which is store.cart
          We not subscribing store.users
          We not subscribing store.theme

19. useSelector helps to identify wha.t portion of our store we need to read.
    This cartItems is in synk to our store and if our store updates then this cartItems will also update.

20.**Now the cartItems (above const = cartItems) will get the data of items(which is a array) in our cartSlice**

# So whenever my store is getting modify , it will changing data inside our cartItems and displaying it to the user.

# 21. Now we need to click on the resturant menu items (button) and add item to the cart, for that we need to dispatch an action.

22. We need to write a onClick function to our button.

For dispatch an action we need a _Dispatch hook_.

# import {useDispatch} from "react-redux";

      const dispatch = useDispatch();

# // This dispatch is a function. We will import our actions from our cartSlice component which we exported earlier eg.addItems,removeItems,clearCart and use in this dispatch function.

    eg. const handleAddItem = () => {
    // Dispatch an action
    dispatch(addItems("Pizza"));

}

# addItems("Pizza") is a action.

_when we dispatch an action then it will call a reducer function and it will update slice of our store and our store is subscribed to the cart using selector so this update our cart Items_

# This addItems("Pizaa") is our action.payload

eg. addItem: (state, action) => {
// Mutating the state here
state.items.push(action.payload);
},

# This "pizza" will go in our items[] by state.items.push(action.payload).

# So whatever i pass in my _dispacth(addItems("pass data here"));_ then it will go to my cartSlice reducer function action which is(addItem:(state,action)) and this will go inside our action.payload.

# when we do dispatch(addItems("add data here")) then It will create an object and It will create a payload and add data in payload what data we added to it and This object (with payload inside it) will passed to the second paramenter of our reducer function action eg. add: (state,action). Means This dispatch object passed to this action(payload inside it) and goes in code of :- state.items.push(action.payload);

eg how object looks:-
{
payload:"Pizza"
}

25. For selecting we have useSelect and For dispatching we have useDispatch.

_IF you don't subscribe right portion of the store then it will be a huge loss_

eg. const cartItems = useSelector((store)=>store);
const cartItems = store.cart.items;
_This above code will make app performance slow as change in any slice of the store will leads to update this component which is a waste_

# So we should always select a needed slice of our store not the whole store.

## Immer is a tiny package allows you to work with immutable state in a more convenient way.

## Redux toolkit uses immer behind the scenes.

_redux tookit says :- either mutate the exsisting state or return a new state._
eg. clearCart: (state,action)=>{
state.itms.length = 0;
// or
return {items:[]};
},

## REDUX DEV TOOLS:- used to debug Redux states.

## Old react script to change port 1234 // "start": "parcel index.html",

## Types of Testing(Developer):-

1. Unit Testing :- Testing one unit or one component in isolation.
2. Integration Testing :- Testing in which multiple components are talking and envolving to each other.
3. End to End testing- e2e testing :- User lands on our app and we will text till user tasks were completed.

## REACT TESTING LIBRARY :-

1. react testing library based on top of `Dom Testing Library`.
2. If we do => create-react-app then this react testing library already comes with it.
3. In this project case we will externally get this library as we wrote our application with scrach.
4. React Testing Library uses something known as `JEST`.
5. Jest is a javascript Testing Framework and `Dom Testing Library` => `REACT TESTING LIBRARY` uses `JEST` behind the scenes.
6. We will use react testing library and jest in our case.

# 7. npm i -D npm install @testing-library/react

# 8. npm i -D jest

9. we are using jest with babel so we need to install other dependencies.

# 10. npm install --save-dev babel-jest @babel/core @babel/preset-env

# 11. we create a file name => babel.config.js in root of our project directory and paste this code in it =>

`module.exports = {
presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

12. parcel uses babel behind the scenes and parcel has its own configration for babel and now we tring to add extra configration in babel.config.js and Now parcel will conflict with this babel.

# 13. So we will configure parcel config file to disable default babel transpilation.

# 14. See file in root directory => .parcelrc

15.Last we will do jest configration.

# 16. npx jest --init

\*\* If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.(react test library website => setup=> jest28 => note)

17. We will install jsdom library.

# 18. npm install --save-dev jest-environment-jsdom

19. jsdom:- library which parses and interact with assembled HTML,just like a broweser. To config zest file we will use jsdom not node to run test cases.
20. jsdom provides a environment to run test cases.

## Setup for Start writting test cases:-

1. We will create a folder names => **tests**
   This \_\_ means dunder. Dunder test means two underscore.
2. Files in this folder will consider your our test files (js or ts files).
3. If you don't want to create this folder than create your test file using extension => .test.js/ts or .spec.js/ts

## we should always have `expect()` (Assertion) in our test funtion.

## *Unit Testing case for single component:* -

1. Render component in `render()` import from "@testing-library/react" inside.
   eg. render(<Contact/>)
2. Also import `screen` from "@testing-library/react".
3. eg. const heading = screen.getByRole("heading");
   expect(heading).toBeInTheDocument();
   `screen` is an object comes from react testing library. We get acceess of elements that rendered using screen.
   toBeInTheDocument() will find whether my heading is inside the document or not.

4. How to enable JSX work in test cases ?

   # Add library => @babe//preset-react

   eg. npm i -D @babel/preset-react

5. # Include @babe//preset-react in babel config.

   eg.
   module.exports = {
   presets: [
   ["@babel/preset-env", { targets: { node: "current" } }],
   ["@babel/preset-react", { runtime: "automatic" }],
   ],
   };

6. To run tobeInTheDocument() we need to install another library
   # @testing-library/jest-dom
   eg npm i -D @testing-library/jest-dom

7. const heading = screen.getByRole("heading");
## console.log(heading); => will return a react element => object.


## Example of a test case to check if something is rendered properly or not.
test("Should load button in the component", () => {
  render(<About />);

  // Querying
  const button = screen.getByText("Submit");
  console.log(button);

  // Assertion
  expect(button).toBeInTheDocument();
});



8. # Grouping of test cases using  =>  describe();

describe("Contact page test cases", ()=> {
   test("",() => {});
   test("",() => {});
   test("",() => {});
   test("",() => {});
   it("",() => {});
   it("",() => {});
});

9. we can also use `it` instead of `test`;

## Our test cases running on a js dom. It is not a browser. It is a browser like environment.

## We cannot make a network call in our test casses.

# "watch-test": "jest --watch" => run test cases automatically everytime.
eg. npm run watch-test

### whenever you are using a state updates so wrap your `render()` in a `act()`. This `act()` comes from "react-dom/test-utils".
1. we have to await this act( ) and it returns a promise.
   eg. 



## *Integraton Testing case for All components working together* :-

1. Fake api call and fetch data or fake fetch request in test cases.

eg. global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

# jest.fn() => gives a mock function => takes a call back function.

2. See example search.test.js

3. See example topRatedRes.test.js

4. Best Example See cart.test.js file.

