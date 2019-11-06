<template>
  <div>
    <div id="toolbar">
      <el-button @click="getVisibleColumns">
        getVisibleColumns
      </el-button>
      <el-button @click="getHiddenColumns">
        getHiddenColumns
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
            sortable: true,
            visible: false
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
        showColumns: true,
        pagination: true,
        sidePagination: 'server',
        url: 'https://examples.wenzhixin.net.cn/examples/bootstrap_table/data'
      }
    }
  },
  methods: {
    getVisibleColumns () {
      this.$alert(this.$refs.table.getVisibleColumns().map(it => it.field), 'getVisibleColumns')
    },
    getHiddenColumns () {
      this.$alert(this.$refs.table.getHiddenColumns().map(it => it.field), 'getHiddenColumns')
    }
  }
}
</script>
