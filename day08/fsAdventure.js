var fs = require('fs');
var arr = [{
    name: 'Jean Guo',
    email: 'jean.guo@konexio.eu'
}];

// //Challenge 1
fs.writeFile('users.json', JSON.stringify(arr), function (err) {
    if (err) { return console.error(err); }
    console.log('File sucessfully written!');

    //Challenge 2
    fs.readFile('users.json', function (err, data) {
        if (err) { return console.error(err); }
        console.log("Nom : " + JSON.parse(data)[0].name);
        console.log("Adresse Email : " + JSON.parse(data)[0].email);

        //Challenge bonus 1
        arr.push({
            name: "Binta Jammeh",
            email: "binta.jammeh@konexio.eu"
        });

        fs.writeFile('users.json', JSON.stringify(arr), function (err) {
            if (err) { return console.error(err); }
            console.log('File sucessfully written!');
            console.log("------------")

            //Challenge bonus 2
            fs.readFile('users.json', function (err, data) {
                if (err) { return console.error(err); }
                console.log("Nom : " + JSON.parse(data)[1].email);
                console.log("Adresse Email : " + JSON.parse(data)[1].email);
            });
        });
    });
});