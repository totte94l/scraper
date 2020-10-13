const axios = require('axios');
const cheerio = require('cheerio')

// Flashback New Subjects
const getFLBANewSubjects = function(amount) {
    return new Promise(
        function(resolve, reject) {
            const url = 'https://www.flashback.org/nya-amnen';

            axios(url, { 
                responseType: 'arraybuffer',
                responseEncoding: 'binary' 
            })
            .then(response => {
                const html = response.data.toString('latin1');
                const $ = cheerio.load(html);
                const subjectsTable = $('.table-threads > tbody > tr');
                const subjects = [];

                if(amount) {
                    
                    for(let i = 0; i<amount; i++) {
                        const title = subjectsTable.eq(i).children('td').eq(1).find('div > .thread-title').text();
                        const category = subjectsTable.eq(i).children('td').eq(1).children('div').eq(1).find('.thread-forum-title').text();
                        const readers = subjectsTable.eq(i).find('.text-right > div > strong').text().match(/\d/g).join("");
                        const linksTo = subjectsTable.eq(i).children('td').eq(1).find('div > .thread-title').attr('href');
    
                        // Visningar totalt, svar
                        subjects.push({
                            title: title,
                            category: category,
                            readers: readers,
                            linksTo: linksTo
                        }) 
                    }
                } else {
                    subjectsTable.each(function() {
                        const title = $(this).children('td').eq(1).find('div > .thread-title').text();
                        const category = $(this).children('td').eq(1).children('div').eq(1).find('.thread-forum-title').text();
                        const readers = $(this).find('.text-right > div > strong').text().match(/\d/g).join("");
                        const linksTo = $(this).children('td').eq(1).find('div > .thread-title').attr('href').match(/\d/g).join("");;
    
                        subjects.push({
                            title: title,
                            category: category,
                            readers: readers,
                            linksTo: linksTo
                        })
                    })
                }

                console.log("Got " + subjects.length + " subjects.");
                resolve(subjects);

            })
            .catch(function(error) {
                reject(error)
            });
        })
    }

// Flashback Top Subjects
const getFLBATopSubjects = function(amount) {
    return new Promise(
        function(resolve, reject) {
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

                if(amount) {
                    
                    for(let i = 0; i<amount; i++) {

                        const title = subjectsTable.eq(i).children('td').eq(1).find('div > .thread-title').text();
                        const category = subjectsTable.eq(i).children('td').eq(1).children('div').eq(1).find('.thread-forum-title').text();
                        const readers = subjectsTable.eq(i).find('.text-right > div > strong').text().match(/\d/g).join("");
                        const linksTo = subjectsTable.eq(i).children('td').eq(1).find('div > .thread-title').attr('href');
    
                        // Visningar totalt, svar
                        subjects.push({
                            title: title,
                            category: category,
                            readers: readers,
                            linksTo: linksTo
                        }) 
                    }
                } else {
                    subjectsTable.each(function() {
                        const title = $(this).children('td').eq(1).find('div > .thread-title').text();
                        const category = $(this).children('td').eq(1).children('div').eq(1).find('.thread-forum-title').text();
                        const readers = $(this).find('.text-right > div > strong').text().match(/\d/g).join("");
                        const linksTo = $(this).children('td').eq(1).find('div > .thread-title').attr('href');
    
                        subjects.push({
                            title: title,
                            category: category,
                            readers: readers,
                            linksTo: linksTo
                        })
                    })
                }

                console.log("Got " + subjects.length + " subjects.");
                resolve(subjects);

            })
            .catch(function(error) {
                reject(error)
            });
        })
    }

    // Flashback Top Subjects
const getABArticles = function(amount) {
    return new Promise(
        function(resolve, reject) {
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

                if(amount) {
                    
                    for(let i = 0; i<amount; i++) {

                        const title = subjectsTable.eq(i).children('td').eq(1).find('div > .thread-title').text();
                        const category = subjectsTable.eq(i).children('td').eq(1).children('div').eq(1).find('.thread-forum-title').text();
                        const readers = subjectsTable.eq(i).find('.text-right > div > strong').text().match(/\d/g).join("");
                        const linksTo = subjectsTable.eq(i).children('td').eq(1).find('div > .thread-title').attr('href');
    
                        // Visningar totalt, svar
                        subjects.push({
                            title: title,
                            category: category,
                            readers: readers,
                            linksTo: linksTo
                        }) 
                    }
                } else {
                    subjectsTable.each(function() {
                        const title = $(this).children('td').eq(1).find('div > .thread-title').text();
                        const category = $(this).children('td').eq(1).children('div').eq(1).find('.thread-forum-title').text();
                        const readers = $(this).find('.text-right > div > strong').text().match(/\d/g).join("");
                        const linksTo = $(this).children('td').eq(1).find('div > .thread-title').attr('href');
    
                        subjects.push({
                            title: title,
                            category: category,
                            readers: readers,
                            linksTo: linksTo
                        })
                    })
                }

                console.log("Got " + subjects.length + " subjects.");
                resolve(subjects);

            })
            .catch(function(error) {
                reject(error)
            });
        })
    }

module.exports.getFLBATopSubjects = getFLBATopSubjects
module.exports.getFLBANewSubjects = getFLBANewSubjects


/* const isHappy = true;

const getCandy = function() {
    return new Promise(
        function(resolve, reject) {
            if(isHappy) {
                const candy = {
                    type: 'liqurice'
                }
    
                resolve(candy);

            } else {
                const reason = new Error('Im not happy!!')
                reject(reason)
            }
        }
    )
}

module.exports.getCandy = getCandy
 */