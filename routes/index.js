const https = require('https');
var express = require('express');
var router = express.Router();

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a084085a4919464f939a40b122c78145');


/* GET home page. */
router.get('/api/daily/charts/stock', function (req, res, next) {
  console.log('req query:');
  console.log(req.query);

  if (req.query.q === undefined) {
    return res.json(null);
  }
  const ticker = req.query.q;
  const startDate = req.query.startDate;

  url = 'https://api.tiingo.com/iex/' + ticker + '/prices?startDate=' + startDate + '&resampleFreq=5min&token=19d78c76184ad15801d9b04d8a2984707515e64f'

  console.log('Sending https request:', url);

  https.get(url, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      // console.log('Get price result from remote:', data);
      const prices = JSON.parse(data);
      console.log(prices);
      return res.json(prices);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

router.get('/api/charts/stock', function (req, res, next) {
  console.log('req query:');
  console.log(req.query);

  if (req.query.q === undefined) {
    return res.json(null);
  }
  const ticker = req.query.q;
  const startDate = req.query.startDate;
  url = 'https://api.tiingo.com/tiingo/daily/' + ticker + '/prices?startDate=' + startDate + '&resampleFreq=monthly&token=19d78c76184ad15801d9b04d8a2984707515e64f';

  console.log('Sending https request:', url);

  https.get(url, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      // console.log('Get price result from remote:', data);
      const prices = JSON.parse(data);
      console.log(prices);
      return res.json(prices);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

router.get('/api/search/stock', function (req, res, next) {
  console.log('req query:');
  console.log(req.query);

  if (req.query.search === undefined) {
    return res.json([]);
  }

  url = 'https://api.tiingo.com/tiingo/utilities/search?query=' + req.query.search + '&token=19d78c76184ad15801d9b04d8a2984707515e64f';

  console.log('Sending https request:', url);

  https.get(url, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log('Get result from remote:');
      const stocks = JSON.parse(data);
      console.log(stocks);
      return res.json(stocks);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

router.get('/api/news/stock/', function (req, res, next) {
  console.log('req.params is', req.query);

  if (req.query.q === undefined) {
    return res.json(null);
  }

  newsapi.v2.everything({
    q: req.query.q,
  }).then(response => {
    console.log(response);
    const news = response.articles;
    console.log(news);

    const news_list = [];
    news.forEach(element => {
      news_list.push({
        source: element.source.name,
        publishedAt: element.publishedAt,
        title: element.title,
        description: element.description,
        url: element.url,
        urlToImage: element.urlToImage,
      });
    });
    res.json(news_list);
  });
});

router.get('/api/stock/:ticker', function (req, res, next) {

  console.log('req query:');
  console.log(req.query);

  if (req.params.ticker === undefined) {
    return res.json(null);
  }

  url = 'https://api.tiingo.com/tiingo/daily/' + req.params.ticker + '?token=19d78c76184ad15801d9b04d8a2984707515e64f';

  console.log('Sending https request:', url);

  https.get(url, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log('Get result from remote:');
      const stocks = JSON.parse(data);
      console.log(stocks);
      return res.json(stocks);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

router.get('/api/stock/:ticker/price', function (req, res, next) {
  price = {
    "prevClose": 115.98,
    "mid": null,
    "lastSaleTimestamp": "2020-10-20T20:00:00+00:00",
    "open": 116.2,
    "askPrice": null,
    "low": 115.63,
    "ticker": "AAPL",
    "timestamp": "2020-10-20T20:00:00+00:00",
    "lastSize": null,
    "tngoLast": 117.51,
    "last": 117.51,
    "high": 118.98,
    "askSize": null,
    "quoteTimestamp": "2020-10-20T20:00:00+00:00",
    "bidPrice": null,
    "bidSize": null,
    "volume": 124423728
  };
  
  console.log('req params:');
  console.log(req.params);

  if (req.params.ticker === undefined) {
    return res.json(null);
  }
  url = 'https://api.tiingo.com/iex/' + req.params.ticker.toLowerCase() + '?token=19d78c76184ad15801d9b04d8a2984707515e64f';

  console.log('Sending https request:', url);

  https.get(url, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      // console.log('Get price result from remote:', data);
      const prices = JSON.parse(data);
      // console.log(prices);
      return res.json(prices[0]);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});


router.get('/', function (req, res, next) {
  res.send('Hello World!');
});

module.exports = router;