// import chai, { expect } from "chai";
// import chaiHttp from "chai-http";
// import app from '../server';
// const should = chai.should();

// chai.use(chaiHttp);
// chai.should();

// describe("POST / user login", () => {

//         it('It should not allow the user to login if the email is invalid', done => {
//             const user ={
//                 email: 'xaviogmail.com',
//                 password: '12345pro',
//             };
        
//             chai.request(app)
//                 .post('/api/v1/user/login')
//                 .send(user)
//                 .end((err, res) => {
//                     expect(res.status).to.equal(401);
//                   done();
//         });
//         })
//         it('It should not allow the user to login if the password is not more than six charachter', done => {
//             const user ={
//                 email: 'xavio@gmail.com',
//                 password: '123',
//             };
        
//             chai.request(app)
//                 .post('/api/v1/user/login')
//                 .send(user)
//                 .end((err, res) => {
//                     expect(res.status).to.equal(401);
//                   done();
//         });
//         })
//         it('It should not sign in a user if he has the wrong password', done => {
//             const user ={
//                 email: 'xavio@gmail.com',
//                 password: '123456789',
//             };
        
//             chai.request(app)
//                 .post('/api/v1/user/login')
//                 .send(user)
//                 .end((err, res) => {
//                     expect(res.status).to.equal(401);
//                   done();
//         });
//         })
//         it('It should not sign in a user if email is not filled in', done => {
//             const user ={
//                 email: '',
//                 password: '12345pro',
//             };
        
//             chai.request(app)
//                 .post('/api/v1/user/login')
//                 .send(user)
//                 .end((err, res) => {
//                     expect(res.status).to.equal(401);
//                   done();
//         });
//         })
//         it('It should not sign in a user if password is not filled in', done => {
//             const user ={
//                 email: 'xavio@gmail.com',
//                 password: '',
//             };
        
//             chai.request(app)
//                 .post('/api/v1/user/login')
//                 .send(user)
//                 .end((err, res) => {
//                     expect(res.status).to.equal(401);
//                   done();
//         });
//         })
//         it('It should sign in a user if he provides the right credentials', done => {
//             const user ={
//                 email: 'xavio@gmail.com',
//                 password: '12345pro',
//             };
        
//             chai.request(app)
//                 .post('/api/v1/user/login')
//                 .send(user)
//                 .end((err, res) => {
//                 expect(res.status).to.equal(201);
//                   done();
//         });
//         })
//         it('It should not sign in a user if the provided email is not registered', done => {
//             const user ={
//                 email: 'xaviok0@gmail.com',
//                 password: '12345pro',
//             };
        
//             chai.request(app)
//                 .post('/api/v1/user/login')
//                 .send(user)
//                 .end((err, res) => {
//                     expect(res.status).to.equal(401);
//                   done();
//         });
//         })
//     });



