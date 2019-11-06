<template>
  <div>
    <div id="toolbar">
      <el-button @click="prepend">
        prepend
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
    randomData () {
      const startId = ~~(Math.random() * 100)
      const rows = [
      ]

      for (let i = 0; i < 10; i++) {
        rows.push({
          id: startId + i,
          name: 'test' + (startId + i),
          price: '$' + (startId + i)
        })
      }
      return rows
    },
    prepend () {
      this.$refs.table.prepend(this.randomData())
    }
  }
}
</script>
