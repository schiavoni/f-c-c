# Frontend Developer Candidate Assignment - Rafael Schiavoni

This is a simple web app that allows a user to select their car from a directory of registered cars.

Story example:
As a user, I want to tell Friday what is my car so I can proceed with the registration process and get my simulation for the ensurance.


# How it was build

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts / How to run

To get started, clone this repo and run:

### `npm install`

Open the `/apiserver` folder an run:

### `node server`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Abouth the architecture / Unit Testing / design

The original plan was far too ambitious for what I can accomplish with my short XP with react.

## The data structure

The first problem, in my view, is how the data was structured. I'm a car enthusiast but I can see how hard could be for anyone to answer the final model having the Horse Power and those other characteristics. I question myself if this is realy necessary for the business, or if we Couln'd work with different set of car attributes, like year and a more broad view of engine capacity.

If we need to match to an already existing model, without allowing the user to create a new car model, all the components in this section should simplify his understanding.

Another problem is the difference between what the user can see and what can actually select. A better way would be only list what has relevant values for the user. I would change the api a little to ensure that we could cross reference the sets.

## The plan

My initial goal was to set a progress bar counting all the fields to be filled on the top. At each field, the next should be displayed and son on. The final field should allow the user to check all the information again before submitting.

## Unit Testing
All components have a little comment on the top about my vision of how they should be build and tested. I know what to do, but stiil learning the "how to do".