# reactjs_todo_app
A modern React.js project featuring Redux for global state management, Redux Thunk for async actions, and a clean Redux data flow architecture. Ideal for building scalable, maintainable front-end applications.



Welcome to Codespaces! You are on our default image. 
   - It includes runtimes and tools for Python, Node.js, Docker, and more. See the full list here: https://aka.ms/ghcs-default-image
   - Want to use a custom image instead? Learn more here: https://aka.ms/configure-codespace

🔍 To explore VS Code to its fullest, search using the Command Palette (Cmd/Ctrl + Shift + P or F1).

📝 Edit away, run your app as usual, and we'll automatically make it available for you to access.

@btholath ➜ /workspaces/reactjs_todo_app (main) $ pwd
/workspaces/reactjs_todo_app

@btholath ➜ /workspaces/reactjs_todo_app (main) $ ls
README.md  index.html  index.js


@btholath ➜ /workspaces/reactjs_todo_app (main) $ mkdir react-base
@btholath ➜ /workspaces/reactjs_todo_app (main) $ cd react-base/

## Manage dependencies
@btholath ➜ /workspaces/reactjs_todo_app/react-base (main) $ npm init -y
Wrote to /workspaces/reactjs_todo_app/react-base/package.json:

{
  "name": "react-base",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}

@btholath ➜ /workspaces/reactjs_todo_app (main) $ npm install react react-dom
@btholath ➜ /workspaces/reactjs_todo_app (main) $ cd react-base/
@btholath ➜ /workspaces/reactjs_todo_app/react-base (main) $ npm install react react-dom

up to date, audited 249 packages in 4s

24 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
@btholath ➜ /workspaces/reactjs_todo_app/react-base (main) $ 


Webpack 
The Webpack is needed to rewrite JSX to plain JavaScript

npm install @babel/core babel-loader @babel/prest-env @babel/preset --sav-dev


clear explanation of what this Webpack configuration does in a React.js project:

🔍 Webpack Config Overview
js
Copy
Edit
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
🧠 What Each Part Does
📥 entry: './index.js'
Specifies the main file that Webpack will start bundling.

index.js is the root of your React app.

📦 output
js
Copy
Edit
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js'
}
Tells Webpack to output the final bundled file:

📂 Directory: dist/

📄 File: bundle.js

⚙️ mode: 'development'
Enables faster builds and better debugging.

Adds helpful features like source maps.

You can switch to 'production' for optimization & minification.

🧪 module.rules
Handles how different file types are processed (in this case, JS/JSX):

js
Copy
Edit
test: /\.(js|jsx)$/
Apply this rule to all .js and .jsx files.

js
Copy
Edit
exclude: /node_modules/
Skip transforming files inside node_modules.

js
Copy
Edit
use: babel-loader
Use Babel to transpile JavaScript/JSX to browser-compatible JS.

js
Copy
Edit
presets: ['@babel/preset-env', '@babel/preset-react']
@babel/preset-env: Converts modern JS (ES6+) to compatible JS.

@babel/preset-react: Transforms JSX into valid JavaScript.

✅ Summary
This Webpack config:

Compiles modern React (.js/.jsx) using Babel

Bundles everything into a single bundle.js file

Outputs it to a dist/ folder

Uses development mode for fast build + debugging



## Build the App
@btholath ➜ /workspaces/reactjs_todo_app/react-base (main) $ npm run build

> react-base@1.0.0 build
> webpack

