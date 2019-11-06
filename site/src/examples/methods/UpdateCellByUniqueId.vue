<template>
  <div>
    <div id="toolbar">
      <el-button @click="updateCellByUniqueId">
        updateCellByUniqueId
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
        uniqueId: 'id',
        url: 'json/data1.json'
      }
    }
  },
  methods: {
    updateCellByUniqueId () {
      this.$refs.table.updateCellByUniqueId({
        id: 3,
        field: 'name',
        value: 'Updated Name'
      })
    }
  }
}
</script>
