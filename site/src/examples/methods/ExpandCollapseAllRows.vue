<template>
  <div>
    <div id="toolbar">
      <el-button @click="expandAllRows">
        expandAllRows
      </el-button>
      <el-button @click="collapseAllRows">
        collapseAllRows
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
        detailView: true,
        detailFormatter (index, row) {
          const html = [
          ]
          for (const [
            key, value
          ] of Object.entries(row)) {
            html.push(`<p><b>${key}: </b>${value}</p>`)
          }
          return html.join('')
        },
        url: 'json/data1.json'
      }
    }
  },
  methods: {
    expandAllRows () {
      this.$refs.table.expandAllRows()
    },
    collapseAllRows () {
      this.$refs.table.collapseAllRows()
    }
  }
}
</script>
