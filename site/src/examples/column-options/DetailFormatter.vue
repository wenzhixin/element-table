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
            detailFormatter (index, row) {
              return index + '. Item ID: ' + row.id
            }
          },
          {
            title: 'Item Name',
            field: 'name',
            detailFormatter (index, row) {
              return index + '. Item Name: ' + row.name
            }
          },
          {
            title: 'Item Price',
            field: 'price',
            detailFormatter (index, row) {
              return index + '. Item Price: ' + row.price
            }
          }
        ]
      ],
      options: {
        height: 460,
        detailView: true,
        detailViewByClick: true,
        detailViewIcon: false,
        showColumns: true,
        url: 'json/data1.json'
      }
    }
  }
}
</script>
