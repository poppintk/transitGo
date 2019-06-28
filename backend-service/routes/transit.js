const express = require('express');
const gtfs = require('gtfs');

const router = express.Router();

const capitalize = apiEndPoint =>
  apiEndPoint.charAt(0).toUpperCase() + apiEndPoint.slice(1);

router.post('/:apiEndPoint', async (req, res) => {
  const { apiEndPoint } = req.params;
  if (!apiEndPoint) return res.status(404).send('No Api end point.');
  const cap = capitalize(apiEndPoint);
  const method = `get${cap}`;
  const body = req.body;
  if (!body) return res.status(404).send('Body is empty.');

  try {
    const agency = await gtfs[method]({
      ...body
    });

    res.send(agency);
  } catch (e) {
    res.send('method or body Invalid');
  }
});

module.exports = router;
