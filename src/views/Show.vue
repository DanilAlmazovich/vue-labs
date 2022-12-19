<template>
  <div>
    <v-header/>
    <content :data="show"/>
  </div>
</template>
<script>
import Content from '@/components/Content.vue'
export default {
  data() {
    return {
      show: []
    }
  },
  components: {
    content: Content
  },
  methods: {
    async getData() {
      const response = await fetch('https://api.tvmaze.com/shows')
      const data = await response.json()
      this.show = data
    }
  },
  mounted() {
    this.getData()
  }
}
</script>