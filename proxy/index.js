const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

const API_KEY = 'kJi2ZJ_MF3NUE3ioFstIGkryG2HxxIwYOxrdgUmUiNOvc_Fte_D-f6gCWsCb0r70teV4aoRNnJ7Exhbpp7yHHLG0hLcYWRJZ2OTniQUuFYFW7Ges5Mh3XZslOEi8X3Yx';

app.get('/search', (req, res) => {
  console.log(req.query);
  axios.get('https://api.yelp.com/v3/businesses/search', {
    headers: {
        'Authorization': `Bearer kJi2ZJ_MF3NUE3ioFstIGkryG2HxxIwYOxrdgUmUiNOvc_Fte_D-f6gCWsCb0r70teV4aoRNnJ7Exhbpp7yHHLG0hLcYWRJZ2OTniQUuFYFW7Ges5Mh3XZslOEi8X3Yx`
    },
    params: req.query,
  }).then( (data) => {
    res.json(data.data);
  }).catch( (err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

app.get('/:id/reviews', (req, res) => {
  console.log(req.query);
  axios.get('https://api.yelp.com/v3/businesses' + req.originalUrl, {
    headers: {
        'Authorization': `Bearer kJi2ZJ_MF3NUE3ioFstIGkryG2HxxIwYOxrdgUmUiNOvc_Fte_D-f6gCWsCb0r70teV4aoRNnJ7Exhbpp7yHHLG0hLcYWRJZ2OTniQUuFYFW7Ges5Mh3XZslOEi8X3Yx`
    },
    params: req.query,
  }).then( (data) => {
    res.json(data.data);
  }).catch( (err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
