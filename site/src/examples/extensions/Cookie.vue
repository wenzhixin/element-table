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
        showColumns: true,
        cookie: true,
        cookieIdTable: 'saveId',
        pagination: true,
        search: true,
        url: 'https://examples.wenzhixin.net.cn/examples/bootstrap_table/data',
        sidePagination: 'server'
      }
    }
  }
}
</script>
