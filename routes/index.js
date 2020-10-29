const https = require('https');
var express = require('express');
var router = express.Router();

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a084085a4919464f939a40b122c78145');


/* GET home page. */
router.get('/api/daily/charts/stock', function (req, res, next) {
  history = [{
      "date": "2020-10-23T13:32:00.000Z",
      "close": 115.96,
      "high": 116.2,
      "low": 115.81,
      "open": 116.09
    },
    {
      "date": "2020-10-23T13:36:00.000Z",
      "close": 115.87,
      "high": 115.95,
      "low": 115.71,
      "open": 115.945
    },
    {
      "date": "2020-10-23T13:40:00.000Z",
      "close": 115.695,
      "high": 115.91,
      "low": 115.54,
      "open": 115.91
    },
    {
      "date": "2020-10-23T13:44:00.000Z",
      "close": 115.79,
      "high": 115.825,
      "low": 115.475,
      "open": 115.695
    },
    {
      "date": "2020-10-23T13:48:00.000Z",
      "close": 115.57,
      "high": 115.82,
      "low": 115.375,
      "open": 115.79
    },
    {
      "date": "2020-10-23T13:52:00.000Z",
      "close": 115.61,
      "high": 115.69,
      "low": 115.42,
      "open": 115.565
    },
    {
      "date": "2020-10-23T13:56:00.000Z",
      "close": 115.465,
      "high": 115.625,
      "low": 115.37,
      "open": 115.615
    },
    {
      "date": "2020-10-23T14:00:00.000Z",
      "close": 114.89,
      "high": 115.46,
      "low": 114.82,
      "open": 115.46
    },
    {
      "date": "2020-10-23T14:04:00.000Z",
      "close": 115.015,
      "high": 115.08,
      "low": 114.805,
      "open": 114.88
    },
    {
      "date": "2020-10-23T14:08:00.000Z",
      "close": 114.885,
      "high": 115.075,
      "low": 114.8,
      "open": 115.015
    },
    {
      "date": "2020-10-23T14:12:00.000Z",
      "close": 114.965,
      "high": 115.18,
      "low": 114.79,
      "open": 114.89
    },
    {
      "date": "2020-10-23T14:16:00.000Z",
      "close": 115.14,
      "high": 115.23,
      "low": 114.915,
      "open": 114.97
    },
    {
      "date": "2020-10-23T14:20:00.000Z",
      "close": 114.835,
      "high": 115.26,
      "low": 114.81,
      "open": 115.14
    },
    {
      "date": "2020-10-23T14:24:00.000Z",
      "close": 115.16,
      "high": 115.16,
      "low": 114.74,
      "open": 114.84
    },
    {
      "date": "2020-10-23T14:28:00.000Z",
      "close": 115.245,
      "high": 115.33,
      "low": 114.97,
      "open": 115.16
    },
    {
      "date": "2020-10-23T14:32:00.000Z",
      "close": 115.1,
      "high": 115.355,
      "low": 115.1,
      "open": 115.24
    },
    {
      "date": "2020-10-23T14:36:00.000Z",
      "close": 115.08,
      "high": 115.21,
      "low": 114.995,
      "open": 115.09
    },
    {
      "date": "2020-10-23T14:40:00.000Z",
      "close": 115.175,
      "high": 115.255,
      "low": 115.07,
      "open": 115.09
    },
    {
      "date": "2020-10-23T14:44:00.000Z",
      "close": 114.985,
      "high": 115.19,
      "low": 114.825,
      "open": 115.185
    },
    {
      "date": "2020-10-23T14:48:00.000Z",
      "close": 114.88,
      "high": 115.005,
      "low": 114.78,
      "open": 114.985
    },
    {
      "date": "2020-10-23T14:52:00.000Z",
      "close": 114.855,
      "high": 114.99,
      "low": 114.8,
      "open": 114.88
    },
    {
      "date": "2020-10-23T14:56:00.000Z",
      "close": 115.05,
      "high": 115.16,
      "low": 114.875,
      "open": 114.875
    },
    {
      "date": "2020-10-23T15:00:00.000Z",
      "close": 115.155,
      "high": 115.175,
      "low": 114.955,
      "open": 115.04
    },
    {
      "date": "2020-10-23T15:04:00.000Z",
      "close": 115.205,
      "high": 115.215,
      "low": 115.085,
      "open": 115.165
    },
    {
      "date": "2020-10-23T15:08:00.000Z",
      "close": 115.22,
      "high": 115.25,
      "low": 115.045,
      "open": 115.2
    },
    {
      "date": "2020-10-23T15:12:00.000Z",
      "close": 115.23,
      "high": 115.32,
      "low": 115.2,
      "open": 115.24
    },
    {
      "date": "2020-10-23T15:16:00.000Z",
      "close": 115.085,
      "high": 115.24,
      "low": 115.015,
      "open": 115.23
    },
    {
      "date": "2020-10-23T15:20:00.000Z",
      "close": 114.77,
      "high": 115.13,
      "low": 114.675,
      "open": 115.09
    },
    {
      "date": "2020-10-23T15:24:00.000Z",
      "close": 114.69,
      "high": 114.775,
      "low": 114.525,
      "open": 114.765
    },
    {
      "date": "2020-10-23T15:28:00.000Z",
      "close": 114.755,
      "high": 114.87,
      "low": 114.69,
      "open": 114.69
    },
    {
      "date": "2020-10-23T15:32:00.000Z",
      "close": 114.75,
      "high": 114.895,
      "low": 114.605,
      "open": 114.755
    },
    {
      "date": "2020-10-23T15:36:00.000Z",
      "close": 114.65,
      "high": 114.79,
      "low": 114.525,
      "open": 114.745
    },
    {
      "date": "2020-10-23T15:40:00.000Z",
      "close": 114.76,
      "high": 114.82,
      "low": 114.545,
      "open": 114.655
    },
    {
      "date": "2020-10-23T15:44:00.000Z",
      "close": 114.345,
      "high": 114.785,
      "low": 114.27,
      "open": 114.755
    },
    {
      "date": "2020-10-23T15:48:00.000Z",
      "close": 114.36,
      "high": 114.42,
      "low": 114.275,
      "open": 114.345
    },
    {
      "date": "2020-10-23T15:52:00.000Z",
      "close": 114.555,
      "high": 114.58,
      "low": 114.32,
      "open": 114.365
    },
    {
      "date": "2020-10-23T15:56:00.000Z",
      "close": 114.595,
      "high": 114.655,
      "low": 114.515,
      "open": 114.55
    },
    {
      "date": "2020-10-23T16:00:00.000Z",
      "close": 114.665,
      "high": 114.685,
      "low": 114.495,
      "open": 114.595
    },
    {
      "date": "2020-10-23T16:04:00.000Z",
      "close": 114.855,
      "high": 114.895,
      "low": 114.635,
      "open": 114.665
    },
    {
      "date": "2020-10-23T16:08:00.000Z",
      "close": 114.96,
      "high": 114.985,
      "low": 114.795,
      "open": 114.85
    },
    {
      "date": "2020-10-23T16:12:00.000Z",
      "close": 114.905,
      "high": 114.995,
      "low": 114.775,
      "open": 114.965
    },
    {
      "date": "2020-10-23T16:16:00.000Z",
      "close": 114.59,
      "high": 114.97,
      "low": 114.36,
      "open": 114.91
    },
    {
      "date": "2020-10-23T16:20:00.000Z",
      "close": 114.495,
      "high": 114.64,
      "low": 114.35,
      "open": 114.615
    },
    {
      "date": "2020-10-23T16:24:00.000Z",
      "close": 114.48,
      "high": 114.52,
      "low": 114.35,
      "open": 114.485
    },
    {
      "date": "2020-10-23T16:28:00.000Z",
      "close": 114.485,
      "high": 114.495,
      "low": 114.43,
      "open": 114.495
    },
    {
      "date": "2020-10-23T16:32:00.000Z",
      "close": 114.68,
      "high": 114.7,
      "low": 114.455,
      "open": 114.475
    },
    {
      "date": "2020-10-23T16:36:00.000Z",
      "close": 114.675,
      "high": 114.765,
      "low": 114.635,
      "open": 114.68
    },
    {
      "date": "2020-10-23T16:40:00.000Z",
      "close": 114.805,
      "high": 114.89,
      "low": 114.68,
      "open": 114.69
    },
    {
      "date": "2020-10-23T16:44:00.000Z",
      "close": 114.91,
      "high": 114.995,
      "low": 114.805,
      "open": 114.805
    },
    {
      "date": "2020-10-23T16:48:00.000Z",
      "close": 115.03,
      "high": 115.04,
      "low": 114.835,
      "open": 114.91
    },
    {
      "date": "2020-10-23T16:52:00.000Z",
      "close": 114.935,
      "high": 115.04,
      "low": 114.8,
      "open": 115.03
    },
    {
      "date": "2020-10-23T16:56:00.000Z",
      "close": 114.825,
      "high": 114.94,
      "low": 114.63,
      "open": 114.94
    },
    {
      "date": "2020-10-23T17:00:00.000Z",
      "close": 115.075,
      "high": 115.1,
      "low": 114.77,
      "open": 114.79
    },
    {
      "date": "2020-10-23T17:04:00.000Z",
      "close": 115.015,
      "high": 115.075,
      "low": 114.965,
      "open": 115.07
    },
    {
      "date": "2020-10-23T17:08:00.000Z",
      "close": 114.925,
      "high": 115.045,
      "low": 114.895,
      "open": 115.015
    },
    {
      "date": "2020-10-23T17:12:00.000Z",
      "close": 115.01,
      "high": 115.065,
      "low": 114.85,
      "open": 114.92
    },
    {
      "date": "2020-10-23T17:16:00.000Z",
      "close": 114.965,
      "high": 115.02,
      "low": 114.84,
      "open": 115.01
    },
    {
      "date": "2020-10-23T17:20:00.000Z",
      "close": 115.04,
      "high": 115.06,
      "low": 114.905,
      "open": 114.96
    },
    {
      "date": "2020-10-23T17:24:00.000Z",
      "close": 115.005,
      "high": 115.09,
      "low": 115.0,
      "open": 115.04
    },
    {
      "date": "2020-10-23T17:28:00.000Z",
      "close": 115.045,
      "high": 115.065,
      "low": 114.965,
      "open": 115.01
    },
    {
      "date": "2020-10-23T17:32:00.000Z",
      "close": 115.035,
      "high": 115.16,
      "low": 115.0,
      "open": 115.04
    },
    {
      "date": "2020-10-23T17:36:00.000Z",
      "close": 115.005,
      "high": 115.045,
      "low": 114.89,
      "open": 115.03
    },
    {
      "date": "2020-10-23T17:40:00.000Z",
      "close": 114.96,
      "high": 115.035,
      "low": 114.93,
      "open": 115.005
    },
    {
      "date": "2020-10-23T17:44:00.000Z",
      "close": 114.91,
      "high": 114.97,
      "low": 114.845,
      "open": 114.97
    },
    {
      "date": "2020-10-23T17:48:00.000Z",
      "close": 114.96,
      "high": 115.03,
      "low": 114.89,
      "open": 114.89
    },
    {
      "date": "2020-10-23T17:52:00.000Z",
      "close": 114.98,
      "high": 115.0,
      "low": 114.94,
      "open": 114.955
    },
    {
      "date": "2020-10-23T17:56:00.000Z",
      "close": 114.855,
      "high": 115.025,
      "low": 114.805,
      "open": 114.98
    },
    {
      "date": "2020-10-23T18:00:00.000Z",
      "close": 114.905,
      "high": 114.935,
      "low": 114.74,
      "open": 114.835
    },
    {
      "date": "2020-10-23T18:04:00.000Z",
      "close": 115.01,
      "high": 115.065,
      "low": 114.865,
      "open": 114.89
    },
    {
      "date": "2020-10-23T18:08:00.000Z",
      "close": 114.895,
      "high": 115.045,
      "low": 114.865,
      "open": 115.005
    },
    {
      "date": "2020-10-23T18:12:00.000Z",
      "close": 114.895,
      "high": 114.925,
      "low": 114.82,
      "open": 114.895
    },
    {
      "date": "2020-10-23T18:16:00.000Z",
      "close": 114.965,
      "high": 114.995,
      "low": 114.88,
      "open": 114.895
    },
    {
      "date": "2020-10-23T18:20:00.000Z",
      "close": 114.83,
      "high": 114.965,
      "low": 114.79,
      "open": 114.955
    },
    {
      "date": "2020-10-23T18:24:00.000Z",
      "close": 114.765,
      "high": 114.84,
      "low": 114.72,
      "open": 114.84
    },
    {
      "date": "2020-10-23T18:28:00.000Z",
      "close": 114.76,
      "high": 114.81,
      "low": 114.72,
      "open": 114.77
    },
    {
      "date": "2020-10-23T18:32:00.000Z",
      "close": 114.785,
      "high": 114.845,
      "low": 114.765,
      "open": 114.765
    },
    {
      "date": "2020-10-23T18:36:00.000Z",
      "close": 114.755,
      "high": 114.785,
      "low": 114.685,
      "open": 114.775
    },
    {
      "date": "2020-10-23T18:40:00.000Z",
      "close": 114.61,
      "high": 114.775,
      "low": 114.575,
      "open": 114.755
    },
    {
      "date": "2020-10-23T18:44:00.000Z",
      "close": 114.7,
      "high": 114.705,
      "low": 114.575,
      "open": 114.61
    },
    {
      "date": "2020-10-23T18:48:00.000Z",
      "close": 114.675,
      "high": 114.79,
      "low": 114.665,
      "open": 114.71
    },
    {
      "date": "2020-10-23T18:52:00.000Z",
      "close": 114.54,
      "high": 114.68,
      "low": 114.525,
      "open": 114.68
    },
    {
      "date": "2020-10-23T18:56:00.000Z",
      "close": 114.43,
      "high": 114.58,
      "low": 114.41,
      "open": 114.55
    },
    {
      "date": "2020-10-23T19:00:00.000Z",
      "close": 114.485,
      "high": 114.5,
      "low": 114.4,
      "open": 114.43
    },
    {
      "date": "2020-10-23T19:04:00.000Z",
      "close": 114.545,
      "high": 114.565,
      "low": 114.475,
      "open": 114.485
    },
    {
      "date": "2020-10-23T19:08:00.000Z",
      "close": 114.565,
      "high": 114.635,
      "low": 114.535,
      "open": 114.545
    },
    {
      "date": "2020-10-23T19:12:00.000Z",
      "close": 114.685,
      "high": 114.755,
      "low": 114.555,
      "open": 114.57
    },
    {
      "date": "2020-10-23T19:16:00.000Z",
      "close": 114.725,
      "high": 114.77,
      "low": 114.67,
      "open": 114.685
    },
    {
      "date": "2020-10-23T19:20:00.000Z",
      "close": 114.705,
      "high": 114.76,
      "low": 114.615,
      "open": 114.735
    },
    {
      "date": "2020-10-23T19:24:00.000Z",
      "close": 114.605,
      "high": 114.705,
      "low": 114.57,
      "open": 114.685
    },
    {
      "date": "2020-10-23T19:28:00.000Z",
      "close": 114.425,
      "high": 114.645,
      "low": 114.405,
      "open": 114.605
    },
    {
      "date": "2020-10-23T19:32:00.000Z",
      "close": 114.515,
      "high": 114.545,
      "low": 114.4,
      "open": 114.42
    },
    {
      "date": "2020-10-23T19:36:00.000Z",
      "close": 114.625,
      "high": 114.675,
      "low": 114.515,
      "open": 114.525
    },
    {
      "date": "2020-10-23T19:40:00.000Z",
      "close": 114.775,
      "high": 114.8,
      "low": 114.605,
      "open": 114.63
    },
    {
      "date": "2020-10-23T19:44:00.000Z",
      "close": 114.93,
      "high": 114.945,
      "low": 114.775,
      "open": 114.775
    },
    {
      "date": "2020-10-23T19:48:00.000Z",
      "close": 114.925,
      "high": 114.995,
      "low": 114.855,
      "open": 114.935
    },
    {
      "date": "2020-10-23T19:52:00.000Z",
      "close": 115.055,
      "high": 115.055,
      "low": 114.915,
      "open": 114.92
    },
    {
      "date": "2020-10-23T19:56:00.000Z",
      "close": 115.03,
      "high": 115.085,
      "low": 114.905,
      "open": 115.05
    }
  ];
  
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

  response = {
    "status": "ok",
    "totalResults": 20796,
    "articles": [{
        "source": {
          "id": "engadget",
          "name": "Engadget"
        },
        "author": "Richard Lawler",
        "title": "Disney announces a 'strategic reorganization' to focus on streaming",
        "description": "Today Disney unveiled a new corporate structure that divides its content business into three groups that are “responsible and accountable for producing and delivering content for theatrical, linear and streaming, with the primary focus being the Company’s str…",
        "url": "https://www.engadget.com/disney-focuses-on-streaming-203003919.html",
        "urlToImage": "https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-08%2Fe7b66b90-d693-11ea-befa-a73ae07faf63&client=amp-blogside-v2&signature=f00947b90232ead8b30ef407f3e98b5839a79c87",
        "publishedAt": "2020-10-12T20:30:03Z",
        "content": "<li>STUDIOS: Messrs. Horn and Bergman will serve as Chairmen, Studios Content, which will focus on creating branded theatrical and episodic content based on the Company’s powerhouse franchises for th… [+993 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "New York Times"
        },
        "author": "Sarah Bahr",
        "title": "The Conners Return to Confront the Coronavirus",
        "description": "This ABC sitcom has dealt with real-world challenges since its earliest days as “Roseanne.” In its new season, those include the pandemic and its fallout.",
        "url": "https://www.nytimes.com/2020/10/18/arts/television/the-conners-season-3.html",
        "urlToImage": "https://static01.nyt.com/images/2020/10/19/arts/19conners-2/19conners-2-facebookJumbo.jpg",
        "publishedAt": "2020-10-18T15:55:57Z",
        "content": "Gilbert said the series will not dwell on the darkest parts of the pandemic People get that on the news every day, she said but that the show, which is set in the current moment, will reflect real-wo… [+1083 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": null,
        "title": "'Manipulated by Trump': Carl Bernstein on NBC town hall",
        "description": "CNN political analyst Carl Bernstein reacts to NBC hosting President Trump's town hall at the same time ABC is scheduled to host Joe Biden's television event.",
        "url": "https://www.cnn.com/videos/politics/2020/10/15/nbc-trump-town-hall-biden-carl-bernstein-keilar-nr-vpx.cnn",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/201015133740-carl-bernstein-super-tease.jpg",
        "publishedAt": "2020-10-15T18:03:32Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Tom McKay",
        "title": "Trump's Department of Labor Is Targeting Microsoft for Pledging to Hire More Black Managers",
        "description": "Trump’s Department of Labor has opened an investigation into whether Microsoft violated federal law by promising to hire more Black and African American managers and leaders, ABC News reported on Wednesday.Read more...",
        "url": "https://gizmodo.com/trumps-department-of-labor-is-targeting-microsoft-for-p-1845305674",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/qo7hhc5qxdxhoxohdzfc.jpg",
        "publishedAt": "2020-10-07T22:35:00Z",
        "content": "Trumps Department of Labor has opened an investigation into whether Microsoft violated federal law by promising to hire more Black and African American managers and leaders, ABC News reported on Wedn… [+4242 chars]"
      },
      {
        "source": {
          "id": "engadget",
          "name": "Engadget"
        },
        "author": "Richard Lawler",
        "title": "What's on TV: 'FIFA 21,' 'The Haunting of Bly Manor' and 'The Boys' finale",
        "description": "This week spooky season is taking over with a slew of horror-themed TV shows and movies. FIFA 21 arrives for sports gamers, while Chasing the Crown: Dreamers to Streamers makes a reality TV show out of wannabe Twitch stars. If you’d like to feel as if you’re …",
        "url": "https://www.engadget.com/the-boys-fifa-040444338.html",
        "urlToImage": "https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-10%2F27f18b20-0788-11eb-91fb-d1ab2b4b1f75&client=amp-blogside-v2&signature=dd29a8a0d8cd15df554b5227532510769de2a761",
        "publishedAt": "2020-10-06T04:04:44Z",
        "content": "The Boys wraps up season two this week on Amazon Prime, but I’m most looking forward to a new season of The Haunting on Netflix. Look below to check out each day's highlights, including trailers and … [+4288 chars]"
      },
      {
        "source": {
          "id": "engadget",
          "name": "Engadget"
        },
        "author": "Richard Lawler",
        "title": "What's on TV: 'Super Mario,' 'Star Wars: Squadrons' and 'Walking Dead'",
        "description": "After the debates, there are some entertaining things to put on your TV this week. In case you missed it, we’re adding another new service to the mix with AMC+, which launches Thursday and will feature new episodes of The Walking Dead and its newest spin-off,…",
        "url": "https://www.engadget.com/amc-plus-walking-dead-mario-battle-royale-041404766.html",
        "urlToImage": "https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-09%2F8ab445f0-02d2-11eb-aff6-89915d018da1&client=amp-blogside-v2&signature=8b380e5777f68a8463e47f044400ab2b13f31267",
        "publishedAt": "2020-09-30T04:14:04Z",
        "content": "Look below to check out each day's highlights, including trailers and let us know what you think (or what we missed).<li>The Glorias, Amazon Prime, 3 AM\r\n</li><li>American Murder: The Family Next Doo… [+3349 chars]"
      },
      {
        "source": {
          "id": "mashable",
          "name": "Mashable"
        },
        "author": "Morgan Sung",
        "title": "Eric Trump confuses COVID treatment with a vaccine during meltdown on ABC",
        "description": "Donald Trump's not the only Trump going on rambling televised rants this week. \nOn Sunday morning, Eric Trump appeared on ABC's This Week where he had what was pretty much an on-air meltdown. Most notably, he repeatedly lamented that his father \"lost a fortun…",
        "url": "https://mashable.com/article/eric-trump-meltdown-abc-this-week-covid-vaccine/",
        "urlToImage": "https://mondrian.mashable.com/2020%252F10%252F11%252F3c%252Fc92db48fad5e43b8a300a9cbcae4a300.62a83.png%252F1200x630.png?signature=kTqrrwm66T-pI4ZmRMscMgA_RJg=",
        "publishedAt": "2020-10-11T18:32:29Z",
        "content": "Donald Trump's not the only Trump going on rambling televised rants this week. \r\nOn Sunday morning, Eric Trump appeared on ABC's This Week where he had what was pretty much an on-air meltdown. Most n… [+4109 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "New York Times"
        },
        "author": "Michael M. Grynbaum",
        "title": "NBC Says Trump Will Hold Town Hall Meeting Thursday, Competing Against Biden",
        "description": "The candidates were set to debate on Thursday night until President Trump bowed out. Now they will take part in dueling town-hall-style meetings, with Joe Biden taking questions from voters on ABC.",
        "url": "https://www.nytimes.com/2020/10/14/us/elections/trump-town-hall-nbc.html",
        "urlToImage": "https://static01.nyt.com/images/2020/10/13/us/politics/13elections-briefing-nbc2/merlin_170084103_0ba7d327-3776-44a4-ba6e-5cbdc993b6ff-facebookJumbo.jpg",
        "publishedAt": "2020-10-14T11:15:31Z",
        "content": "Mr. Trump and his aides have not shared extensive details about the presidents medical condition with the public, and over the past few days, NBC executives were no exception. Until late Tuesday, the… [+1778 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Oliver Darcy, CNN Business",
        "title": "ABC News says staff that came into contact with Christie will 'self isolate for 14 days'",
        "description": "ABC News staffers who were in direct contact with former New Jersey Gov. Chris Christie will quarantine for 14 days, a spokesperson for the network said in a statement Saturday after Christie announced he had tested positive for the coronavirus.",
        "url": "https://www.cnn.com/2020/10/03/media/abc-quarantine-chris-christie/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/201003125931-chris-christie-2019-file-super-tease.jpg",
        "publishedAt": "2020-10-03T20:26:01Z",
        "content": null
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": "Reuters Staff",
        "title": "Fact check: ABC News did not confirm that Trump event attendees were paid $150 each and had to sign NDAs - Reuters",
        "description": "Shared hundreds of times on Facebook, posts say “ABC News has confirmed that attendees to Trump WH rally were paid $150 each and had to sign an NDA.” This claim is false: ABC News has not reported such details.",
        "url": "https://www.reuters.com/article/uk-factcheck-abc-did-not-report-wh-event-idUSKBN27420Y",
        "urlToImage": "https://static.reuters.com/resources/r/?m=02&d=20201019&t=2&i=1538047767&r=LYNXMPEG9I19Q&w=800",
        "publishedAt": "2020-10-19T15:00:00Z",
        "content": "By Reuters Staff\r\nShared hundreds of times on Facebook, posts say ABC News has confirmed that attendees to Trump WH rally were paid $150 each and had to sign an NDA. This claim is false: ABC News has… [+2040 chars]"
      },
      {
        "source": {
          "id": "mashable",
          "name": "Mashable"
        },
        "author": "Sasha Lekach",
        "title": "How to stream the final presidential debate",
        "description": "Finally, the end is near: The last U.S. presidential debate will be held Thursday night. This time the candidates' microphones will be muted at certain times, so it should be a quieter, less chaotic 90-minutes compared to the first debate last month. \nUnlike …",
        "url": "https://mashable.com/article/final-2020-presidential-debate-how-to-stream/",
        "urlToImage": "https://mondrian.mashable.com/2020%252F10%252F22%252Fbc%252Fb16c1072c16849ddbcbf606bfaf92062.f3e75.jpg%252F1200x630.jpg?signature=8_1igRToBpSSVg91hNOW2atPSAc=",
        "publishedAt": "2020-10-22T19:28:46Z",
        "content": "Finally, the end is near: The last U.S. presidential debate will be held Thursday night. This time the candidates' microphones will be muted at certain times, so it should be a quieter, less chaotic … [+2991 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Lifehacker.com"
        },
        "author": "Joel Cunningham",
        "title": "What's New on Hulu in November 2020",
        "description": "It’s time for Animaniacs! Hulu’s reboot of the ‘90s strangest cartoon phenomenon premiers on the streaming service on November 20, giving you at least one thing to be thankful for during the holidays.\n\nThat is, provided you came of age or otherwise watched th…",
        "url": "https://lifehacker.com/whats-new-on-hulu-in-november-2020-1845424423",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/xerzar7zbywrfovkjjgp.png",
        "publishedAt": "2020-10-20T15:50:00Z",
        "content": "Its time for Animaniacs! Hulus reboot of the 90s strangest cartoon phenomenon premiers on the streaming service on November 20, giving you at least one thing to be thankful for during the holidays.\r\n… [+8314 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "New York Times"
        },
        "author": "The New York Times",
        "title": "What Time is the Debate? Streaming, Moderators, Location and More",
        "description": "The first debate between President Trump and Joseph R. Biden Jr. takes place Tuesday night from 9 to 10:30 p.m. Eastern.",
        "url": "https://www.nytimes.com/2020/09/29/us/politics/what-time-is-the-debate.html",
        "urlToImage": "https://static01.nyt.com/images/2020/09/29/us/politics/29debate-howtowatch/29debate-howtowatch-facebookJumbo.jpg",
        "publishedAt": "2020-09-29T04:00:06Z",
        "content": "The first debate between President Trump and Joseph R. Biden Jr. takes place Tuesday night from 9 to 10:30 p.m. Eastern. Here are some of the many ways you can watch it:<li>The Times will livestream … [+579 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "New York Times"
        },
        "author": "The New York Times",
        "title": "How to Watch the Vice-Presidential Debate: Time, Streaming and Moderator",
        "description": "The debate between Vice President Mike Pence and Kamala Harris will take place on Wednesday night from 9 to 10:30 p.m. Eastern.",
        "url": "https://www.nytimes.com/2020/10/07/us/politics/vp-debate-time.html",
        "urlToImage": "https://static01.nyt.com/images/2020/10/07/us/politics/07debate-howtowatch/07debate-howtowatch-facebookJumbo.jpg",
        "publishedAt": "2020-10-07T10:00:06Z",
        "content": "The debate between Vice President Mike Pence and Kamala Harris takes place on Wednesday night from 9 to 10:30 p.m. Eastern. Here are some of the many ways you can watch it:<li>The Times will livestre… [+455 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "New York Times"
        },
        "author": "Lauren Messman",
        "title": "What’s on TV This Week: ‘Saturday Night Live’ and the First Presidential Debate",
        "description": "Chris Rock hosts the return of “Saturday Night Live,” President Trump and Joe Biden face off in their first debate and Jimmy Stewart and Jean Arthur star in the classic Frank Capra film “You Can’t Take It With You.”",
        "url": "https://www.nytimes.com/2020/09/28/arts/television/whats-on-tv-saturday-night-live-premiere.html",
        "urlToImage": "https://static01.nyt.com/images/2020/09/27/arts/27tvcol-snl/27tvcol-snl-facebookJumbo.jpg",
        "publishedAt": "2020-09-28T05:00:07Z",
        "content": "OUR TIME MACHINE (2020) 10 p.m. on PBS. This documentary, part of PBSs POV series, follows the Chinese multidisciplinary artist Maleonn, who enlists the help of his parents for a new work called Papa… [+1410 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "New York Times"
        },
        "author": "Lisa Lerer",
        "title": "This Is Not the Debate We Wanted",
        "description": "But if you don’t want to flip the channels between Biden and Trump, join our live chat, where we’ll cover both town halls.",
        "url": "https://www.nytimes.com/2020/10/15/us/politics/biden-trump-live-chat.html",
        "urlToImage": "https://static01.nyt.com/images/2020/10/15/us/politics/15onpolitics-pm/15onpolitics-pm-facebookJumbo.jpg",
        "publishedAt": "2020-10-15T23:00:02Z",
        "content": "Its town hall night in America!\r\nTonight, Joe Biden and President Trump will take questions from voters in two town-hall-style events, on dueling television networks, at the same time. Mr. Biden will… [+696 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "New York Times"
        },
        "author": "The New York Times",
        "title": "How to Watch the Vice Presidential Debate Live",
        "description": "The debate between Vice President Mike Pence and Kamala Harris will take place on Wednesday night from 9 to 10:30 p.m. Eastern.",
        "url": "https://www.nytimes.com/2020/10/07/us/politics/time-debate-stream.html",
        "urlToImage": "https://static01.nyt.com/images/2020/10/07/us/politics/07debate-howtowatch/07debate-howtowatch-facebookJumbo.jpg",
        "publishedAt": "2020-10-07T21:18:58Z",
        "content": "The debate between Vice President Mike Pence and Kamala Harris takes place on Wednesday night from 9 to 10:30 p.m. Eastern. Here are some of the many ways you can watch it:<li>The Times will livestre… [+455 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "New York Times"
        },
        "author": "The New York Times",
        "title": "How to Watch The Debate: Time, Moderator and Streaming",
        "description": "The second and final debate between President Trump and Joe Biden will kick off at 9 p.m. Eastern on Thursday. Here’s how to follow along.",
        "url": "https://www.nytimes.com/2020/10/22/us/politics/what-time-is-the-debate.html",
        "urlToImage": "https://static01.nyt.com/images/2020/10/22/us/politics/22debate-howtowatch/22debate-howtowatch-facebookJumbo.jpg",
        "publishedAt": "2020-10-22T13:00:07Z",
        "content": "The second and final debate between President Trump and former Vice President Joseph R. Biden Jr. takes place on Thursday from 9 to 10:30 p.m. Eastern. Here are some of the many ways you can watch it… [+488 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "YouTube"
        },
        "author": null,
        "title": "US Justice Department files antitrust lawsuit against Google - ABC News",
        "description": "<ol><li>US Justice Department files antitrust lawsuit against Google  ABC News\r\n</li><li>Lawmakers hail DOJ antitrust lawsuit against Google as 'long overdue'  Fox News\r\n</li><li>Trump's involvement clouds antitrust case against Google  Los Angeles Times\r\n</l…",
        "url": "https://www.youtube.com/watch?v=r1dEOFB0MCk",
        "urlToImage": "https://i.ytimg.com/vi/r1dEOFB0MCk/maxresdefault.jpg",
        "publishedAt": "2020-10-21T02:12:43Z",
        "content": null
      },
      {
        "source": {
          "id": "wired",
          "name": "Wired"
        },
        "author": "Caitlin Kelly",
        "title": "How to Watch the First 2020 Presidential Debate",
        "description": "Donald Trump and Joe Biden meet for the first time on a debate stage tonight in Cleveland.",
        "url": "https://www.wired.com/story/how-to-watch-the-first-2020-presidential-debate/",
        "urlToImage": "https://media.wired.com/photos/5f722881f5702ebc4a4507e8/191:100/w_1280,c_limit/how-to-watch-debate.jpg",
        "publishedAt": "2020-09-28T18:29:40Z",
        "content": "The first presidential debate between Donald Trump and Joe Biden kicks off Tuesday, September 29, from Cleveland. With only 36 days until Election Day, its the first chance to see the two nominees sq… [+2940 chars]"
      }
    ]
  };

  const news = response.articles;
  // console.log(news);

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
  return;

  // newsapi.v2.everything({
  //   // q: req.query.q,
  //   // sources: 'bbc-news,the-verge',
  //   // domains: 'bbc.co.uk,techcrunch.com',
  //   // from: '2017-12-01',
  //   // to: '2017-12-12',
  //   // language: 'en',
  //   // sortBy: 'relevancy',
  //   // page: 1
  //   q: 'bitcoin',
  //   sources: 'bbc-news,the-verge',
  //   domains: 'bbc.co.uk, techcrunch.com',
  //   from: '2020-10-10',
  //   to: '2020-10-12',
  //   language: 'en',
  //   sortBy: 'relevancy',
  //   page: 2
  // }).then(response => {
  //   console.log(response);
  //   /*
  //     {
  //       status: "ok",
  //       articles: [...]
  //     }
  //   */
  //   const news = response.articles;
  //   console.log(news);

  //   const news_list = [];
  //   news.forEach(element => {
  //     news_list.push({
  //       source: element.source.name,
  //       publishedAt: element.publishedAt,
  //       title: element.title,
  //       description: element.description,
  //       url: element.url,
  //       urlToImage: element.urlToImage,
  //     });
  //   });
  //   res.json(news_list);
  // });
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
  res.render('index', {
    title: 'Express'
  });
});

module.exports = router;