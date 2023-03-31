** 29/03/23 **

1. `Bundlers:` A bundler in React is a tool that allows developers to package their code into a single file or bundle. They also help in optimizing the app.
   eg: webpack, parcel, vite
   - In original create-react-app they use webpack bundler.
2. `Package Manager:` npm, yarn etc.
   - npm doesn't stand for "node package manager"
   - npm helps us install packages.
     `npm init` initializes npm in the repository
     `npm init -y` initializes npm in the repository but skipes most of the questions
     `npm install -D parcel` -D (--save-dev) means "Dev dependency" it means we are installing it as a dev dependencies.
3. `Dependency:` Dependency means all the packages our project needs. Packages comes with extra features that react needs.
   - We have `devDependencies` and `globalDepencies`. It basically tells how you need it.
   - `^` this is called caret `~` this is tilde. They basically specifies that if that current version of an package is upadted then update it in my project as well. And this happens automatically. If we remove these from the version that means we don't want any update in the package.
   - `package-lock.json: ` is a very important file, it locks the version. It maintains the hash(intigrity) of it as well, hash ensures what exactly the version running in my system is exactly the same as on the production. Never put in git-ignore.
   - `node_modules:` it is like a database for npm.
4. - `npm i react ` install react as dependency
   - `npm i react-dom` install react-dom as dependency
   - using react by importing using cdn is not a good practice because what if the version gets updated then we have to revisit our project and update everything.
   - we don't install react as devDependency because we want it globally for the devloper and user as well.
5. `npx parcel index.html ` (index.html) is the entry point to our app
   - npx means we are telling npm to execute.
   - parcel starts running our app on a server.
6. - we need to import react and react-dom to our App.js so it can know where is this react and react-dom coming from. Tho it ran
     without importing in our case but it was being rendered very slow.
   - and also we have to export it as `module` while calling `App.js` in index.html file.
   - HMR: Hot module reload. It keeps track of all file which we are updating and reloads page automatically. This is done by `File watcher algorithm` and it is written in c++. And these functionality comming from `.parcel-cache` folder.
7. `npx parcel build index.html` this will create production build file and minify all our code to `dist` folder to run it faster.
   - parcel cleans up our code removes all console-logs and all other garbage files to make production ready.
   - parcel also does minify images (optimization).
   - parcel does caching while development for code optimization.
   - code compression.
   - Compatible with older version of browser.
   - It gives functionality of `https` while build (`npx parcel index.html --https`)
   - Manages port number. if we build two project and run it simultaneously we will have two different port number.
   - Consistent Hashing Algorithm.
   - Zero config. Other webpacks has some config.
   - `Transitive dependency:` When we are building a production ready app We need a lot of things (compression, minification, image optimization etc..) which require packages to handle it and those packages depend on some other packages this is transitive dependency.
