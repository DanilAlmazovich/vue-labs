<template>
  <header>
    <div>
      <router-link to="/">home</router-link>
    </div>
    <search/>
    <div>
      <router-link to="/show">show</router-link>
      <router-link to="/people">people</router-link>
    </div>
  </header>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
  components: {
    Search
  }
}
</script>

<style lang="css" scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  border-bottom: 1px solid #595959;
}
header a {
  margin: 0 10px;

}
</style>