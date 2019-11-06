<template>
  <div>
    <el-form label-width="200px">
      <el-form-item label="paginationSuccessivelySize">
        <el-input-number
          v-model="options.paginationSuccessivelySize"
          :min="1"
        />
      </el-form-item>
      <el-form-item label="paginationPagesBySide">
        <el-input-number
          v-model="options.paginationPagesBySide"
          :min="0"
        />
      </el-form-item>
      <el-form-item label="paginationUseIntermediate">
        <el-switch v-model="options.paginationUseIntermediate" />
      </el-form-item>
    </el-form>

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
        pagination: true,
        sidePagination: 'server',
        paginationVAlign: 'both',
        paginationSuccessivelySize: 5,
        paginationPagesBySide: 1,
        paginationUseIntermediate: false,
        url: 'https://examples.wenzhixin.net.cn/examples/bootstrap_table/data'
      }
    }
  }
}
</script>
