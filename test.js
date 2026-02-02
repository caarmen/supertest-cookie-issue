const request = require('supertest');
const cookies = request.cookies;
const app = require('./app');

describe('Cookie case-sensitivity bug', () => {
  it('should preserve cookie name case (currently fails)', async () => {
    const res = await request(app)
      .get('/v1/myroute/')
      .set('Accept', 'application/json')
      .expect(200)
      .expect(cookies.new({name: 'Foo', value: 'bar'}));
  });
});
