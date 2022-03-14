const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const Note = require('../models/noteModel');

const errorMsg = {
  title: 'Error',
  body: 'Request Invalid'
};

router.get('/', (req, res) => {
  Note.find()
    .then((result) => res.send(result))
    .catch((e) => res.status(404).send(errorMsg));
});

router.get('/:anyId', (req, res) => {
  Note.findOne({
      _id: req.params.anyId
    })
    .then((result) => res.send(result))
    .catch((e) => res.status(404).send(errorMsg));
});

router.post('/', (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    body: req.body.body
  });
  newNote.save()
    .then(() => res.send(newNote))
    .catch((e) => res.status(404).send(errorMsg));
});

router.put('/:anyId', (req, res) => {
  Note.updateOne({
      _id: req.params.anyId
    }, {
      $set: req.body
    })
    .then(() => res.send(req.body))
    .catch(e => res.status(404).send(errorMsg));
});

router.delete('/confirm', (req, res) => {
  Note.delete()
    .then(() => res.send({
      title: 'Successful',
      body: 'Every item deleted'
    }))
    .catch(e => res.status(404).send(errorMsg));
});

router.delete('/:anyId', (req, res) => {
  Note.deleteOne({
      _id: req.params.anyId
    })
    .then(() => res.send({
      title: 'Successful',
      body: 'Requested item deleted'
    }))
    .catch(e => res.status(404).send(errorMsg));
});

module.exports = router;
