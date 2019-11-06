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
          }
        ]
      ],
      options: {
        height: 460,
        detailView: true,
        detailViewIcon: false,
        detailViewByClick: true,
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
  }
}
</script>
