<template>
  <div>
    <div id="toolbar">
      <el-button @click="remove">
        remove
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
        height: 428,
        url: 'json/data1.json'
      }
    }
  },
  methods: {
    remove () {
      const ids = this.$refs.table.getSelections().map(row => row.id)
      this.$refs.table.remove({
        field: 'id',
        values: ids
      })
    }
  }
}
</script>
