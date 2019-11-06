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
            editable: true
          },
          {
            title: 'Item Price',
            field: 'price',
            editable: true
          }
        ]
      ],
      options: {
        pagination: true,
        showExport: true,
        url: 'json/data1.json'
      }
    }
  }
}
</script>
