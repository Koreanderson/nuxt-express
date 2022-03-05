import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
const { Router } = require('express')
const router = Router()
const axios = require('axios')
require('dotenv').config()

// axios.get('https://api.yelp.com/v3/businesses/search', {
//   headers: {
//     Authorization: `Bearer ${process.env.YELP_API_KEY}`
//   }
// })

router.get('/businesses', (req, res, next) => {
  axios.get('https://api.yelp.com/v3/businesses/search', {
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`
    },
    params: {
      term: 'cheesesteak',
      location: '19147'
    }
  })
    .then(response => res.send(response.data))
    .catch(err => console.log(err))
})

module.exports = router
