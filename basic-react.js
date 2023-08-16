const heading = React.createElement(
  //  React.createElement() or Heading is an object //
  //  ReactElement is (object) => HTML that (Browser understand)  //
  "h1",
  { className: "heading" }, // we pass attribute in this //
  "Hello World from react" // we pass data in html //
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // root.render means render this object in html tag and  //
// ALSO REPLACED THAT HTML ELEMENT WHICH IS ALREADY THERE //

const headingtwo = React.createElement(
  "h2",
  { id: "headingtwo" },
  "Heading two"
);
const loot = ReactDOM.createRoot(document.getElementById("loot"));
loot.render(headingtwo);

const headingthree = React.createElement("h3", {}, "Heading three");
const boot = ReactDOM.createRoot(document.getElementById("boot"));
boot.render(headingthree);

//  IMPORTANT THEORY !!!!!!  //

// REACT IS A JAVASCRIPT Library made by FACEBOOK Developers   //

// AT THE END OF THE DAY REACT IS A JAVASCRIPT //

// Library :- We can use a small piece of react code in our existing app. //
//            we can inject react code in our app //
//            It can apply to a small portion of our page //
//            It can work independently in a small portion of our app //
//            It is giving some helper Methods that we need to use to develop Fast Applications //


// Framework is a framework which comes with all loads of things. //
// All frameworks require you to create whole app using that framework //