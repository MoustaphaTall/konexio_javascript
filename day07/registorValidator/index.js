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
            message: "Must contain at least 6 characters, a letter and a digit",
            description: "Enter your password :",
            hidden: true,
            replace: '*',
            required: true
        },
        email: {
            pattern: /(?=.*[a-z])(?=.*@)(?=.*[.])[a-z\d,.@-]{1,}/gi,
            message: "Enter a valid email adress",
            description: "Enter your email",
            required: true

        }
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