const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.BASE_URL);

const getRecipes = (recipe) => api.get('/api/json/v1/1/search.php')
 .set('Content-Type', 'application/json')
 .set('Accept', 'application/json')
 .query({s: recipe})

module.exports = {
   getRecipes,
}