const router = require('express').Router()

const geocoder = require('./geocoder')

router.post('/', async (req, res, next) => {
  const addrres = req.body.addrress

  try {
      const results = await geocoder(addrres)
          return res.status(200).send({
            status: true,
            results
      })
  } catch (error) {
    next(error)
  }
})

module.exports = router
