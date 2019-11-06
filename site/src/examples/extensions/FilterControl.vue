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
            filterControl: 'input'
          },
          {
            title: 'Item Price',
            field: 'price',
            filterControl: 'select'
          }
        ]
      ],
      options: {
        url: 'json/data1.json',
        filterControl: true,
        showSearchClearButton: true
      }
    }
  }
}
</script>
