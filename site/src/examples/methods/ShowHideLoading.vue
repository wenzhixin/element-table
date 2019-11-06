<template>
  <div>
    <div id="toolbar">
      <el-button @click="showLoading">
        showLoading
      </el-button>
      <el-button @click="hideLoading">
        hideLoading
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
    showLoading () {
      this.$refs.table.showLoading()
    },
    hideLoading () {
      this.$refs.table.hideLoading()
    }
  }
}
</script>
