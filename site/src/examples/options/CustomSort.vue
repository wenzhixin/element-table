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
        height: 460,
        customSort (sortName, sortOrder, data) {
          const order = sortOrder === 'desc' ? -1 : 1
          data.sort(function (a, b) {
            const aa = +((a[sortName] + '').replace(/[^\d]/g, ''))
            const bb = +((b[sortName] + '').replace(/[^\d]/g, ''))
            if (aa < bb) {
              return order * -1
            }
            if (aa > bb) {
              return order
            }
            return 0
          })
        },
        url: 'json/data1.json'
      }
    }
  }
}
</script>
