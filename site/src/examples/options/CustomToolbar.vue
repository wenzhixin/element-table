<template>
  <div>
    <div class="toolbar">
      Offset:
      <el-input-number
        v-model="params.offset"
        :min="0"
        :max="99"
      />
      Limit:
      <el-input-number
        v-model="params.limit"
        :min="1"
        :max="99"
      />
      <el-input
        v-model="params.search"
        placeholder="Search"
      />
      <el-button @click="submit">
        OK
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
      params: {
        offset: 0,
        limit: 5,
        search: ''
      },
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
        toolbar: '.toolbar',
        height: 460,
        showRefresh: true,
        showToggle: true,
        showColumns: true,
        queryParams: () => {
          return this.params
        },
        responseHandler (res) {
          return res.rows
        },
        url: 'https://examples.wenzhixin.net.cn/examples/bootstrap_table/data'
      }
    }
  },
  methods: {
    submit () {
      this.$refs.table.refresh()
    }
  }
}
</script>

<style lang="scss" scoped>
.el-input,
.el-input-number {
  width: 120px;
}
</style>
