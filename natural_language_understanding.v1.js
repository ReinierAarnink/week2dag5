'use strict';

var fs = require('fs');
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
require('dotenv').config({ silent: true }); //  optional

var nlu = new NaturalLanguageUnderstandingV1({
  version: '2018-04-05',
  url: 'https://gateway-lon.watsonplatform.net/natural-language-understanding/api',
  iam_apikey: 'gL0nWdSHVPCIuyt03xxNx1clPaShAmqK0nlBnkR2283j'
});

var filename = '../test/resources/natural_language_understanding/energy-policy.html';
fs.readFile(filename, 'utf-8', function(file_error, file_data) {
  if (file_error) {
    console.log(file_error);
  } else {
    var options = {
      url: "https://www.theguardian.com/us",
      features: {
        concepts: {},
        keywords: {
        'sentiment': true,
        'emotion': true,
        'limit': 3
        }
      }
    };
    nlu.analyze(options, function(err, res) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(JSON.stringify(res, null, 2));
    });
  }
});
