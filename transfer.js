'use strict'
const transfer = require('commander')
const pkg = require('./package')
const model = require('./lib/model')

transfer.version(pkg.version)

transfer
  .command('transfer')
  .description('tranfer the style of the "content image"')
  .option('-c, --contentImagePath <path>', 'Path to the "content image"')
  .option('-s, --styleImagePath <path>', 'Path to the "style image"')
  .option('-o, --outputImagePath <path>', 'Path to the output image')
  .action(function (opts) {
    ;(async function () {
      const { contentImagePath, styleImagePath, outputImagePath } = opts

      await model.run(contentImagePath, styleImagePath, outputImagePath)
    })(console.error)
  })

transfer.parse(process.argv)
