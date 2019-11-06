<template>
  <div>
    <div id="toolbar">
      <el-button @click="expandRow">
        expandRow
      </el-button>
      <el-button @click="collapseRow">
        collapseRow
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
          for (const key in row) {
            if (row[key]) {
              html.push('<p><b>' + key + ':</b> ' + row[key] + '</p>')
            }
          }
          return html.join('')
        },
        url: 'json/data1.json'
      }
    }
  },
  methods: {
    expandRow () {
      this.$refs.table.expandRow(1)
    },
    collapseRow () {
      this.$refs.table.collapseRow(1)
    }
  }
}
</script>
