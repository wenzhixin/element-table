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
          'name': 'Item 0',
          'price': '$0'
        },
        {
          'id': 1,
          'name': 'Item 1',
          'price': '$1'
        },
        {
          'id': 2,
          'name': 'Item 2',
          'price': '$2'
        },
        {
          'id': 3,
          'name': 'Item 3',
          'price': '$3'
        },
        {
          'id': 4,
          'name': 'Item 4',
          'price': '$4'
        },
        {
          'id': 5,
          'name': 'Item 5',
          'price': '$5'
        }
      ],
      options: {
      }
    }
  }
}
</script>
