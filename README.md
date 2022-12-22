<a name="readme-top"></a>

<!-- PROJECT LOGO -->

![image](https://user-images.githubusercontent.com/111836326/207625959-7d0040bb-fe5b-48b6-b3ea-0a0291d76730.png)

<br />
<div align="center">
<h3 align="center">Crypto Asset Screener</h3>

  <p align="center">
    Crypto Asset Screener App, with full CRUD functionality. 
    <br />
    <a href="https://github.com/nc1z/Asset-Screener-App"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/nc1z/Asset-Screener-App">View Demo</a>
    ·
    <a href="https://github.com/nc1z/Asset-Screener-App">Report Bug</a>
    ·
    <a href="https://github.com/nc1z/Asset-Screener-App">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#initial design mockups">Initial Wireframe Mockups</a></li>
        <li><a href="#live snippets">Working App Snippets</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Asset Screener app is an app built using the MERN stack. The app allows users to signup, login, have a brief live overview of the most popular coins in the crypto markets, add their favorite coins to a watchlist and track their portfolio value.

<!-- INITIAL WIREFRAME MOCKUPS -->

## Initial Wireframe Mockups

Login page:

![login wireframe](https://user-images.githubusercontent.com/115219748/209041174-8cad7a87-f2dc-453e-85d3-86d670f066ab.PNG)

Main user dashboard:

![dashboard wireframe](https://user-images.githubusercontent.com/115219748/209042162-8cb6a10f-82e4-414c-b29c-2d5d744a4f19.PNG)

User watchlist:

![watchlist wireframe](https://user-images.githubusercontent.com/115219748/209042004-8b30f7cb-aad9-40aa-a8f0-94014abbdcff.PNG)

User portfolio:

![user portfolio](https://user-images.githubusercontent.com/115219748/209042671-be4836fd-77e7-48ab-a0ff-f7934f371a05.PNG)

<!-- WORKING APP SNIPPETS -->

## Working App Snippets

This is the main dashboard that the user sees upon a successful login. Data is real-time and obtained from API provided by Coingecko:

![dashboard](https://user-images.githubusercontent.com/115219748/208384312-30029fec-71af-45fe-8385-7115b38a741f.png)

User has the option to add coins to their portfolio and total portfolio value is calculated in real-time:

![user portfolio page](https://user-images.githubusercontent.com/115219748/208383899-a0d0c2b8-74f3-4329-9f6c-541752d00a25.png)

User has the option to add coins and remove coins to their watchlist:

![watchlist](https://user-images.githubusercontent.com/115219748/208384606-8fcb3712-9884-4f62-b2b7-e0cdac28c6cb.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- BUILT WITH -->

### Built With

- ![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=for-the-badge)
- ![Express Badge](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=for-the-badge)
- ![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=for-the-badge)
- ![MongoDB Badge](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=for-the-badge)
- ![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge)
- ![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=for-the-badge)
- ![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=for-the-badge)
- ![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=for-the-badge)
- Netlify for client hosting
- Cyclic for Server Deployment

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Client

  - Styles and CSS
    - Global Navbar
    - CSS for light/dark
  - Routing
  - Login/Signup Logic
  - JWT, auth headers, ContextProvider
  - Private Routes / Redirects
  - Portfolio + Coingecko calculation & logic
  - Ticket Submission Logic
  - Ticket Search
  - Ticket History
  - Watchlist add/remove logic
  - Prevent excessive api calls by disabling buttons onClick

- [x] Server

  - POST Endpoints
    - Signup
    - Login
  - GET Endpoints
    - Get user details
    - Get user watchlist
    - Get user portfolio
    - Get coingecko data
  - PUT Endpoints
    - Add to watchlist
    - Add transaction to portfolio + add/remove assets/qty
  - DELETE Endpoints
    - Remove from watchlist

- [ ] Additional Features

  - Pagination

- [x] Bug Fixes & Improvements
  - Backend form validation

See the [open issues](https://github.com/nc1z/Asset-Screener-App) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

- https://github.com/desmondtansl
- https://github.com/nc1z

Project Link: https://github.com/nc1z/Asset-Screener-App

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- <a href="https://www.coingecko.com/en/api/documentation">Coingecko</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
