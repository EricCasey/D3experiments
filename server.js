const express = require('express');
const fs = require('fs');
const request = require('request');
const http = require('http');

const axios = require('axios');

const API_KEY = 'e0d90b4abc9c3ba64ab78a663b45fd07';
const REQ_PATH = `/data/2.5/forecast?mode=json&appid=${API_KEY}`;
const REQ_HOST = 'api.openweathermap.org'

const app = express();

app.set('port', (process.env.PORT || 3001));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods","POST, GET, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/city/:search', (req, res) => {

    var city = req.params.search;
    var pathSTR = `${REQ_PATH}/&q=${city},us`;
    var options = {
      host: REQ_HOST,
      path: pathSTR,
      method: 'GET',
      headers: {
        'User-Agent': 'TRON'
      }
    };

    var callback = function(response) {
      var str = '';
      //another chunk of data has been recieved, so append it to `str`
      response.on('data', function (chunk) {
        str += chunk;
      });
      //the whole response has been recieved, so we just print it out here
      response.on('end', function () {
        console.log("Weather API request complete: " + city)
        res.send(str)
      });
    }

    http.request(options, callback).end();
  });


app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
