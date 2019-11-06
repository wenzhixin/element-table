<template>
  <div>
    <div id="toolbar">
      <el-button @click="getData">
        getData
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
        sidePagination: 'server',
        pagination: true,
        url: 'https://examples.wenzhixin.net.cn/examples/bootstrap_table/data'
      }
    }
  },
  methods: {
    getData () {
      this.$alert(this.$refs.table.getData(), 'getData')
    }
  }
}
</script>
