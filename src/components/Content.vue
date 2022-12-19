<template>
  <div v-if="data.length" class="content">
    <div v-for="person in data">
      <router-link v-if="person.image"  :to="`/people/${person.id}`"  >
        <div></div>
        <div>
          <img :src="person?.image?.medium" alt="">
        </div>
        <h4>{{ person.name }}</h4>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  }
}
</script>
<style lang="css">
.content {
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>