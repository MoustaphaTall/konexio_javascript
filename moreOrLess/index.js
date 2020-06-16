var prompt = require('prompt');
var schema = {
    properties: {
        number: {
            pattern: /b([1- 9]| [1 - 9][0 - 9] | 100) /b,
            message: "must be a number between 1 and 100",
            required: true
        }
    }
};

prompt.start();
prompt.get(schema, moreOrLess(num) //sans doute faux, apprentissage en cours...
};

function moreOrLess(num) {

}