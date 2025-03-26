# User CRUD Fullstack Application

This project is a fullstack application implementing basic CRUD (Create, Read, Update, Delete) operations for user management. It consists of a React frontend and a Spring Boot backend.

## Features

* **Create Users:** Add new users to the system.
* **Read Users:** View a list of all existing users.
* **Update Users:** Modify the details of existing users.
* **Delete Users:** Remove users from the system.

## Technologies Used

* **Frontend:**
    * React.js
    * Axios (for API requests)
    * React Router DOM (for routing)
    * Bootstrap (for styling)
* **Backend:**
    * Spring Boot
    * Spring Data JPA (for database interaction)
    * MySql Database 
    * Maven (for build management)

## Prerequisites

* Node.js and npm (or yarn) installed
* Java Development Kit (JDK) 8 or higher
* Maven installed

## Setup

### Backend Setup (Spring Boot)

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd <backend-directory>
    ```

2.  **Build the project:**

    ```bash
    mvn clean install
    ```

3.  **Run the application:**

    ```bash
    mvn spring-boot:run
    ```

    The backend server should start on `http://localhost:8080`.

### Frontend Setup (React)

1.  **Navigate to the frontend directory:**

    ```bash
    cd <frontend-directory>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the application:**

    ```bash
    npm start
    # or
    yarn start
    ```

    The frontend application should open in your browser at `http://localhost:3000`.

## API Endpoints

* **GET `/users`:** Retrieves a list of all users.
* **POST `/user`:** Creates a new user.
* **GET `/user/{id}`:** Retrieves a specific user by ID.
* **PUT `/user/{id}`:** Updates an existing user.
* **DELETE `/user/{id}`:** Deletes a user.

## Database Configuration


```properties
spring.datasource.url=jdbc:mysql://localhost:3306/your_database
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
