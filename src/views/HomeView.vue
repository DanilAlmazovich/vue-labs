<template>
  <div>
    <div>
      <input type="text" placeholder="name" v-model="name">
      <input type="text" placeholder="lastname" v-model="lastname">
      <button @click="add">Add</button>
    </div>
    <list-content :list="list" @removeList="remove">fdsfsdfds</list-content>
  </div>
</template>

<script>
import ListContent from '@/components/home/ListContent.vue'
export default {
  components: {
    'list-content': ListContent
  },
  data() {
    return {
      name: '',
      lastname: '',
      list: []
    }
  },
  methods: {
    add() {
      if(this.name.length && this.lastname.length) {
        this.list.push(`${this.name} - ${this.lastname}`)
        this.name = this.lastname = ''
      }else {
        console.log('ошибка')
      }
    },
    remove(index) {
      this.list.splice(index, 1)
    },
  }
}
</script>

<style lang="css">
.content .list {
  display: flex;
  align-items: center;
}
.content .list p {
  margin-right: 10px;
}
</style>