var request = require('request');

var env = process.env;

//build URL
var baseUrl = 'https://8383672.ngrok.com/ci';
var data, url;


//create the request
if (env.TRAVIS_PULL_REQUEST !== 'false') {
  //a pull request


} else {
  //regular build
  url = baseUrl + '/build/' + env.TRAVIS_REPO_SLUG;
  data = {
    branch: env.TRAVIS_BRANCH,
    commit: env.TRAVIS_COMMIT,
    build: parseInt(env.TRAVIS_BUILD_NUMBER),
    sizes: [{file: 'foo.js', 'size': {raw: 100, min: 10, gzip: 1}}]
  };

  request.post({
    url: url,
    json: data
  }, function postToServer(err) {
    console.log('Posted data to ...', err);
    process.exit(err);
  });

}
