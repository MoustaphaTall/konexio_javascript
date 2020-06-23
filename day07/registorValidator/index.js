var prompt = require('prompt');
var schema = {
    properties: {
        username: {
            pattern: /[a-z0-9-]/gi,
            message: "Can only contain alphanumeric characters and hyphens",
            description: "Enter your username :",
            required: true
        },
        password: {
            pattern: /(?=.*[a-z])(?=.*\d)[a-z\d,.-]{6,}/gi,
            message: "must contain at least 6 characters, a letter and a digit",
            description: "Enter your password :",
            hidden: true,
            replace: '*',
            required: true
        },
        //reste à créer la clé email avec son pattern
    }
};

function onErr(err) {
    console.log(err);
    return 1;
}

prompt.start();

prompt.get(schema, function (err, result) {
    if (err) { return onErr(err) };
    console.log('ok');
});