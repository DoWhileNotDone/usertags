process.env.NODE_ENV = 'test';

const chai = require("chai");
const chaiHttp = require("chai-http");
const nodeHtmlParser  = require('node-html-parser');
const request = require('supertest');

const uuidv4 = require('uuid/v4');
const models = require('../domain/models');

chai.use(chaiHttp);

const { parse } = nodeHtmlParser;
const { expect } = chai;

const app = require("../app");

describe("User Tags Service - View Tag", () => {

  let page = null;
  let response = null;
  const uuidval = uuidv4();

  before((done) => {
    models.Tag.create({
      id: uuidval,
      name: 'Testy',
    }).then(async function(){
      response = await request(app).get(`/tags/${uuidval}`);
      page = parse(response.text);
      done();
    });

  })

  it("test get a single tag", done => {
        expect(response).to.have.status(200);
        expect(response).to.be.html;
        expect(response.text).to.include("Selected Tag");
        expect(response.text).to.include("Testy");
        done();
  });

  after((done) => {
    models.Tag.destroy({
      where: {},
      truncate: true
    }).then(rowsDeleted => {
        done();
    });
  });
});
