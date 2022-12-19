<template>
  <header>
    <div>
      <router-link to="/">home</router-link>
    </div>
    <search/>
    <div>
      <router-link v-for="link in links"
                   :class="{'is-active': $route.name === link}"
                   :to="`/${link}`">
        {{ link }}</router-link>
    </div>
  </header>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
  data() {
    return {
      links: ['shows', 'people']
    }
  },
  components: {
    Search
  },
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
.is-active {
  color: #545454;
  text-decoration: underline;
}
</style>