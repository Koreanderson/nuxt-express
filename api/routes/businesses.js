import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import axios from 'axios'
const { Router } = require('express')
const router = Router()
require('dotenv').config()

// axios.get('https://api.yelp.com/v3/businesses/search', {
//   headers: {
//     Authorization: `Bearer ${process.env.YELP_API_KEY}`
//   }
// })

router.get('/businesses', (req, res, next) => {
  console.log(req.query)
  axios.get('https://api.yelp.com/v3/businesses/search', {
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`
    },
    params: {
      term: req.query.term,
      location: req.query.zipcode
    }
  })
    .then(response => res.send(response.data))
    .catch(err => console.log(err))
})

module.exports = router
