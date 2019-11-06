<template>
  <div>
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
          },
          {
            title: 'Item Price',
            field: 'operate',
            formatter: () => {
              return `
                <button class="like el-button" title="Like">
                <i class="el-icon-star-off"></i>
                </button>
                <button class="remove el-button" title="Remove">
                <i class="el-icon-delete"></i>
                </button>
              `
            },
            events: {
              'click .like': (e, value, row) => {
                this.$alert(`<pre>${JSON.stringify(row, null, 4)}</pre>`, 'You click like action', {
                  dangerouslyUseHTMLString: true
                })
              },
              'click .remove': (e, value, row) => {
                this.$refs.table.remove({
                  field: 'id',
                  values: [
                    row.id
                  ]
                })
              }
            }
          }
        ]
      ],
      options: {
        height: 460,
        url: 'json/data1.json'
      }
    }
  }
}
</script>
