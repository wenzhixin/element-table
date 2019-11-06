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
            formatter: 'ID: %s'
          },
          {
            title: 'Item Name',
            field: 'name',
            formatter (value, row) {
              const icon = row.id % 2 === 0 ? 'fa-star' : 'fa-star-and-crescent'
              return '<i class="fa ' + icon + '"></i> ' + value
            }
          },
          {
            title: 'Item Price',
            field: 'price',
            formatter (value) {
              // 16777215 == ffffff in decimal
              const color = '#' + Math.floor(Math.random() * 6777215).toString(16)
              return '<div style="color: ' + color + '">' +
      '<i class="fa fa-dollar-sign"></i>' +
      value.substring(1) +
      '</div>'
            }
          }
        ]
      ],
      options: {
        height: 460,
        url: 'json/data1.json'
      }
    }
  }
}
</script>
