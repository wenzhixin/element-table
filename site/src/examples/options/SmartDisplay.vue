<template>
  <div>
    <div class="toolbar">
      <el-switch
        v-model="options.smartDisplay"
        active-text="Smart Display"
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
        pagination: true,
        toolbar: '.toolbar',
        smartDisplay: true,
        url: 'json/data1.json'
      }
    }
  }
}
</script>
