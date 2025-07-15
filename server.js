import express from 'express';
import path from 'path';
import url from 'url';
import axios from 'axios';
// Express App

const app = express();
const PORT=3000;
// console.log(import.meta.url);

const filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);
console.log(__dirname);

//====Middleware====//
app.use(express.static(path.join(__dirname, 'public',)));


//====Route Index.html====//
app.get('/', (req, res) => {
   

res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//====Route contact.html====//
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

//=======FunFact==============
app.get('/api/fun-fact', async (req, res) => {
  try {
    // Make GET request to Useless Facts API
    const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');

    // Extract the fact text
    const factText = response.data.text;

    // Send JSON response with only the fact
    res.json({ fact: factText });
  } catch (error) {
    console.error('Error fetching fun fact:', error.message);

    // Send 500 error response with error message
    res.status(500).json({ error: 'Could not fetch fun fact' });
  }
});
//=======Port==============//
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});