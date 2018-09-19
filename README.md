# NodeJS Apis for Lamda (AWS) using the Serverframework backed by the DyanoDB using Dynamoose 

This project was created as a POC when moving from NodeJS(Express) - MongoDB(Mongoose) to NodeJS(Lamda- API Gateway) - DyanamodDB(Dyanmoose). 

One of the most important checkpoints in evaluating a new technology is how easy is it to test and debug locally. With serverless, testing and debugging the APIs is never straight forward as there is no Local server where the APIs can be hosted.

After a bit a reasearch I found the combination of the **serverless-offline** plugin with **Visual Studio Code** to be the best solution for testing and debugging the application.

## Steps to run the Application ##

The application connects to a Local Dynamo DB connection. 

1. Pull the code.
2. Open the console and navigate to the folder where the code is present.
3. Resolve the dependencies - *npm install*.
4. Start DyananoDB on your local machine.
5. Open the project in Visual Studio Code.
6. Select the *Start Severless* run configuration, in the *Debug* section.
7. Start and application, and now you are good to go.
8. :-)
