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
      data: [
        {
          'id': 0,
          'name': undefined,
          'price': '$0'
        },
        {
          'id': 1,
          'name': 'Item 1',
          'price': undefined
        },
        {
          'id': 2,
          'name': 'Item 2',
          'price': '$2'
        },
        {
          'id': 3,
          'name': undefined,
          'price': '$3'
        },
        {
          'id': 4,
          'name': 'Item 4',
          'price': undefined
        },
        {
          'id': 5,
          'name': 'Item 5',
          'price': '$5'
        }
      ],
      options: {
        undefinedText: 'N/A'
      }
    }
  }
}
</script>
