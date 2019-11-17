process.env.NODE_ENV = 'test';

const chai = require("chai");
const chaiHttp = require("chai-http");
const nodeHtmlParser  = require('node-html-parser');
const request = require('supertest');

chai.use(chaiHttp);

const { parse } = nodeHtmlParser;
const { expect } = chai;

const app = require("../app");

describe("User Tags Service - Index", () => {

  let page = null;
  let response = null;

  before(async function(){
    response = await request(app).get("/");
    page = parse(response.text);
  })

  it("landing page for the api", async function (done) {
        expect(response).to.have.status(200);
        expect(response).to.be.html;
        expect(response.text).to.include("User Tag Service");
        expect(response.text).to.include("Welcome to the User Tag Service");
        //Parse Elements
        const tagsLink = page.querySelector('#link-tags-manage');
        expect(tagsLink).to.exist;
        expect(tagsLink.text).to.equal("Manage Tags");
        expect(tagsLink.attributes.href).to.equal("/tags/");
        done();
  });
});
