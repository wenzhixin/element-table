<template>
  <div>
    <div id="toolbar">
      <el-button @click="updateByUniqueId">
        updateByUniqueId
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
    updateByUniqueId () {
      const randomId = 100 + ~~(Math.random() * 100)
      this.$refs.table.updateByUniqueId({
        id: 3,
        row: {
          name: 'Item ' + randomId,
          price: '$' + randomId
        }
      })
    }
  }
}
</script>
