A basic template to setup a React based project, using Webpack

Note on Linux: you *must* run this one-time-only to enable hot module replacement:

 echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

To install the latest of everything (which may or may not work), delete the package-lock.json, package.json. Note that this list 
may be more than you need. Pare it down as you see the need. 
 
Then run npm init to create an initial package.json, or just use the one here and delete the 
existing dependencies to start from scratch. Your milage might vary depending on the current 
state of whatever the latest and greatest packages might be screwing around with in their api's.
 
And then do this:

 npm install prop-types react react-dom react-hot-loader

 npm install --save-dev autoprefixer babel-core babel-eslint babel-loader babel-polyfill babel-preset-env babel-preset-react babel-preset-stage-1 chalk cross-env css-loader eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react extract-text-webpack-plugin file-loader html-webpack-plugin postcss-loader rimraf style-loader url-loader webpack webpack-bundle-analyzer webpack-cli webpack-dev-server webpack-merge

Note that I am using node-v8.11.2-linux-x64 at the moment.
