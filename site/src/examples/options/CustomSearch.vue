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
        search: true,
        customSearch (data, text) {
          return data.filter(function (row) {
            return row.price.indexOf(text) > -1
          })
        },
        url: 'json/data1.json'
      }
    }
  }
}
</script>
