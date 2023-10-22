# Airbnb Clone Project

![Project Screenshot](https://res.cloudinary.com/dhwbyshmo/image/upload/v1697954690/project%20images/Airbnb_home_page.png)

A clone of Airbnb with an awesome user interface, authentication system, and various features to allow users to reserve and manage properties.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [User Reservations](#user-reservations)
- [Manage Properties](#manage-properties)
- [License](#license)

## Tech Stack

This project uses the following technologies:

- React
- Nextjs
- React hook form
- React hot toast
- React date range
- React icons
- React select
- zustand
- World countries
- Prisma
- axios
- bcrypt
- Date fns
- Leaflet
- next-auth
- cloudinary


You can find the complete list of dependencies in the `package.json` file.

## Features

- **Awesome UI**: The project features an attractive user interface inspired by Airbnb's design.

- **Authentication**: Users can sign up, log in, and log out securely. The project uses Passport for user authentication.

- **Property Reservations**: Users can reserve properties for their desired dates and manage their reservations.

- **Manage Properties**: Property owners can add new properties for other users to reserve and remove properties.

- **And Many More**: This project includes various other features, including searching for properties, filtering options, and more.

## Installation

1. Clone the repository:

```
git clone https://github.com/gulshan07dev/Airbnb-clone-with-nextjs.git
```

2. Navigate to the project folder:

```
cd airbnb-clone
```

3. Install the required dependencies:

``` 
npm install
```
 
4. Configure environment variables:

   - Create a `.env` file in the root directly based upon .`env.example.js` file.

5. Start the server:

```
npm run dev
```
  
The project should now be running. Visit `http://localhost:5173` in your browser to access the application.

## Authentication

The project includes user authentication using next auth. Users can sign up for an account, log in, and log out securely. user also can login from google or github.

## User Reservations

Users can reserve properties by selecting their desired dates and completing the reservation process. Reservations are stored in the database and can be managed by the user. 

## Manage Properties

Property owners can add new properties for other users to reserve and remove properties.


## License

This project is licensed under the [MIT License](LICENSE.md). Feel free to use and modify the code for your own purposes.



_Made with ❤️ by [Gulshan Kumar](https://www.linkedin.com/in/gulshan-kumar-8293b9260/)_