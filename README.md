API Proxy Server for Open Library

Overview

This API proxy server provides a simplified interface to access book and author data from the Open Library API. It handles JSON requests, enables CORS for all routes, and proxies search requests to the Open Library API.

Dependencies

- Express.js (web framework)
- Axios (HTTP client library)
- CORS (Cross-Origin Resource Sharing middleware)

Setup

1. Clone the repository or copy the code into a new file.
2. Install dependencies using npm install or yarn install.
3. Set the PORT environment variable (optional, defaults to 3000).
4. Start the server using node server.js or npm start.

API Endpoints

- GET /api/search/books
    - Searches for books by title, author, or keyword.
    - Query parameters:
        - q (string): Search query.
        - page (number): Page number (defaults to 1).
        - limit (number): Number of results per page (defaults to 10).
    - Returns JSON data from Open Library API.
- GET /api/search/authors
    - Searches for authors by name.
    - Query parameters:
        - q (string): Search query.
    - Returns JSON data from Open Library API.

Error Handling

- If an error occurs while fetching data from Open Library, a 500 error response is returned with a JSON error message.

*

Note: This README file assumes the code is saved in a file named server.js. Adjust the filename and setup instructions accordingly if needed.
