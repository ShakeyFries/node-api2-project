const express = require('express');
const db = require('../data/db');


const router = express.Router();

router.post('/:id/comments', ( req,res ) => {
   const info = req.body;

   db.insertComment(comment)
      .then(go =>{
         if (go) {
            res.status(201).json(comment);
         } else {
            res.status(404).json({
               errorMessage: `The post with the specified ID does not exist`
            })
         }
      }) 
      .catch(err => {
         res.status(500).json({
            errorMessage: `There was an error while saving the comment to the database`, err });
      });
});

router.get('./:id/comments', ( req,res) =>{
   const {id} = req.params;

   db.findById(id)
      .then(go => {
         if(go) {
            res.status(200).json(go);
         } else {
            res.status(404).json({
               message: `The post with the specified ID does not exist`
            })
         }
      })
})

module.exports = router;