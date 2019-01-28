import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test', () => {
  context('get route', () => {
    it('should return a string', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.body.message).to.be.a('string').that.equals('ci with travis');
          done();
        });
    });
  });
});
