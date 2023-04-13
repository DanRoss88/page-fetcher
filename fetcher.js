/*It should take two command line arguments:

a URL
a local file path
It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.

> node fetcher.js http://www.example.edu/ ./index.html
Downloaded and saved 3261 bytes to ./index.html
How can you get the file size?

There are a couple of ways. If you dig into Node's documentation, you'll find there is a way to get statistics about a file that is sitting on your file system. However, you may not need to do that if you think about the fact that 1 character is equal to 1 byte.
Install and use the request library to make the HTTP request (We know this library is deprecated but it is still ok to use for our purposes.)
Use Node's fs (file system) module to write the file
Use the callback based approach we've been learning so far`
Do not use the pipe function
Do not use synchronous functions (see warning above)

*/
const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

const fetcher = (URL, filePath) => {
  request.get(URL, (error, response, body) => {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);

    fs.writeFile(filePath, body, err => {
      if (err) throw err;
      console.log(` Downloaded and saved ${body.length} bytes to ${filePath}`);
    });

  });
};

fetcher(args[0], args[1]);