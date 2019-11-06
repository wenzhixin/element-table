<template>
  <div>
    <div class="toolbar">
      <el-switch
        v-model="options.rememberOrder"
        active-text="Remember Order"
      />
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
            field: 'id',
            sortable: true
          },
          {
            title: 'Item Name',
            field: 'name',
            sortable: true
          },
          {
            title: 'Item Price',
            field: 'price',
            sortable: true
          }
        ]
      ],
      options: {
        toolbar: '.toolbar',
        height: 460,
        rememberOrder: true,
        url: 'json/data1.json'
      }
    }
  }
}
</script>
