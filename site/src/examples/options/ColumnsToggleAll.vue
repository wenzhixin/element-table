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
            title: 'Name',
            field: 'name'
          },
          {
            title: 'Price',
            field: 'price'
          },
          {
            title: 'Columns1',
            field: 'column1'
          },
          {
            title: 'Columns2',
            field: 'column2'
          },
          {
            title: 'Columns3',
            field: 'column3'
          },
          {
            title: 'Columns4',
            field: 'column4'
          }
        ]
      ],
      options: {
        height: 460,
        url: 'json/data5.json',
        showColumns: true,
        showColumnsToggleAll: true
      }
    }
  }
}
</script>
