<template>
  <div>
    <v-header/>
    <content :data="people" type="people"/>
  </div>
</template>
<script>
import Content from '@/components/Content.vue'
export default {
  data() {
    return {
      people: []
    }
  },
  components: {
    content: Content
  },
  methods: {
    async getData() {
      const response = await fetch('https://api.tvmaze.com/people')
      const data = await response.json()
      this.people = data.filter(item => item.id <= 50)
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
