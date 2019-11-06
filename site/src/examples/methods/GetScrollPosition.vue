<template>
  <div>
    <div id="toolbar">
      <el-button @click="getScrollPosition">
        getScrollPosition
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
            field: 'state',
            checkbox: true
          },
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
        clickToSelect: true,
        url: 'json/data1.json'
      }
    }
  },
  methods: {
    getScrollPosition () {
      this.$alert(this.$refs.table.getScrollPosition(), 'getScrollPosition')
    }
  }
}
</script>
