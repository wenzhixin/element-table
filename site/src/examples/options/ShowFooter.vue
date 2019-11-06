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
            footerFormatter () {
              return 'Total'
            }
          },
          {
            title: 'Item Name',
            field: 'name',
            footerFormatter (data) {
              return data.length
            }
          },
          {
            title: 'Item Price',
            field: 'price',
            footerFormatter (data) {
              const field = this.field
              return '$' + data.map(function (row) {
                return +row[field].substring(1)
              }).reduce(function (sum, i) {
                return sum + i
              }, 0)
            }
          }
        ]
      ],
      options: {
        height: 460,
        showColumns: true,
        showFooter: true,
        url: 'json/data1.json'
      }
    }
  }
}
</script>
