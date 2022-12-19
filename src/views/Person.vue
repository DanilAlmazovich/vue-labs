<template>
  <div>
    <v-header/>
    <div class="person" v-if="person">
      <img :src="person?.image?.original" alt="">
      <p>{{ person.name }}</p>
      <p v-if="person.country">country - {{person?.country?.name}}</p>
      <p>{{person?.birthday}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      person: null
    }
  },
  methods: {
    async getData() {
      const response = await fetch(`https://api.tvmaze.com/people/${this.$route.params.id}`)
      this.person = await response.json()
    }
  },
  mounted() {
    this.getData()
    console.log(this.$route.params.id)
  },
}
</script>
<style lang="css" scoped>
.person {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.person img {
  width: 60%;
}
</style>