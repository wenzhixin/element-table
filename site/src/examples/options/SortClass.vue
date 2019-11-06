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
        sortClass: 'sort-col-class',
        sortable: true,
        height: 460,
        url: 'json/data1.json'
      }
    }
  }
}
</script>

<style>
.sort-col-class {
  background: #f0f9eb;
}
</style>
