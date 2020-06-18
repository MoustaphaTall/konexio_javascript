var _ = require('lodash'); //mais en général le nom de la variable est celui du package

var list = ('Algérie', 'Erythrée', 'Italie');

//pour rajouter le chiffre dans lequel les pays sont:
var result = _.map(list, function (el, index) { //ne pas retenir map on le reverra plus tard
    console.log(el, index);
});

console.log(result) //algérie 0, érythrée 1, Italie 2