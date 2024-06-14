# <p align='center'>🌟 Implement an App with React 🌟</p>

# 📝 Description

This project consists of a cinema application in which we keep track of our favorite films and establish a list of movies to watch later. The interface was built using the ReactJs knowledge accumulated in previous projects and displays the data of an API.

The application includes features such as adding movies to a list of favorites, creating a list of movies to watch later, and displaying movie details using data retrieved from an API. The backend was configured with Docker, axios was used for HTTP requests, and libraries like Font Awesome were integrated to enrich the user interface.

## 📚 Resources

Here are the resources recommended and used for this project:

- [React Hooks](https://legacy.reactjs.org/docs/hooks-intro.html)
- [React Font Awesome](https://docs.fontawesome.com/v5/web/use-with/react)
- [React Router](https://reactrouter.com/en/main)
- [axios](https://github.com/axios/axios)
- [ES6](https://www.w3schools.com/js/js_es6.asp)
- [JWT Authentication](https://jwt.io/introduction)
- [Docker Installation](https://docs.docker.com/engine/install/ubuntu/)
- [Docker Compose Installation](https://intranet.hbtn.io/rltoken/d3ALWzmPUvRrEqyM-TV-ug)
- [Cloning and Running the Backend Server](https://github.com/atefMck/holbertonschool-cinema-guru-API)
- [Figma Project](https://www.figma.com/design/mLThC9LZogYu3ysJRp9HMf/Holbertonschool--Cinema-Guru-(Copy)?node-id=0-1&t=Jmwx9bEM5YnQXjbN-0)

## 🛠️ Technologies and Tools Used

- **React**: Used to build the user interface with reusable components and effective state management.
- **Docker**: Used to create coherent and isolated development environments for the application.
- **Docker Compose**: Allows you to define and manage multi-container environments for the application, thus facilitating development and deployment.
- **Axios**: Used to make HTTP requests to the backend API, allowing the recovery and sending of data.
- **React Router**: Used for navigation between the different pages of the application.
- **Font Awesome**: Used to add vector icons in the application, thus improving the user experience.

## 📋 Prerequisite

- ![NodeJS](https://img.shields.io/badge/node.js-12.x.x-green)
- ![React](https://img.shields.io/badge/react-18.3.1-blue)
- ![axios](https://img.shields.io/badge/axios-0.26.1-orange)
- ![Font Awesome](https://img.shields.io/badge/font%20awesome-6.5.2-purple)
- ![Docker](https://img.shields.io/badge/docker-yellow)

## 🚀 Installation and Configuration

1. **Step 1: Clone the deposit**

```sh
git clone https://github.com/MathieuMorel62/holbertonschool-cinema-guru.git
```

2. **Step 2: Access the project folder**

```sh
cd holbertonschool-cinema-guru
```

3. **Step 3: Install the necessary dependencies**

```sh
yarn install
```

4. **Step 4: Configure and launch Docker**

```sh
docker-compose up
```

5. **Step 5: Start the application**

```sh
yarn start
```

## 📸 Screenshot


## 💡 Use

### Example of use 1: Add a movie to the list of favorites

1. Log in to the application using your username and password.
2. Search for a movie using the search bar.
3. Click on the heart icon next to the movie to add it to your favorites list.

### Example of use 2: Add a movie to the "Watch Later" list

1. Log in to the application.
2. Browse the available movies.
3. Click on the watch icon next to the movie to add it to your "Watch Later" list.

## ✨ Main Features

1. **Movie search**: Allows you to search for movies by title and display the corresponding results.
2. **Add to favorites**: Add your favorite movies to a list of favorites for quick access.
3. **"Watch Later" list**: Create a list of movies you want to watch later.
4. **Authentication**: Allows users to log in and manage their personal movie lists.
5. **Display of film details**: Displays detailed information about each film, including the synopsis, genre, and reviews.

## 📝 List of Tasks

| Number | Task | Description |
| ------ | ----------------------- | ------------------------------------------------------------------------------- |
| 0 | [Cloning the Figma project](https://intranet.hbtn.io/rltoken/n5y7eqU19eHH2MBPIms1Sg) | Create a Figma account and duplicate the project to access all the design details. |
| 1 | [Setting up the workspace](https://github.com/MathieuMorel62/holbertonschool-cinema-guru/tree/main/cinema-guru/src) | Use the yarn package manager to create your React application. Delete unnecessary files and configure the project structure. |
| 2 | [Adding the general use components](https://github.com/MathieuMorel62/holbertonschool-cinema-guru/tree/main/cinema-guru/src/components/general) | Add various general components such as Input, SelectInput, Button and SearchBar. |
| 3 | [Initialize the main App component](https://github.com/MathieuMorel62/holbertonschool-cinema-guru/blob/main/cinema-guru/src/App.js) | Add the main App component that will host all the other components. |
| 4 | [Authentication - Component behavior](https://github.com/MathieuMorel62/holbertonschool-cinema-guru/tree/main/cinema-guru/src/routes) | Add the three main components for authentication: Authentication, Login, Register. |
| 5 | [Authentication - API integration](https://github.com/MathieuMorel62/holbertonschool-cinema-guru/blob/main/cinema-guru/src/routes/auth/Authentication.js) | Add the logic necessary to finalize the authentication process by integrating the API. |
| 6 | [Navigation - Adding the header](https://github.com/MathieuMorel62/holbertonschool-cinema-guru/tree/main/cinema-guru/src/components/navigation) | Start building the Dashboard component with the Header and disconnect logic. |
| 7 | [Navigation - Sidebar](https://github.com/MathieuMorel62/holbertonschool-cinema-guru/blob/main/cinema-guru/src/components/navigation/SideBar.js) | Add a Sidebar component to facilitate navigation in the application. |
| 8 | [Dashboard routing](https://github.com/MathieuMorel62/holbertonschool-cinema-guru/blob/main/cinema-guru/src/routes/dashboard/Dashboard.js) | Add routing in the Dashboard to navigate between the main pages. |
| 9 | [Dashboard - Setting up child components](https://github.com/MathieuMorel62/holbertonschool-cinema-guru/tree/main/cinema-guru/src/components/movies) | Configure essential child components such as Tag, Filter, MovieCard. |
| 10 | [Dashboard - Main pages](https://github.com/MathieuMorel62/holbertonschool-cinema-guru/tree/main/cinema-guru/src/routes/dashboard) | Build the main pages of the Dashboard such as HomePage, Favorites, WatchLater. |

## 📬 Contact

- LinkedIn Profile: [Mathieu Morel](https://www.linkedin.com/in/mathieu-morel62/)
