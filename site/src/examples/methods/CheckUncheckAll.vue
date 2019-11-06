<template>
  <div>
    <div id="toolbar">
      <el-button @click="checkAll">
        checkAll
      </el-button>
      <el-button @click="uncheckAll">
        uncheckAll
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
        url: 'json/data1.json'
      }
    }
  },
  methods: {
    checkAll () {
      this.$refs.table.checkAll()
    },
    uncheckAll () {
      this.$refs.table.uncheckAll()
    }
  }
}
</script>
