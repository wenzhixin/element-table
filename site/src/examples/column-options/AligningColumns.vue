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
            title: 'Item ID',
            field: 'id',
            halign: 'right',
            align: 'center'
          },
          {
            title: 'Item Name',
            field: 'name',
            halign: 'center',
            align: 'left'
          },
          {
            title: 'Item\n    ',
            field: 'price',
            halign: 'left',
            align: 'right'
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
