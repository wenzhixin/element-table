<template>
  <div>
    <div id="toolbar">
      <el-button @click="mergeCells">
        mergeCells
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
        toolbar: '#toolbar',
        height: 400,
        url: 'json/data1.json'
      }
    }
  },
  methods: {
    mergeCells () {
      this.$refs.table.mergeCells({
        index: 1,
        field: 'name',
        colspan: 2,
        rowspan: 3
      })
    }
  }
}
</script>
