const superagent = require('superagent');

// implemented getTatooineResidents function which resturns a promise
getTatooineResidents =  () => {
    return superagent.get("https://swapi.co/api/planets/1/")
    .then( response => {
        return response.body.residents;
     });
}

// implemented promiseMeAString function which return "You kept the Promise" is value is a non-empty string and "You failed me!" for a null value.
const promiseMeAString = (value) => {
    return new Promise((resolve,reject) => {
        value ? resolve("You kept the Promise!") : reject("You have failed me!");
    })
}

module.exports = {
    getTatooineResidents,
    promiseMeAString
}