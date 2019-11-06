<template>
  <div>
    <div id="toolbar">
      <el-button @click="showRow">
        showRow
      </el-button>
      <el-button @click="hideRow">
        hideRow
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
        url: 'https://examples.wenzhixin.net.cn/examples/bootstrap_table/data'
      }
    }
  },
  methods: {
    showRow () {
      this.$refs.table.showRow({
        index: 1
      })
    },
    hideRow () {
      this.$refs.table.hideRow({
        index: 1
      })
    }
  }
}
</script>
