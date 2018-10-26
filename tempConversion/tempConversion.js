const ftoc = function(temperature) {

  return ((temperature - 32.0)*(5.0/9.0)).toFixed(1)*1.0

}

const ctof = function(temperature) {

  return ((9.0/5.0)*temperature + 32.0).toFixed(1)*1.0

}

module.exports = {
  ftoc,
  ctof
}
