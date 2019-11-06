<template>
  <div>
    <div class="toolbar">
      <el-switch
        v-model="options.maintainMetaData"
        active-text="Maintain Meta Data"
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
        toolbar: '.toolbar',
        height: 460,
        pagination: true,
        search: true,
        maintainMetaData: true,
        clickToSelect: true,
        url: 'json/data1.json'
      }
    }
  }
}
</script>
