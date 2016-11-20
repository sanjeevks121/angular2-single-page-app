var express = require('express');
var router = express.Router();
var request = require('request');

const apiUrl = 'http://api.brewerydb.com/v2';
const apiKey = '3d2c166f5552dcc3beba00983f6507fd';

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/beer/:id', function(req, res, next) {

    var url = apiUrl + '/beer/' +  req.params.id;
    url = url + '?key=' + apiKey;
    console.log(url);
    request.get(url, function(err, request, json) {
        if (err) return next(err);
        var data = JSON.parse(json);
        res.send({data});
    });
});

router.get('/beers', function(req, res, next) {
    var url = apiUrl + '/beers/';
    var query = require('url').parse(req.url,true).search;
    url = url + query + '&hasLabels=Y&key=' + apiKey;
    console.log(url);
    request.get(url, function(err, request, json) {
        if (err) return next(err);
        var data = JSON.parse(json);
        res.send({data});
    });
});



router.get('/search', function(req, res, next) {
    var url = apiUrl + '/search/';
    var query = require('url').parse(req.url,true).search;
    url = url + query + '&key=' + apiKey;
    console.log(url);
    var beerId;
    request.get(url, function(err, request, json) {
        if (err) return next(err);
        var json = JSON.parse(json);
        if(json.data){
            console.log(json.data[0].id);
            beerId = json.data[0].id;

            var beerUrl = apiUrl + '/beer/' + beerId + '?key=' + apiKey;
            console.log("beer url: " + beerUrl);
            require('request').get(beerUrl, function(err, request, json) {
                if (err) return next(err);
                var data = JSON.parse(json).data;
                res.send({data});
            });


        }
        else{
            res.send({});
        }
    });


});

module.exports = router;
