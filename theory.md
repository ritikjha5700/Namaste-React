** 29/03/23 **

1. `Bundlers:` A bundler in React is a tool that allows developers to package their code into a single file or bundle. They also help in optimizing the app.
   eg: webpack, parcel, vite
   - In original create-react-app they use webpack bundler.
2. `Package Manager:` npm, yarn etc.
   - npm doesn't stand for "node package manager"
   - npm helps us install packages.
     `npm init` initializes npm in the repository
     `npm init -y` initializes npm in the repository but skipes most of the questions
     `npm install -D parcel` -D/(--save-dev) means "Dev dependency" it means we are installing it as a dev dependencies.
3. `Dependency:` Dependency means all the packages our project needs. Packages comes with extra features that react needs.
   - We have `devDependencies` and `globalDepencies`. It basically tells how you need it.
   - `^` this is called caret `~` this is tilde. They basically specifies that if that current version of an package is upadted then update it in my project as well. And this happens automatically. If we remove these from the version that means we don't want any update in the package.
   - `package-lock.json: ` is a very important file, it locks the version. It maintains the hash(intigrity) of it as well, hash ensures what exactly the version running in my system is exactly the same as on the production. package.lock.json is created for locking the dependency with the installed version. It will install the exact latest version of that package in your application and save it in package.json.
   - `node_modules:` it is like a database for npm.
4. - `npm i react ` install react as dependency
   - `npm i react-dom` install react-dom as dependency
   - using react by importing using **_cdn_** is not a good practice because what if the version gets updated then we have to revisit our project and update everything.
   - we don't install react as devDependency because we want it globally for the devloper and user as well.
5. `npx parcel index.html ` (index.html) is the entry point to our app
   - **_npx_** means we are telling npm to execute.
   - parcel starts running our app on a server.
6. - we need to import **_react_** and **_react-dom_** to our App.js so it can know where is this react and react-dom coming from. tho it
     ran without importing in our case but it was being rendered very slow.
   - and also we have to export it as **_module_** while calling **_App.js_** in **_index.html_** file.
   - **_HMR_**: Hot module replacement. It keeps track of all file which we are updating and reloads page automatically. This is done by `File watcher algorithm` and it is written in **_c++._** And these functionality comming from **_.parcel-cache_** folder.
7. `npx parcel build index.html` this will create production build file and minify all our code to **_dist_** folder to run it faster.
   - parcel cleans up our code all other garbage files to make it production ready.
   - parcel also does minify images (does optimization).
   - parcel does caching while development for code optimization.
   - code compression.
   - Compatible with older version of browser.
   - It gives functionality of `https` while build (`npx parcel index.html --https`)
   - Manages port number. if we build two project and run it simultaneously we will have two different port number.
   - **_Consistent Hashing Algorithm._**
   - Zero config. Other webpacks has some config.
   - `Transitive dependency:` When we are building a production ready app We need a lot of things (compression, minification, image optimization etc..) which require packages to handle it and those packages depend on some other packages this is transitive dependency.
   - **_Tree Shaking_** Parcel removes unwated code. A library has many functionality but we don't wanna use them all so unused features code get ignored by parcel.
   - Performent scalable applications are made using react and bundlers together. There are so many things react gives us and there are so many things bundlers gives us.
8. `browserlist:` this is to tell on what versions of browser we want our web to run. If we are telling `last two version of
   chrome that does not mean it will only work on **_last two version of chrome_** instead it does mean it will definitely work on **_the last two version of chrome_** and will also work for other browsers.
9. `Pollyfill:` If our browser is old and it does not understand what does a code mean then there is the replacement code done
   it is done by `Babel`. And babel uses browserlist. We don't have to write polyfill code Babel automatically does it. **_Babel_** is a package.
10. parcel doesn't remove `console.log` from build file we have to use a pluggin called `babel-plugin-transform-remove-console` to do so. `npm install babel-plugin-transform-remove-console (plugin name) --save-dev`
11. keys should be unique.
12. `React.CreateElement` is an object which then converted into html (DOM).
13. Suppose we have to create a list then we have write so many `React.CreateElement` which is a huge mess. That is why we use.
   - JSX is html like code not html inside js.
   - Browsers don't understand JSX code. Babel understands JSX code and does the job for us.
   - Babel converts code from JSX to Javascript for browsers to understand.
   - Babel comes along with parcel.
   - We have another `package-lock.json` inside `node_modules` to keep track of versions of transitive dependencies.
14. React Component: Everything in react is a component. Eg: Navbar, search bar, search icon, logo.. ect.
   - Two types of React component:
      a. Functional: New
      b. Class Based Component: Old
   - Functional Component is nothing but a normal function. It basically returns some JSX code or some react element.
   - Name of component starts with capital letter. Eg: HeadComponent. It is not manadatory but is the convention. It is a good practice.
   - **Both the codes written below are same**
   - const HeadComponent = () => {
      return (
         <div>
            <h1>This is H1</h1>
            <h2> This is H2</h2>
         </div>
      );
   };

   - const HeadComponent2 = () => (
      <div>
         <h1>This is H1</h1>
         <h2> This is H2</h2>
      </div>
   );
15. JSX handles all kind of malicious attack. Let's say we are getting some data from an an api and someone injected some malicious code (called XSS - cross site scripting) in that api and now we are using that api, so what JSX does is it sanitizes our code first and then render it. JSX OP🔥🔥
16. Using a component inside another component is konwn as `Component composition`.
17. 
 