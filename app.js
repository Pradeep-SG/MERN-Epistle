const express = require('express');
var cors = require('cors');

const app = express();

app.use(cors());

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  });
}

const port = process.env.PORT || 5000;
const errorMsg = {
  title: 'Error',
  body: 'Request Invalid'
};

const Note = require('./models/noteModel.js');

app.use(express.json());

app.get('/api/items', (req, res) => {
  Note.find()
    .then((result) => res.send(result))
    .catch((e) => res.status(404).send(errorMsg));
});

app.get('/api/items/:anyId', (req, res) => {
  Note.findOne({
      _id: req.params.anyId
    })
    .then((result) => res.send(result))
    .catch((e) => res.status(404).send(errorMsg));
});

app.post('/api/items/', (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    body: req.body.body
  })
  newNote.save()
    .then(() => res.send(newNote))
    .catch((e) => res.status(404).send(errorMsg));
});

app.put('/api/items/:anyId', (req, res) => {
  Note.updateOne({
      _id: req.params.anyId
    }, {
      $set: req.body
    })
    .then(() => res.send(req.body))
    .catch(e => res.status(404).send(errorMsg));
});

app.delete('/api/items/confirm', (req, res) => {
  Note.delete()
    .then(() => res.send({
      title: 'Successful',
      body: 'Every item deleted'
    }))
    .catch(e => res.status(404).send(errorMsg));
});

app.delete('/api/items/:anyId', (req, res) => {
  Note.deleteOne({
      _id: req.params.anyId
    })
    .then(() => res.send({
      title: 'Successful',
      body: 'Requested item deleted'
    }))
    .catch(e => res.status(404).send(errorMsg));
});

app.listen(port, () => console.log(`Server is up and running on port ${port}`));