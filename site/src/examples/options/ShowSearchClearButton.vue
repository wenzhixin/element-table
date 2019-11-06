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
        height: 460,
        search: true,
        showSearchClearButton: true,
        url: 'https://examples.wenzhixin.net.cn/examples/bootstrap_table/data',
        pagination: true,
        sidePagination: 'server'
      }
    }
  }
}
</script>
