
# Basic Express.js Server


## Overview
 A new local coffee shop, “The Daily Grind.” They need a simple website to establish their online presence, but first, they need a backend server to serve the web pages. Your task is to build a basic web server using Node.js and Express that can serve their homepage and a contact page.

## Learning Objectives
- Set up a Node.js project and manage dependencies.
- Create a basic Express.js server.
- Implement routing to handle specific URL requests.
- Serve static HTML files in response to requests.

# Lab2 Adding Fun Facts 

## Objectives
- Created an Express server that communicates with an external API.
- Used axios to perform a GET request to a public API.
- Handled the response from an external API and serve the relevant data to a client.
- Implement basic error handling for API requests.

```js
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

Learning Objectives
By the end of this activity, you will have demonstrated your ability to:

Create an Express server that communicates with an external API.
Use axios to perform a GET request to a public API.
Handle the response from an external API and serve the relevant data to a client.
Implement basic error handling for API requests.