<template>
  <div>
    <div id="toolbar">
      <el-button @click="updateFormatText">
        updateFormatText
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
        height: 428,
        search: true,
        url: 'json/data1.json'
      }
    }
  },
  methods: {
    updateFormatText () {
      this.$refs.table.updateFormatText('formatSearch', 'Enter keywords...')
    }
  }
}
</script>
