"# ECOMMERCE-API" 


# Express MongoDB API Project

This project is a simple Express.js application that connects to a MongoDB database and provides API endpoints for products and users. It uses `mongoose` for database operations and `body-parser` for parsing incoming request bodies.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (version 14 or higher)
- npm (Node package manager)
- MongoDB (you can use a local instance or a MongoDB Atlas cloud instance)

## Installation

1. **npm init -y **

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file in the root directory and add your MongoDB URI and any other environment variables:**

    ```
    MONGODB_URI=your_mongodb_uri
    PORT=3000
    ```

## Usage

1. **Start the server:**

    ```bash
    npm start
    ```

2. **Server will run on the specified port (default is 5000):**

    ```
    server is running on port 5000
    ```

3. **Verify the connection to MongoDB:**

    ```
    connected to MongoDB database
    ```

## API Endpoints

The API provides the following endpoints:

### Products

- **GET /api/products**: Get a list of all products.
- **GET /api/products/:id**: Get a single product by ID.
- **POST /api/products**: Create a new product.
- **PUT /api/products/:id**: Update a product by ID.
- **DELETE /api/products/:id**: Delete a product by ID.

### Users

- **GET /api/users**: Get a list of all users.
- **GET /api/users/:id**: Get a single user by ID.
- **POST /api/users**: Create a new user.
- **PUT /api/users/:id**: Update a user by ID.
- **DELETE /api/users/:id**: Delete a user by ID.

## Folder Structure




Certainly! Here’s a README.md file for your project:

markdown
Copy code
# Express MongoDB API Project

This project is a simple Express.js application that connects to a MongoDB database and provides API endpoints for products and users. It uses `mongoose` for database operations and `body-parser` for parsing incoming request bodies.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (version 14 or higher)
- npm (Node package manager)
- MongoDB (you can use a local instance or a MongoDB Atlas cloud instance)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file in the root directory and add your MongoDB URI and any other environment variables:**

    ```
    MONGODB_URI=your_mongodb_uri
    PORT=3000
    ```

## Usage

1. **Start the server:**

    ```bash
    npm start
    ```

2. **Server will run on the specified port (default is 3000):**

    ```
    server is running on port 3000
    ```

3. **Verify the connection to MongoDB:**

    ```
    connected to MongoDB database
    ```

## API Endpoints

The API provides the following endpoints:

### Products

- **GET /api/products**: Get a list of all products.
- **GET /api/products/:id**: Get a single product by ID.
- **POST /api/products**: Create a new product.
- **PUT /api/products/:id**: Update a product by ID.
- **DELETE /api/products/:id**: Delete a product by ID.

### Users

- **GET /api/users**: Get a list of all users.
- **GET /api/users/:id**: Get a single user by ID.
- **POST /api/users**: Create a new user.
- **PUT /api/users/:id**: Update a user by ID.
- **DELETE /api/users/:id**: Delete a user by ID.

## Folder Structure

├── routes
│ ├── productRoute.js
│ └── userRoute.js
├── .env
├── package.json
├── server.js
└── README.md

