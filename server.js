import express from 'express';
import path from 'path';
import url from 'url';

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


//=======Port==============//
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});