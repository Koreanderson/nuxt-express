import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import axios from 'axios'
import firebase from 'firebase/app'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
const { Router } = require('express')
const router = Router()
require('dotenv').config()

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDKBBF13bn7EHgNUx5t2yIxbgssyJJIp_M',
  authDomain: 'vue-test-3-2-2022.firebaseapp.com',
  projectId: 'vue-test-3-2-2022',
  storageBucket: 'vue-test-3-2-2022.appspot.com',
  messagingSenderId: '419482081726',
  appId: '1:419482081726:web:09fc8360467916e56281ef'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

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
