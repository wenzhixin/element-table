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
        showColumns: true,
        showToggle: true,
        showPaginationSwitch: true,
        showRefresh: true,
        search: true,
        pagination: true,
        keyEvents: true,
        url: 'json/data1.json'
      }
    }
  }
}
</script>
