#!/usr/bin/env node

var validate = require('..');

process.env.MapboxAPIMaps = process.env.MapboxAPIMaps || 'https://api.tiles.mapbox.com';

var filepath = process.argv[2];

validate(filepath, function(err, valid, message) {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  if (!valid) console.error(message);
  else console.log(filepath);
});
