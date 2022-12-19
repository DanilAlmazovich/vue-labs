<template>
  <div class="filter">
      <button :class="{'active': selectedFilter === filter}" v-for="filter in filters" @click="filterShow(filter)">{{ filter }}</button>
      <button @click="clearFilter">Очистить фильтр</button>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: [],
    }
  },
  data() {
    return {
      filters: [
        '1-5',
        6,
        7,
        8,
        9,
        10,
        'нет рейтинга'
      ],
      selectedFilter: null,
    }
  },
  methods: {
    filterShow(value) {
      this.selectedFilter = value
      this.$emit('filter', value)
    },
    clearFilter() {
      this.selectedFilter = null
      this.$emit('clearFilter')
    }
  }
}
</script>
<style lang="css" scoped>
.filter {
  padding: 30px 0;
}
.filter button {
  font-size: 14px;
  color: #000;
  background: transparent;
  border: 1px solid silver;
  padding: 2px 8px;
  margin-right: 10px;
  cursor: pointer;
}
.filter .active {
  border: 1px solid #734d3a;
}
</style>