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
            title: 'Item Detail',
            colspan: 2
          },
          {
            title: 'Item ID',
            rowspan: 2,
            field: 'id',
            valign: 'middle'
          }
        ],
        [
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
        url: 'json/data1.json'
      }
    }
  }
}
</script>
