var ghpages = require('gh-pages')

ghpages.publish('dist', function (err) { console.error(err) })
