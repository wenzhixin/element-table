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
            field: 'state',
            checkbox: true,
            formatter (value, row, index) {
              if (index === 2) {
                return {
                  disabled: true
                }
              }
              if (index === 5) {
                return {
                  disabled: true,
                  checked: true
                }
              }
              return value
            }
          },
          {
            title: 'ID',
            field: 'id'
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
      options: {
        height: 460,
        clickToSelect: true,
        url: 'json/data1.json'
      }
    }
  }
}
</script>
