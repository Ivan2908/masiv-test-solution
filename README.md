
# I love Comics

Simple app to randomly view comics using the https://xkcd.com/json.html API

## Tech Stack

**Client:** VueJS 3 + Typescript, TailwindCSS, composables, axios, vue-toastification

**Test:** Jest 

**Server:** API generated by https://xkcd.com/json.html

**Style:** Prettier, Eslint





## Features

- Generate comics randomly.
- UI improvements:
    - If the comic lacks an image, there are validations.
    - If the comic's image has a height greater than 600, it will allow hovering over the image to enlarge it.
    - If the request returns a 404 error, a "Not Found" component will be displayed with a button to generate a new random comic.
- Comic rating system, which is saved in Pinia and local storage to enhance user interaction.
- Toast system to enhance UX.


## Screenshots

![App Screenshot](https://i.postimg.cc/rmHZ1s07/validateinfo.png)

## You can rate the comic

![App Screenshot](https://i.postimg.cc/DZW0jp0m/rating-Comic.png)

## Authors

- [@Ivan2908](https://github.com/Ivan2908)


## Project Setup

To run this project, we need to execute the following command, which will install all the dependencies.

```bash
npm install
```

## Run Test

```bash
npm run test
```

To run the project locally.


```bash
npm run dev
```
## Lint with ESLINT

Validate the lint and fix what can be fixed:

```bash
npm run lint | npm run lint:fix
```


## 🛠 Skills
Javascript, VueJS, Pinia, Typescript, Jest, composables...