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
import $ from 'jquery'

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
        ajax (params) {
          const url = 'https://examples.wenzhixin.net.cn/examples/bootstrap_table/data'
          $.get(url + '?' + $.param(params.data)).then(res => {
            params.success(res)
          })
        },
        search: true,
        sidePagination: 'server',
        pagination: true
      }
    }
  }
}
</script>
