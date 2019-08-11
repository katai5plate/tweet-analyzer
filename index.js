const CONF = require('./config.json');
const Twitter = require('twitter');
const fs = require('fs-extra');

const moment = require('moment');

const [id] = process.argv.slice(2);
moment.locale('ja');

const cli = new Twitter(CONF);

const getAPI = (url, params) =>
  new Promise((resolve, reject) => {
    cli.get(url, params, (error, result) =>
      error ? reject(error) : resolve(result)
    );
  });
const isNull = x => ['', null, undefined].includes(x);

(async () => {
  if (isNull(id)) return;
  const data = await getAPI('statuses/user_timeline', {
    screen_name: id,
    count: 200
  });
  await fs.outputJSON(`export/${id}.json`, data);
})();
