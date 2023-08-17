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
