<template>
  <div>
    <div class="toolbar">
      <el-button>
        Toolbar button example
      </el-button>
    </div>

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
        toolbar: '.toolbar',
        toolbarAlign: 'right',
        url: 'json/data1.json'
      }
    }
  }
}
</script>
