<template>
  <div id="search">
    <form action="" @submit.prevent="search">
      <input type="text" placeholder="search" v-model="searchValue">
      <select v-model="searchType">
        <option value="shows">shows</option>
        <option value="people">people</option>
      </select>
      <input type="submit" @click="search">
    </form>

  </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: '',
      searchType: 'shows'
    }
  },
  methods: {
    search() {
      this.$router.push({
        path: `/search`,
        query: { q: this.searchValue, type: this.searchType }
      })
    }
  }
}
</script>