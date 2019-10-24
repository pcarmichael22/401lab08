'use strict';

const server = require('../app');
const categories = require('../models/categories');
const request = require('./supergoose')(server.server);

describe('Categories', () => {
    it('get', () => {
        request.get('/api/v1/categories')
            .then(response => {
                expect(request.count).toBe(null);
            })
    })

    it ('post', () => {
        request.post('/api/v1/categories')
            .send({name: 'Peter', description: 'Test Description'})
            .then(response => {
                expect(request.count).toBe(null);
            })
    })
})

