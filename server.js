if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Apps = require("./apps");
require('./mongoose')
const port = process.env.PORT || 8080





//************** */
// GET THE APPS!
//*********** */

app.get("/apps", paginatedResults(Apps), (req, res) => {
  res.json(res.paginatedResults);
});

function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    let by = {}

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < model.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    if (req.query.by === "name") {
      let by = { name: 1 }
    }

    if (req.query.by === "id") {
      let by = { id: 1 }
    }



    try {
      results.results = await model.find().limit(limit).skip(startIndex).sort(by).exec();


      res.paginatedResults = results;

      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
}


// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, '../client/build')));
//   // Handle React routing, return all requests to React app
//   app.get('*', (request, response) => {
//     response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
//   });
// }

app.listen(port, () => {
  console.log(`express server is up on poart ${port}`)
});
