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

router.get('/api/news2/stock/', function (req, res, next) {
  console.log('req.params is', req.query);

  if (req.query.q === undefined) {
    return res.json(null);
  }

  newsapi.v2.everything({
    // q: req.query.q,
    // sources: 'bbc-news,the-verge',
    // domains: 'bbc.co.uk,techcrunch.com',
    // from: '2017-12-01',
    // to: '2017-12-12',
    // language: 'en',
    // sortBy: 'relevancy',
    // page: 1
    q: 'bitcoin',
    sources: 'bbc-news,the-verge',
    domains: 'bbc.co.uk, techcrunch.com',
    from: '2020-10-10',
    to: '2020-10-29',
    language: 'en',
    sortBy: 'relevancy',
    page: 2
  }).then(response => {
    console.log(response);
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
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