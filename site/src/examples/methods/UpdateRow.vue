<template>
  <div>
    <div id="toolbar">
      <el-button @click="updateRow">
        updateRow
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
    updateRow () {
      const randomId = 100 + ~~(Math.random() * 100)
      this.$refs.table.updateRow({
        index: 1,
        row: {
          id: randomId,
          name: 'Item ' + randomId,
          price: '$' + randomId
        }
      })
    }
  }
}
</script>
