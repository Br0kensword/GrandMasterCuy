// app.js

var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);


var params = {
  q: '#nodejs',
  count: 10,
  result_type: 'recent',
  lang: 'en'
}


T.get('account/verify_credentials', function(err, data, response) {
  if(!err){
    // This is where the magic will happen
    console.log(response);
  } else {
    console.log(err);
  }
})