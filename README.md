### Disclaimer: checkout tag "hackathon-project" to see everything that was delivered within the time constraint of the Hackathon. I'll be continuing this project over the next days.

# VanHackathon 2018

This was my project for SkipTheDishes and VanHack during the Recruiting Fair in 2018.

This project was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app).
I used [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/), [React](https://reactjs.org/), [Redux](https://github.com/reactjs/redux), [Redux Thunk](https://github.com/gaearon/redux-thunk), [Axios](https://github.com/axios/axios) and [Enzyme](https://github.com/airbnb/enzyme), to try to showcase my knowledge of the React ecossystem.

The API provided by VanHack for this challenge can be seen [here](http://api-vanhack-event-sp.azurewebsites.net/swagger/).

The challenge description can be seen [here](https://docs.google.com/presentation/d/1Ck3eY_kEWpOrNfFzFVxNsOnb9g9pNXgJ1pv_25lDvjE/edit#slide=id.g32e807dfa2_0_17)

## How I implemented it

I wanted to use [this method](https://facebook.github.io/react/docs/thinking-in-react.html) suggested by Facebook to implement this application.

While building the static version of the site, I encountered some challenges using the API provided. I was trying to build dummy data to use on the static components, but it proved to be the wrong idea for 2 reasons:
1. There was no documentation available on the Response-body of the API. This led me to use POSTMAN to check every service and retrieve their structure.
2. Customer and Order services were restricted and also empty. We were expected to populate them with POST requests, before we could retrieve them.

This made me change course and I started implementing behaviour and creating [Containers](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0). I started with [Login](src/containers/Login.js) and then moved on to Stores. I also implemented very basic unit testing on Login, to showcase my knowledge on this topic.

The final product was:
- Login: implemented
- Stores: implemented
- Logout, store, and order: not implemented
- Cart and products: static content


## How to run

- `git clone https://github.com/pedropb/skip-vanhackaton`
- `cd skip-vanhackaton`
- `yarn install`
- `yarn start`
- browse to [http://localhost:3000](http://localhost:3000)
- use email: `test@skip.com` password: `test` to login
