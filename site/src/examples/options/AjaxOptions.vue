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
        ajaxOptions: {
          beforeSend (xhr) {
            xhr.setRequestHeader('Custom-Auth-Token', 'custom-auth-token')
          }
        },
        url: 'json/data1.json'
      }
    }
  }
}
</script>
