<template>
  <div>
    <div id="toolbar">
      <el-button @click="updateCell">
        updateCell
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
        height: 428,
        url: 'json/data1.json'
      }
    }
  },
  methods: {
    updateCell () {
      this.$refs.table.updateCell({
        index: 1,
        field: 'name',
        value: 'Updated Name'
      })
    }
  }
}
</script>
