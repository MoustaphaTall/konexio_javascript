var random = Math.round(Math.random() * 101);
var prompt = require('prompt');
var schema = {
    properties: {
        number: {
            pattern: /^(100|[1-9][0-9]?)$/,
            message: "doit être un nombre entre 1 and 100",
            description: "Quel est le nombre ?",
            required: true
        }
    }
};

function onErr(err) {
    console.log(err);
    return 1;
}

function moreOrLess(number) {

    // console.log(random);
    if (number > random) {
        console.log("C'est moins !");
        prompt.get(schema, function (err, result) {
            if (err) { return onErr(err); }
            // console.log(random)
            moreOrLess(result.number);

        });
    } else if (number < random) {
        console.log("C'est plus !");
        prompt.get(schema, function (err, result) {
            if (err) { return onErr(err); }
            // console.log(random)
            moreOrLess(result.number);
        });
    } else {
        console.log("Bravo, vous avez trouvé le nombre mystère !!!");
    }
}

prompt.start();

prompt.get(schema, function (err, result) {
    if (err) { return onErr(err); }
    moreOrLess(result.number);
});