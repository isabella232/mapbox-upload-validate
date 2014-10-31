var path = require('path');

module.exports = {
  info: {
    'geojson': require('./valid.geojson.info.json'),
    'gpx': require('./valid.gpx.info.json'),
    'kml': require('./valid.kml.info.json'),
    'shp': require('./valid.shp.info.json'),
    'tif': require('./valid.tif.info.json'),
    'tilejson': require('./valid.tilejson.info.json'),
    'tm2z': require('./valid.tm2z.info.json'),
    'serialtiles': require('./valid.serialtiles.info.json')
  },
  tm2zErrors: {
    'doublezip': 'Unknown filetype.',
    'empty': 'project.xml not found in package',
    'filesize': 'Upload size should not exceed 750KB.',
    'gunzipsize': 'Unzipped size should not exceed 5MB.',
    'malformed': 'expected < at line 1',
    'missingfont': 'Failed to find font face \'This Is A Missing Font\' in style \'country_label\' in TextSymbolizer',
    'missingimage': 'file could not be found: \'invalid.tm2z-missing-image.tm2z/img/ice.jpg\' in style \'water\' in PolygonPatternSymbolizer',
    'nodirectory': 'EISDIR, open \'invalid.tm2z-nodirectory.tm2z/\'',
    'xmlsize': 'Unzipped project.xml size should not exceed 750KB.',
    'metadatasize': 'Metadata exceeds limit of 0.0k.',
    'maxdrawtime': 'At least one tile exceeds the draw time limit of 1ms. Please optimize your styles.',
    'avgdrawtime': 'The average tile draw time exceeds the limit of 1ms. Please optimize your styles.',
    'maximgbytes': 'At least one rendered tile exceeds the file size limit of 0.0k. Try lowering the number of PNG colors or JPEG quality in your project settings.',
    'avgimgbytes': 'The average rendered tile exceeds the file size limit of 0.0k. Try lowering the number of PNG colors or JPEG quality in your project settings.'
  }
};