asset bundle.js 1.02 MiB [emitted] (name: main)
runtime modules 1.04 KiB 5 modules
modules by path ./node_modules/ 1000 KiB
  modules by path ./node_modules/react-dom/ 947 KiB
    modules by path ./node_modules/react-dom/*.js 2.67 KiB 2 modules
    modules by path ./node_modules/react-dom/cjs/*.js 945 KiB 2 modules
  modules by path ./node_modules/react/ 44.2 KiB
    ./node_modules/react/index.js 186 bytes [built] [code generated]
    ./node_modules/react/cjs/react.development.js 44 KiB [built] [code generated]
  modules by path ./node_modules/scheduler/ 12 KiB
    ./node_modules/scheduler/index.js 194 bytes [built] [code generated]
    ./node_modules/scheduler/cjs/scheduler.development.js 11.9 KiB [built] [code generated]
modules by path ./*.js 479 bytes
  ./index.js 310 bytes [built] [code generated]
  ./App.js 169 bytes [built] [code generated]
webpack 5.99.8 compiled successfully in 1207 ms
@btholath ➜ /workspaces/reactjs_todo_app/react-base (main) $ 



https://expert-capybara-659jv4974qp3469w-5500.app.github.dev/react-base/index.html

----------------------------------------------
## Create project with Create React (Boiler plate genertor)
## project: react-base-2

@btholath ➜ /workspaces/reactjs_todo_app/ (main) $ npm uninstall -g create-react-app
@btholath ➜ /workspaces/reactjs_todo_app (main) $ npx create-react-app react-base-2
@btholath ➜ /workspaces/reactjs_todo_app (main) $ cd react-base-2
@btholath ➜ /workspaces/reactjs_todo_app/react-base-2 (main) $npm run start


----------------------------------------------
## Create project with Vite (Boiler plate genertor)
## project: vite-react-app
@btholath ➜ /workspaces/reactjs_todo_app (main) $ npm create vite@latest
Need to install the following packages:
create-vite@6.5.0
Ok to proceed? (y) y


> npx
> create-vite

│
◇  Project name:
│  vite-react-app
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Scaffolding project in /workspaces/reactjs_todo_app/vite-react-app...
│
└  Done. Now run:

  cd vite-react-app
  npm install
  npm run dev

@btholath ➜ /workspaces/reactjs_todo_app (main) $ 


## Create project with Nextjs (Boiler plate genertor)
## project: nextjs-react-app
@btholath ➜ /workspaces/reactjs_todo_app (main) $ npx create-next-app@latest 
Need to install the following packages:
create-next-app@15.3.2
Ok to proceed? (y) y

✔ What is your project named? … nextjs-react-app
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to use Turbopack for `next dev`? … No / Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
Creating a new Next.js app in /workspaces/reactjs_todo_app/nextjs-react-app.

Using npm.

Initializing project with template: app 


Installing dependencies:
- react
- react-dom
- next


added 29 packages, and audited 30 packages in 17s

6 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Success! Created nextjs-react-app at /workspaces/reactjs_todo_app/nextjs-react-app

@btholath ➜ /workspaces/reactjs_todo_app (main) $ 


@btholath ➜ /workspaces/reactjs_todo_app (main) $ cd nextjs-react-app/
@btholath ➜ /workspaces/reactjs_todo_app/nextjs-react-app (main) $ npm run dev

> nextjs-react-app@0.1.0 dev
> next dev --turbopack

   ▲ Next.js 15.3.2 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://10.0.0.55:3000

 ✓ Starting...
Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry

 ✓ Ready in 881ms



## Create project with Remix (Boiler plate genertor)
## project: remix-react-app


@btholath ➜ /workspaces/reactjs_todo_app/nextjs-react-app (main) $ cd ..
@btholath ➜ /workspaces/reactjs_todo_app (main) $ npx create-remix@latest
Need to install the following packages:
create-remix@2.16.7
Ok to proceed? (y) y

npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported

 remix   v2.16.7 💿 Let's build a better website...

   dir   Where should we create your new project?
         ./remix-react-app

      ◼  Using basic template See https://remix.run/guides/templates for more
      ✔  Template copied

   git   Initialize a new git repository?
         No

  deps   Install dependencies with npm?
         Yes

      ✔  Dependencies installed

  done   That's it!

         Enter your project directory using cd ./remix-react-app
         Check out README.md for development and deploy instructions.

         Join the community at https://rmx.as/discord

@btholath ➜ /workspaces/reactjs_todo_app (main) $ cd remix-react-app/
@btholath ➜ /workspaces/reactjs_todo_app/remix-react-app (main) $ npm run dev

> dev
> remix vite:dev

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help


## Create a ToDO project using Vite and ReactJs
@btholath ➜ /workspaces/reactjs_todo_app (main) $ npm create vite@latest

> npx
> create-vite

│
◇  Project name:
│  todo-list-app
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Scaffolding project in /workspaces/reactjs_todo_app/todo-list-app...
│
└  Done. Now run:

  cd todo-list-app
  npm install
  npm run dev

@btholath ➜ /workspaces/reactjs_todo_app (main) $ cd todo-list-app/
@btholath ➜ /workspaces/reactjs_todo_app/todo-list-app (main) $ npm install

added 152 packages, and audited 153 packages in 16s

33 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
@btholath ➜ /workspaces/reactjs_todo_app/todo-list-app (main) $ npm run dev

> todo-list-app@0.0.0 dev
> vite


  VITE v6.3.5  ready in 247 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help



----------------------------------------------------
## Implement Redux to vite-reactjs-app


@btholath ➜ /workspaces/reactjs_todo_app/todo-list-app (main) $ npm install @reduxjs/toolkit react-redux

added 11 packages, and audited 164 packages in 2s

34 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
@btholath ➜ /workspaces/reactjs_todo_app/todo-list-app (main) $ 




------------------------------------------------
## vite-react-app using Thunk

A "thunk" is just a function that delays doing something until later.

Think of it like this:
📦 Thunk is a wrapper for a future task.

Imagine you’re ordering a pizza:
  - You don’t make the pizza right now.
  - You give an order slip to the chef.
  - The chef (Redux) will make the pizza later, when it's time.

🧾 That order slip is like a thunk — it’s a function that knows what to do, but it doesn’t run until Redux tells it to.


Real-World Analogy: Annuity Payout Request
Scenario:
Imagine a customer buys an annuity policy, but chooses deferred payout — they’ll start receiving monthly payments at retirement, say in 20 years.

Here’s how that maps to a thunk:
Concept	              Insurance World	                                      Redux World
Thunk	Payout          instruction stored for future use	                    A function that delays an action (e.g. fetch)
Trigger (dispatch)	  Customer retires and files a payout request	          Redux middleware calls the thunk
Action (side effect)	Insurance system starts payouts, pulls policy info	  API call, then dispatches result to reducer
State change	        Payments start, customer account is updated	          Redux store updates with new data


A Thunk is like a "payout instruction" on file. It doesn’t do anything now, but when the time is right — like when the customer retires — it activates, pulls data (policy, balance), and starts the payment flow.



Example Flow (Redux + Annuity)
App starts — customer info is loaded.
User clicks "Show My Annuity Payout".
Redux dispatches a thunk that:
  Calls backend API: /getPayoutSchedule
  Waits for the response
  Dispatches: { type: "PAYOUT_LOADED", payload: [...] }

Just like an annuity payout doesn’t happen instantly but needs triggering and data retrieval, a thunk wraps the logic until Redux tells it to act.


## How does Redux Thunk work?
A component dispatches a "thunk" instead of an action.
The login insie the thunk is executed
The thunk can dispatch actions and has read-only access to the store

@btholath ➜ /workspaces/reactjs_todo_app (main) $ git add .
@btholath ➜ /workspaces/reactjs_todo_app (main) $ git commit -m "version 1.0 - applied redux thunk"
@btholath ➜ /workspaces/reactjs_todo_app (main) $ git push


## Setup TodoAPI using server.js
npm install express  // This creates a node_modules folder and updates your package.json

Run server
node server.js or npm start

@btholath ➜ /workspaces/reactjs_todo_app/todo-list-app (main) $ node server.js
Server listening on port 3000

To test the front-end connecting to TodoAPI. In terminal, click on PORTS tab in vs code terminal, select Port 3000
right click on Visibility "Private" and switch Port Visibility to Public

In browser or from postman, you can access
https://expert-capybara-659jv4974qp3469w-3000.app.github.dev/todos


