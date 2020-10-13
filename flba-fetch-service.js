"use strict";

const axios = require('axios');
const cheerio = require('cheerio')

class FlBaFetchService {
    constructor () {
        this.flSubjects = new Array();
    }

    getSubjects() {
        const url = 'https://www.flashback.org/aktuella-amnen';

    axios(url, { 
        responseType: 'arraybuffer',
        responseEncoding: 'binary' 
    })
    .then(response => {
        const html = response.data.toString('latin1');
        const $ = cheerio.load(html);
        const subjectsTable = $('.table-threads > tbody > tr');
        const subjects = [];

        subjectsTable.each(function() {
            

            const title = $(this).children('td').eq(1).find('div > .thread-title').text();
            const category = $(this).children('td').eq(1).children('div').eq(1).find('.thread-forum-title').text();
            const readers = $(this).find('.text-right > div > strong').text().split(" ")[0];
            const linksTo = $(this).children('td').eq(1).find('div > .thread-title').attr('href');

            subjects.push({
                title: title,
                category: category,
                readers: readers,
                linksTo: linksTo
            })
        })
        console.log("Works until..");
        return  Promise.resolve(subjects) 

    })
    .catch(console.error);
    }
}

module.exports = FlBaFetchService;