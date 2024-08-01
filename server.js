const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle JSON requests
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Route to proxy book search requests
app.get('/api/search/books', async (req, res) => {
  try {
    const query = req.query.q || '';
    const page = req.query.page || 1; // Default to page 1 if not provided
    const limit = req.query.limit || 10; // Default to 10 results if not provided
    const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&fields=key,language,title,author_name,publish_year&page=${page}&limit=${limit}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Open Library' });
  }
});

// Route to proxy author search requests
app.get('/api/search/authors', async (req, res) => {
  try {
    const query = req.query.q || '';
    const response = await axios.get(`https://openlibrary.org/search/authors.json?q=${query}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Open Library' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
