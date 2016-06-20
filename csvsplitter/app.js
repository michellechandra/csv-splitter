var express = require('express')
  , moment = require('moment')
  , Mustache = require('mustache')
  , request = require('request')
  , split2 = require('split2')
  , through2 = require('through2')
  , moment = require('moment')
  ;

var app = express();


app.get('/:anything', function (req, res) {

  //set Content-disposition header so that browsers will treat it as a download
  // set response/output as a csv download?
  res.setHeader('Content-disposition', 'attachment; filename=data.csv');

  var datasource = 'datasource.csv';

  //GET the data and pipe it to the response
  request.get(datasource)
    .on('end', function() {
      res.end();
    })
    .pipe(split2(), { end: false }) // break up stream and reassemble each line as a chunk
    .pipe(transform) // call transform function on each chunk to convert timestamps to GMT
    .pipe(res); // pipe response to browser as CSV download?
});


var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  console.log('Example app listening on port  ',port);
});

//transform function, finds all timestamps and converts them to GMT
var transform = through2(function(chunk, encoding, cb) {
  chunk = chunk.toString();

  chunk = chunk.replace(/(\d{4}\-\d\d\-\d\d[tT][\d:\.]*)/g, function(match) {
    var newTime = shiftTime(match);
    return shiftTime(match);
  });

  //re-add the newline character
  chunk += '\n';

  cb(null, chunk);
})
  .on('error', function(err) {
  console.log(err, err.toString());
});

//shift time to GMT
function shiftTime(timestamp) {
  if(timestamp.length > 0 ) {
    timestamp = moment(timestamp).add(5,'hours').format('MM/DD/YYYY HH:mm:ss');
  }

  return timestamp;
}