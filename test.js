var request = require('request');

request.post({
    url: 'http://0.0.0.0:3000/add_channel',
    form: {
        name: 'PruebaAA'
    }
}, function(err, httpR, body) {
    if(err) {
        console.log(err);
    } else {
        console.log('SUCCESS');
        console.log(httpR.statusCode);
        console.log(body);
    }
});