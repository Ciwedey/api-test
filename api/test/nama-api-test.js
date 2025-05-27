const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));


const page = require('../page/api-page.js');
const schema = require('../data/json-schema.json')

const testCase = {
 "positive" : {
    "getRecipe" : "As a User, I want to be able to get Blue Margarita recipe",
 },
 "negative" : {
    "noSearch" : "As a User, I should got null message when I try to search Cendol",
 }
}

describe(`cocktail recipe List`, () => {

 it(`@get ${testCase.positive.getRecipe}`, async() => {
  const response = await page.getRecipes('Blue Margarita');
  assert(response.status).to.equal(200);
  assert(response.body).to.jsonSchema(schema);
 }),

 it(`@get ${testCase.negative.noSearch}`, async() => {
  const response = await page.getRecipes('Cendol');
  assert(response.status).to.equal(200);
  assert(response.body.drinks).to.equal(null);
 })
 
}) 
