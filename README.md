# react-node-express-boilerplate

A minimal web app and server for rapid development. A react app that fetches a string from the node server.

![demo preview](./preview.png?raw=true)

## Tech Stack

- Frontend - React
- Backend - Nodejs, Express

## How to develop with both the server and web app

- `npm start`

## How to develop with just the web app

- `npm run start-react`

## Directory Structure

- `build` - Built web app
- `public` - Template html from create-react-app
- `server` - Node Server code
- `src` - Front-end code

## Free Hosting

- Login to https://dashboard.heroku.com/apps
- Create a new `App`
- Connect it to your Github Repo
- You're all done. It will autodeploy your app to `YOUR_APP_NAME.herokuapp.com`
- Any commits to that repo will trigger a rebuild and redeploy using `npm start`
