<template>
  <div :key="$route.query.q">
    <v-header/>
    <content v-if="status" :data="result"></content>
  </div>
</template>
<script>
import Content from "@/components/Content.vue";
export default {
  components: {
    Content
  },
  data() {
    return {
      result: null,
      status: false
    }
  },
  methods: {
    async search() {
      this.status = false

      const response = await fetch(` https://api.tvmaze.com/search/${this.$route.query.type}?q=${this.$route.query.q}`)
      const data = await response.json()
      if(this.$route.query.type === 'shows') {
        this.result = data.map(item => ({
          ...item.show
        }))
      }else {
        this.result = data.map(item => ({
          ...item.person
        }))
      }
      this.status = true
      this.$router.go(1)
    }
  },
  mounted() {
    this.search()
  },
  watch: {
    '$route.query.q': {
      handler: function() {
        this.search()
      },
      deep: true,
      immediate: true
    }
  }


}
</script>