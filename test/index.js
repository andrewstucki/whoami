var request = require('supertest');
describe('whoami', function() {
  var server;
  beforeEach(function() {
    server = require('../index');
  });
  afterEach(function() {
    server.close();
  });
  it('responds with json', function testUnix(done) {
    request(server)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(function(res) {
        if (!('ip' in res.body))
          throw new Error("missing ip key");
        if (!('software' in res.body))
          throw new Error("missing software key");
        if (!('language' in res.body))
          throw new Error("missing language key");
      })
      .expect(200, done);
  });
});
