// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('before each', () => {
  beforeEach((done) => {
    done();
  });
});

describe("Properties", () => {
    describe("GET /", () => {
        // Test to get all users record
        it("should get all properties", (done) => {
             chai.request(app)
                 .get('/api/v1/property')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });

         
     // single property test
       
        it('should return 404 when  specified property is not found!', done => {
            chai
              .request(app)
              .get('/api/v1/property/100')
              .end((err, res) => {
                res.should.have.status(404);
                done();
              });
          });


       // single property test

       it('should return a single property ', done => {
        chai
          .request(app)
          .get('/api/v1/property/1')
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
      
      
    });



// CREATE NEW PROPERTY

describe('Property Tests', () => {

  it('Should not be able to create new property when price is empty', (done) => {
    chai
    .request(app)
    .post('/api/v1/property').send({
      owner: 'asgdagsdjahdjk',
      status:'jjj',
      price: '',
      state: 'kahskjadhbh',
      city: 'nyanasjjahgdnaxa',
      address: 'rqmnasdwrfds',
      type: 'house asdgjh',
      //imageUrl: 'https://via.localstorage.com/pic'
    })
      .end((err, res) => {
        res.should.has.status(401);
        done();
      });

  });






});


 

});
