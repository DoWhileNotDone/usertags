process.env.NODE_ENV = 'test';

const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);

const app = require("../app");

describe("User Tags Service - Index", () => {
  it("landing page for the api", done => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        expect(res.text).to.include("S-Express");
        expect(res.text).to.include("Welcome to S-Express");
        done();
      });
  });
});
