const { Router } = require('express')
const users = require('./users')
const comments = require('./comments')
const utils = require('../utils')
const api = new Router()

api.get('/users', utils.catchAsyncErrors(users.get))
api.get('/users/:id', utils.catchAsyncErrors(users.getByName))

api.get('/users/:userName/comments', utils.catchAsyncErrors(comments.get))
api.post('/comments', utils.catchAsyncErrors(comments.create))
api.delete('/comments/:id', utils.catchAsyncErrors(comments.delete))
module.exports = api
