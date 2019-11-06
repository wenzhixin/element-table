<template>
  <div>
    <div id="toolbar">
      <el-button @click="getSelections">
        getSelections
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
            field: 'state',
            checkbox: true
          },
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
        search: true,
        clickToSelect: true,
        url: 'json/data1.json'
      }
    }
  },
  methods: {
    getSelections () {
      this.$alert(this.$refs.table.getSelections(), 'getSelections')
    }
  }
}
</script>
