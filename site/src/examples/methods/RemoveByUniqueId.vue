<template>
  <div>
    <div id="toolbar">
      <el-button @click="removeByUniqueId">
        removeByUniqueId
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
        height: 460,
        uniqueId: 'id',
        url: 'json/data1.json'
      }
    }
  },
  methods: {
    removeByUniqueId () {
      this.$refs.table.removeByUniqueId(1)
    }
  }
}
</script>
