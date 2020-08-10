const express = require('express');
const app = express();
const mongoose = require('mongoose');
const myApps = require('./apps');

mongoose.connect('mongodb://localhost/pagination', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

db.once('open', async () => {
  if ((await myApps.countDocuments().exec()) > 0) return;

  Promise.all([
    myApps.create({ name: 'my-app-001' }),
    myApps.create({ name: 'my-app-002' }),
    myApps.create({ name: 'my-app-003' }),
    myApps.create({ name: 'my-app-004' }),
    myApps.create({ name: 'my-app-005' }),
    myApps.create({ name: 'my-app-006' }),
    myApps.create({ name: 'my-app-007' }),
    myApps.create({ name: 'my-app-008' }),
    myApps.create({ name: 'my-app-009' }),
    myApps.create({ name: 'my-app-010' })
  ]).then(() => console.log('Added apps!'));
});

app.get('/apps', paginatedResults(myApps), (req, res) => {
  res.json(res.paginatedResults);
});

function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < model.length) {
      results.next = {
        page: page + 1,
        limit: limit
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      };
    }

    try {
      results.results = await model.find().limit(limit).skip(startIndex).exec;
      res.paginatedResults = results;

      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
}

app.listen(3000);
