<template>
  <div>
    <div class="toolbar">
      <el-switch
        v-model="options.sortStable"
        active-text="Sort Stable"
      />
    </div>
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
            title: 'Item ID',
            field: 'id'
          },
          {
            title: 'Item Name',
            field: 'name',
            sortable: true
          },
          {
            title: 'Item Price',
            field: 'price'
          }
        ]
      ],
      data: [
        {
          id: 0,
          name: 'test0',
          price: '$0'
        },
        {
          id: 1,
          name: 'test0',
          price: '$1'
        },
        {
          id: 2,
          name: 'test0',
          price: '$2'
        },
        {
          id: 3,
          name: 'test0',
          price: '$3'
        },
        {
          id: 4,
          name: 'test0',
          price: '$4'
        },
        {
          id: 5,
          name: 'test0',
          price: '$5'
        },
        {
          id: 6,
          name: 'test0',
          price: '$6'
        },
        {
          id: 7,
          name: 'test0',
          price: '$7'
        },
        {
          id: 8,
          name: 'test0',
          price: '$8'
        },
        {
          id: 9,
          name: 'test0',
          price: '$9'
        },
        {
          id: 10,
          name: 'test0',
          price: '$10'
        },
        {
          id: 11,
          name: 'test0',
          price: '$11'
        },
        {
          id: 12,
          name: 'test0',
          price: '$12'
        },
        {
          id: 13,
          name: 'test0',
          price: '$13'
        },
        {
          id: 14,
          name: 'test0',
          price: '$14'
        },
        {
          id: 15,
          name: 'test0',
          price: '$15'
        },
        {
          id: 16,
          name: 'test0',
          price: '$16'
        },
        {
          id: 17,
          name: 'test0',
          price: '$17'
        },
        {
          id: 18,
          name: 'test0',
          price: '$18'
        },
        {
          id: 19,
          name: 'test0',
          price: '$19'
        },
        {
          id: 20,
          name: 'test0',
          price: '$20'
        }
      ],
      options: {
        toolbar: '.toolbar',
        height: 400,
        sortStable: true
      }
    }
  }
}
</script>
