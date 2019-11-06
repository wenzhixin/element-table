<template>
  <div>
    <element-table
      ref="table"
      :columns="columns"
      :data="data"
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
            escape: true
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
      data: [
        {
          id: '<b>Escape ID: 0</b>',
          name: '<b>Bold Item</b>',
          price: '$0'
        }
      ],
      options: {
        height: 460
      }
    }
  }
}
</script>
