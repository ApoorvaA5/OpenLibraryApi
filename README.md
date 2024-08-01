# Book Search API Server

This is the API server for the Book Search application, built using Node.js and Express. It proxies requests to the Open Library API.

## Features

- Retrieve a list of books based on a search query.
- Retrieve details for a specific book.
- Retrieve a list of authors based on a search query.
- Retrieve details for a specific author.

## API Endpoints

- `GET /books?q={query}` - Retrieve a list of books based on the search query.
- `GET /books/:id` - Retrieve details for a specific book.
- `GET /authors?q={query}` - Retrieve a list of authors based on the search query.
- `GET /authors/:id` - Retrieve details for a specific author.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/book-search-api-server.git
    cd book-search-api-server
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    npm start
    ```

4. The server will be running on `http://localhost:3000`.

## Project Structure

- `index.js` - Main entry point of the application.
- `routes/` - Contains the route definitions for the API endpoints.
- `controllers/` - Contains the controller functions for handling the requests.
- `README.md` - Instructions on how to set up and run the server.

## License

This project is licensed under the MIT License.
