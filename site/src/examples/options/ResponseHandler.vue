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
        {
          field: 'date',
          title: 'Date Stamp',
          sortable: true
        }, {
          field: 'm_type',
          title: 'Type',
          sortable: true
        }, {
          field: 'msdn',
          title: 'MSDN',
          sortable: true
        }, {
          field: 'file_name',
          title: 'File Name',
          sortable: true
        }, {
          field: 'message',
          title: 'Message',
          sortable: true
        }
      ],
      options: {
        url: 'json/353.json',
        responseHandler (res) {
          return res.messages
        }
      }
    }
  }
}
</script>
