const { default: axios } = require("axios")
const weatherKey = require('../config')

module.exports = {
  /**
   * 根据location获取天气信息
   */
  async getCurrentWeatherByLocation(req, res, next) {
    // console.log(req.query)
    if (!req.query.lat || !req.query.lng) {
      return { code: 403, data: null, message: 'location参数错误'}
    }

    const { lng, lat } = req.query
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${weatherKey}`)
    console.log('response.data >>>', response.data)

    res.json(response.data)
  }
}