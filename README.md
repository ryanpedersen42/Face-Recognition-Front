# About the Project

This project is intended to be used in conjunction with Face-Recognition-Back-End, with the front end running on localhost:3001 and the back end running on localhost:3000.

It's an app with a Register and Sign In flow and an interactive main screen.

You can paste an image URL in the box and it will detect faces in the image. The emojis that change are done with AWS Lambda and the Serverless Framework.

More specifically, the tech is React, auth with Redis and JWT token, the Serverless Framework, SQL, and the Clarafai API.

## Installation

1. Clone this respository

2. Install dependencies

```bash
npm install
```

3. Do the same with Face-Recognition-Back-End.

4. Get Redis server started

5. Set SQL database ready

6. Get Started 

In the project directory, you can run:

```bash
npm start
```
Runs the app in the development mode.<br>
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Usage

Using RoboFriends
![Using Face Recognition App](/Images/Face-Recognition-App.gif)