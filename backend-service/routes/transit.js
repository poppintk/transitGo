const express = require("express");
const config = require("config");
const MongoClient = require("mongodb").MongoClient;
// Create a new MongoClient
const client = new MongoClient(config.get("db"));
let db;
// Use connect method to connect to the Server
client.connect(function(err, client) {
  if (err) winston.error(err);
  console.log("Connected correctly to server");
  db = client.db("gtfs");
});

const router = express.Router();

router.post("/:apiEndPoint", async (req, res) => {
  const { apiEndPoint } = req.params;
  if (!apiEndPoint) return res.status(404).send("No Api end point.");
  const query = req.body.query;
  const limit = req.body.limit;
  if (!req.body) return res.status(404).send("Body is empty.");
  try {
    const collection = db.collection(apiEndPoint);
    const result = await collection
      .find({
        ...query
      })
      .limit(limit)
      .toArray();
    res.send(result);
  } catch (e) {
    res.send("method or body Invalid");
  }
});

module.exports = router;
