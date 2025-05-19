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



https://expert-capybara-659jv4974qp3469w-5500.app.github.dev/react-base/index.html

