const express = require("express")
const path = require("path")
const app = express()
const fetch = require('node-fetch');
const DIST_DIR = path.join(__dirname, 'dist/bundle')
const HTML_FILE = path.join(DIST_DIR, 'index.html')
const bodyParser = require('body-parser');

const baseURL = process.env.baseURL || 'http://localhost:4000';
const apiURL = baseURL + '/api';
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(DIST_DIR))
// app.get('/', (req, res) => {
//         res.sendFile(HTML_FILE)
// })
app.get('/*', (req, res) => {
  // res.sendFile(HTML_FILE);
  const parentDirectory = path.resolve(__dirname, '..'); 
  const indexPath = path.join(parentDirectory, 'index.html');
  res.sendFile(indexPath);
});
app.get('/ping', (req, res) => {
        res.send('pong')
})

app.post('/login', async (req, res) => {

  try {
      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      };
    
      const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(req.body),
      };
        const result = await fetch(apiURL + '/login', requestOptions);
        if(!result.ok) {
          res.send({token: ''})
        }
        const data = await result.json();
        res.send({...data})
    
  } catch (e) {
    console.info(e);
  }
  })

  app.get('/products', async (req, res) => {
    console.info('<<',req.query);
    try {
        const headers = {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          token: req.query.token
        };
      
        const requestOptions = {
          method: 'GET',
          headers: headers,
        };
          const result = await fetch(apiURL + '/products', requestOptions);
          if(!result.ok) {
            res.send({})
          }
          const data = await result.json();
          res.send({...data})
      
    } catch (e) {
      console.info(e);
    }
    })

app.listen(5000, () => {
    console.info('app running at 5000');
});