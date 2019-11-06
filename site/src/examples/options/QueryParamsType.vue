<template>
  <div>
    <div class="toolbar">
      <el-radio
        v-model="options.queryParamsType"
        label="limit"
      >
        <code>limit</code>
      </el-radio>
      <el-radio
        v-model="options.queryParamsType"
        label=""
      >
        <code>''</code>
      </el-radio>
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
        search: true,
        pagination: true,
        sidePagination: 'server',
        queryParamsType: 'limit',
        queryParams: params => {
          this.$alert(`<pre>${JSON.stringify(params, null, 4)}</pre>`, 'queryParams', {
            dangerouslyUseHTMLString: true
          })
          return params
        },
        url: 'https://examples.wenzhixin.net.cn/examples/bootstrap_table/data'
      }
    }
  }
}
</script>
