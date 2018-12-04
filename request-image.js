var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function (err) {
    console.log('Error: ' + err.statusCode);
  })
  .on('response', function (response) {
    console.log(`
      Response Status Code: ${response.statusCode}\n
      Response Status Message: ${response.statusMessage}\n
      Response Headers: ${response.headers['content-type']}
    `);
    console.log('Download complete.');
  })
  .pipe(fs.createWriteStream('./future.jpg'));

console.log('Downloading image...');
