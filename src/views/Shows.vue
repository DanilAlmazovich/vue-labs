<template>
  <div>
    <v-header/>
    <show-filters @filter="filterData" @clearFilter="clearFilter" :data="show"/>
    <content :data="show" :static="staticShow" type="show"/>
  </div>
</template>
<script>
import Content from '@/components/Content.vue'
import ShowFilters from '@/components/ShowFilters.vue'
export default {
  data() {
    return {
      show: [],
      staticShow: []
    }
  },
  components: {
    content: Content,
    'show-filters': ShowFilters
  },
  methods: {
    async getData() {
      const response = await fetch('https://api.tvmaze.com/shows')
      const data = await response.json()
      this.show = this.staticShow = data
    },
    filterData(value) {
      this.show = this.staticShow
      if(typeof value === 'number') {
        this.show = this.show.filter(item => Math.floor(item.rating.average) === value)
      }
      if(value === '1-5') {
        this.show = this.show.filter(item => Math.floor(item.rating.average) <= 5)
      }
      if(value === 'нет рейтинга') {
        this.show = this.show.filter(item => !item.rating.average)
      }
    },
    clearFilter() {
      this.show = this.staticShow
    }
  },
  mounted() {
    this.getData()
  }
}
</script>