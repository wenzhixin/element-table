<template>
  <div>
    <div id="toolbar">
      <el-button @click="resetSearch">
        resetSearch
      </el-button>
    </div>
    <element-table
      ref="table"
      :columns="columns"
      :options="options"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        [
          {
            title: 'ID',
            field: 'id'
          },
          {
            title: 'Item Name',
            field: 'name'
          },
          {
            title: 'Item Price',
            field: 'price'
          }
        ]
      ],
      options: {
        toolbar: '#toolbar',
        height: 460,
        search: true,
        searchText: 11,
        url: 'json/data1.json'
      }
    }
  },
  methods: {
    resetSearch () {
      this.$refs.table.resetSearch()
    }
  }
}
</script>
