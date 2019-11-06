<template>
  <div>
    <element-table
      ref="table"
      :columns="columns"
      :data="data"
      :options="options"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [

      ],
      data: [

      ],
      options: {
        height: 400,
        showColumns: true
      }
    }
  },
  mounted () {
    this.buildTable(50, 50)
  },
  methods: {
    buildTable (cells, rows) {
      const columns = [

      ]
      const data = [

      ]

      for (let i = 0; i < cells; i++) {
        columns.push({
          field: 'field' + i,
          title: 'Cell' + i,
          sortable: true
        })
      }
      for (let i = 0; i < rows; i++) {
        const row = {

        }
        for (let j = 0; j < cells; j++) {
          row['field' + j] = 'Row-' + i + '-' + j
        }
        data.push(row)
      }

      this.columns = columns
      this.data = data
    }
  }
}
</script>
