#!/usr/local/bin/node
// generated by npm, please don't touch!
var dep = require('path').join(__dirname, "./../../../../.npm/sass/0.4.3/dependencies")
var depMet = require.paths.indexOf(dep) !== -1
var from = "./../../../../.npm/sass/0.4.3/package/spec/lib/images/vr.png"

if (!depMet) require.paths.unshift(dep)
module.exports = require(from)

if (!depMet) {
  var i = require.paths.indexOf(dep)
  if (i !== -1) require.paths.splice(i, 1)
}
