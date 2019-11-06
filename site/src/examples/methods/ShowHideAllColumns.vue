<template>
  <div>
    <div id="toolbar">
      <el-button @click="showAllColumns">
        showAllColumns
      </el-button>
      <el-button @click="hideAllColumns">
        hideAllColumns
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
            sortable: true,
            switchable: false
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
        showColumns: true,
        pagination: true,
        sidePagination: 'server',
        url: 'https://examples.wenzhixin.net.cn/examples/bootstrap_table/data'
      }
    }
  },
  methods: {
    showAllColumns () {
      this.$refs.table.showAllColumns({
        index: 1
      })
    },
    hideAllColumns () {
      this.$refs.table.hideAllColumns({
        index: 1
      })
    }
  }
}
</script>
