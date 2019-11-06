<template>
  <div>
    <div id="toolbar">
      <el-button @click="checkBy">
        checkBy
      </el-button>
      <el-button @click="uncheckBy">
        uncheckBy
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
    checkBy () {
      this.$refs.table.checkBy({
        field: 'id',
        values: [
          1, 2, 3
        ]
      })
    },
    uncheckBy () {
      this.$refs.table.uncheckBy({
        field: 'id',
        values: [
          1, 2, 3
        ]
      })
    }
  }
}
</script>
