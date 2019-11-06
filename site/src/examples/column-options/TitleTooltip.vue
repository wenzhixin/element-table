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
            titleTooltip: 'Item-ID',
            field: 'id'
          },
          {
            title: 'Item Name',
            titleTooltip: 'other title',
            field: 'name'
          },
          {
            title: 'Item Price',
            field: 'price'
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
