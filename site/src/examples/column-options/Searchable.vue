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
            searchable: false
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
        url: 'json/data1.json'
      }
    }
  }
}
</script>
