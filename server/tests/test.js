// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

// Configure chai
chai.use(chaiHttp);
chai.should();
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
describe('POST/ ', () => {
  it('it should add new property', (done) => {
    chai.request(app)
      .post('/api/v1/property')
      .end((err, res) => {
        res.should.have.status(200);
        done();
        
      });
  });


  });





});
