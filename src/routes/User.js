var express = require('express');
var router = express.Router();
const querystring = require('querystring');  

import UserC from '../app/classes/UserC'

router.get('/populateUser', function(req, res, next) {
   UserC.populateUser().then((data) =>{
        res.send(data)    
    }).catch((err) =>{
        res.status(401).send(err)    
    })
});

router.get('/users', function(req, res, next) {
    UserC.list(req.query).then((data) =>{
         res.send(data)    
     }).catch((err) =>{
         res.status(401).send(err)    
     })
 });

router.post('/users', function(req, res, next) {
    UserC.save(req.body).then((data) =>{
         res.send(data)    
     }).catch((err) =>{
         res.status(401).send(err)    
     })
 });

 router.get('/users/:id', function(req, res, next) {
    UserC.show(req.params.id).then((data) =>{
         res.send(data)    
     }).catch((err) =>{
         res.status(401).send(err)    
     })
 });

 router.put('/users/:id', function(req, res, next) {
    UserC.update(req.params.id, req.body).then((data) =>{
         res.send(data)    
     }).catch((err) =>{
         res.status(401).send(err)    
     })
 });

 router.delete('/users/:id', function(req, res, next) {
    UserC.remove(req.params.id).then((data) =>{
         res.send(data)    
     }).catch((err) =>{
         res.status(401).send(err)    
     })
 });

module.exports = router;