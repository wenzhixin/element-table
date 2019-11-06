<template>
  <div>
    <div class="toolbar">
      <el-switch
        v-model="options.escape"
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
          id: 1,
          name: '<a href="#">item 1</a>',
          price: '$1'
        }, {
          id: 2,
          name: '<a href="#">item 2</a>',
          price: '$2 '
        }
      ],
      options: {
        toolbar: '.toolbar',
        escape: true,
        height: 460
      }
    }
  }
}
</script>
