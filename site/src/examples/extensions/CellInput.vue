<template>
  <div>
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
            cellInputEnabled: true
          },
          {
            title: 'Item Price',
            field: 'price',
            sortable: true
          }
        ]
      ],
      options: {
        cellInputEnabled: true,
        autoRefresh: true,
        pagination: true,
        url: 'https://examples.wenzhixin.net.cn/examples/bootstrap_table/data',
        sidePagination: 'server'
      }
    }
  }
}
</script>
