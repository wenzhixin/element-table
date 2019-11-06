<template>
  <div>
    <div id="toolbar">
      <el-button @click="showColumn">
        showColumn
      </el-button>
      <el-button @click="hideColumn">
        hideColumn
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
        showColumns: true,
        url: 'json/data1.json'
      }
    }
  },
  methods: {
    showColumn () {
      this.$refs.table.showColumn('name')
    },
    hideColumn () {
      this.$refs.table.hideColumn('name')
    }
  }
}
</script>
