/**
 * Created by leojpod on 3/7/16.
 */
module.exports = function (analysisData) {
  var analysis = analysisData;
  return {
    analyseRequest: function (request) {
      console.log('analysing request');
      analysis = {
        method: request.method,
        url: request.url.url,
        path: request.url.pathname,
        params: {
          query: request.query,
          body: request.body
        }
      };
      return this;
    },
    displayJSON: function (response) {
      response.writeHead(200, {'content-type': 'application/json'});
      response.write(JSON.stringify(analysis));
      response.end();

    }
  }
};
