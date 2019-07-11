// Import the dependencies for testing
/*
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
                 .get('/')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });

         
     // single property test
        it("should not get a property", (done) => {
            const id = 5;
            chai.request(app)
                .get(`/${id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                 });
        });


       // single property test
       it("should get a single property", (done) => {
            const id = 1;
            chai.request(app)
                .get(`/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                 });
        });
        
        
         
       
    });
});
*/