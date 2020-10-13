const express = require('express');
const app = express();
var cors = require('cors')

const plScraper = require('./pl-scraper');


/* const axios = require('axios');
const cheerio = require('cheerio') */

var corsOptions = {
    origin: 'http://127.0.0.1',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors())
app.use(express.static('public'));

app.get('/topsubjects/:amount?', function(req, res) {
    const getFLBATopSubjects = function() {

        const amount = req.params.amount;

        plScraper.getFLBATopSubjects(amount).then(function(subjects) {
            res.send(subjects)
        })
        .catch(function(error) {
            res.send(error.message);
        })
    }

    getFLBATopSubjects();
})

app.get('/newsubjects/:amount?', function(req, res) {
    const getFLBANewSubjects = function() {

        const amount = req.params.amount;

        plScraper.getFLBANewSubjects(amount).then(function(subjects) {
            res.send(subjects)
        })
        .catch(function(error) {
            res.send(error.message);
        })
    }

    getFLBANewSubjects();
})

app.listen(3000, function() {
    console.log("Listening on http://127.0.0.1:3000");
})