import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from '../server';
const should = chai.should();

chai.use(chaiHttp);
chai.should();

describe('before each', () => {
  beforeEach((done) => {
    done();
  });
});



describe("POST / create user", () => {

  it("User created, it should return 201", done => {
    const user = {
      email: "xavio@gmail.com",
      first_name: "xavio",
      last_name: "Rucahobatinya",
      password: "12345six",
      phoneNumber: "0785209432",
      address: "remera",
      is_admin: false
    };

    chai
      .request(app)
      .post("/api/v1/user/create")
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
  });

  it("should register non already registered user", done => {
    const user = {
        email: "xavio@gmail.com",
        first_name: "xavio",
        last_name: "Rucahobatinya",
        password: "12345six",
        phoneNumber: "0785209432",
        address: "remera",
        is_admin: false
    };

    chai
      .request(app)
      .post("/api/v1/user/create")
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });

  it("should not register already taken email", done => {
    const user = {
        email: "xavio@gmail.com",
        first_name: "xavio",
        last_name: "Rucahobatinya",
        password: "12345six",
        phoneNumber: "0785209432",
        address: "remera",
        is_admin: false
    };

    chai
      .request(app)
      .post("/api/v1/user/create")
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });

  it("Should not be able to create new user when email is empty", done => {
    const user = {
      email: "",
      first_name: "xavio",
      last_name: "mugabo",
      password: "12345pro",
      phoneNumber: "0785209432",
      address: "remera",
      is_admin: false
    };

    chai
      .request(app)
      .post("/api/v1/user/create")
      .send(user)
      .end((err, res) => {
       expect(res.status).to.equal(400);
        done();
      });
  });

  it("Should not be able to create new user when firstname is empty", done => {
    const user = {
      email: "xavio@gmail.com",
      first_name: "",
      last_name: "Mugabo",
      password: "12345pro",
      phoneNumber: "0785209432",
      address: "Remera",
      is_admin: false
    };

    chai
      .request(app)
      .post("/api/v1/user/create")
      .send(user)
      .end((err, res) => {
      expect(res.status).to.equal(400);
        done();
      });
  });

  it("Should not be able to create new user when lastname is empty", done => {
    const user = {
      email: "xavio@gmail.com",
      first_name: "Mugabo",
      last_name: "",
      password: "12345pro",
      phoneNumber: "0785209432",
      address: "remera",
      is_admin: false
    };

    chai
      .request(app)
      .post("/api/v1/user/create")
      .send(user)
      .end((err, res) => {
        
        expect(res.status).to.equal(400);
        done();
      });
  });

  it("Should not be able to create new user when password is empty", done => {
    const user = {
      email: "xavio@gmail.com",
      first_name: "xavio",
      last_name: "mugabo",
      password: "",
      phoneNumber: "0785209432",
      address: "remera",
      is_admin: false
    };

    chai
      .request(app)
      .post("/api/v1/user/create")
      .send(user)
      .end((err, res) => {
        
        expect(res.status).to.equal(400);
        done();
      });
  });

  it("Should not be able to create new user when phone number is empty", done => {
    const user = {
      email: "xavio@gmail.com",
      first_name: "xavio",
      last_name: "mugabo",
      password: "12345pro",
      phoneNumber: "",
      address: "remera",
      is_admin: false
    };

    chai
      .request(app)
      .post("/api/v1/user/create")
      .send(user)
      .end((err, res) => {
        
        expect(res.status).to.equal(400);
        done();
      });
  });

  it("Should not be able to create new user when address is empty", done => {
    const user = {
      email: "xavio@gmail.com",
      first_name: "xavio",
      last_name: "mugabo",
      password: "12345pro",
      phoneNumber: "0785209432",
      address: "",
      is_admin: false
    };

    chai
      .request(app)
      .post("/api/v1/user/create")
      .send(user)
      .end((err, res) => { 
        expect(res.status).to.equal(400);
        done();
      });
  });

  
  
  
});




