<template>
  <div>
    <div id="toolbar">
      <el-button @click="destroy">
        destroy
      </el-button>
      <el-button @click="build">
        build
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
        url: 'json/data1.json'
      }
    }
  },
  methods: {
    destroy () {
      this.$refs.table.destroy()
    },
    build () {
      this.$refs.table._hasInit = false
      this.$refs.table._initTable()
    }
  }
}
</script>
