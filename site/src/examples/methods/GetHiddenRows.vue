<template>
  <div>
    <div id="toolbar">
      <el-button @click="getHiddenRows">
        Hide and Get Hidden Rows
      </el-button>
      <el-button @click="showHiddenRows">
        Show Hidden Rows
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
            field: 'id',
            sortable: true
          },
          {
            title: 'Item Name',
            field: 'name',
            sortable: true
          },
          {
            title: 'Item Price',
            field: 'price',
            sortable: true
          }
        ]
      ],
      options: {
        toolbar: '#toolbar',
        height: 460,
        pagination: true,
        sidePagination: 'server',
        url: 'json/data2.json'
      }
    }
  },
  methods: {
    getHiddenRows () {
      this.$refs.table.hideRow({
        index: 1
      })
      this.$alert(this.$refs.table.getHiddenRows(), 'getHiddenRows')
    },
    showHiddenRows () {
      this.$refs.table.getHiddenRows(true)
    }
  }
}
</script>
