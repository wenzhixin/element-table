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
            field: 'name',
            searchFormatter: false,
            formatter (value) {
              return 'Formatted ' + value
            }
          },
          {
            title: 'Item Price',
            field: 'price',
            formatter (value) {
              return 'Price: ' + value
            }
          }
        ]
      ],
      options: {
        height: 460,
        search: true,
        url: 'json/data1.json'
      }
    }
  }
}
</script>
