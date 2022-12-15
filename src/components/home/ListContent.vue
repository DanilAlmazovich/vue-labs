<template>
  <div class="content" v-if="list.length">

    <div class="list" v-for="(item, i) in list">
      <list>
        <span v-text="i + 1"></span>
        <span v-text="item"></span>
      </list>
      <button @click="remove(i)">delete</button>
    </div>
  </div>
</template>
<script>
import ListItem from '@/components/home/ListItem.vue'
export default {
  components: {
    list: ListItem
  },
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  methods: {
    remove(index) {
      this.$emit('removeList', index)
    }
  }
}
</script>