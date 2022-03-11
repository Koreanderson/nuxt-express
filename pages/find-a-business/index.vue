<template>
  <div>
    <div class="query-form">
      <label for="zipcode">Zipcode:</label>
      <input id="zipcode" v-model="zipcode" type="text">
      <label for="term">Term:</label>
      <input id="term" v-model="term" type="text">
      <button @click="onClick">
        Search
      </button>
    </div>
    <div class="businesses">
      <div
        v-for="(business, index) in businesses"
        :key="index"
        class="business"
      >
        <div class="business__image">
          <img
            :src="business.image_url"
          >
        </div>
        <h3>{{ business.name }}</h3>
        <div class="rating">Rating: {{ business.rating }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Business',
  // async asyncData ({ $axios, params }) {
  //   const post = await $axios.$get('/api/businesses', {
  //     params: {
  //       term: 'tacos',
  //       zipcode: '19147'
  //     }
  //   })
  //   return { post.businesses }
  // },
  data () {
    return {
      zipcode: '',
      term: '',
      businesses: []
    }
  },
  methods: {
    async queryBusinesses (term, zipcode) {
      const res = await this.$axios.$get('/api/businesses', {
        params: {
          term,
          zipcode
        }
      })
      this.businesses = res.businesses
    },
    onClick () {
      this.queryBusinesses(this.term, this.zipcode)
    }
  }
}
</script>

<style lang="scss" scoped>
  .query-form {
    display: flex;
    justify-content: center;
    padding: 50px 0;
  }

  .businesses {
    display: grid;
    // grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-columns: repeat(4, minmax(0, 300px));
    justify-content: center;
    gap: 10px;
  }

  .business {
    width: 100%;
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }

  .business__image {

  }

</style>
