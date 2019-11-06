<template>
  <div>
    <div id="toolbar">
      <el-button @click="large">
        Large and resetView
      </el-button>
      <el-button @click="small">
        Small and resetView
      </el-button>
    </div>
    <div
      :style="{width: width + 'px'}"
      class="div-table"
    >
      <element-table
        ref="table"
        :columns="columns"
        :options="options"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      width: 600,
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
    large () {
      this.width += 50
      this.$refs.table.resetView()
    },
    small () {
      this.width -= 50
      this.$refs.table.resetView()
    }
  }
}
</script>
