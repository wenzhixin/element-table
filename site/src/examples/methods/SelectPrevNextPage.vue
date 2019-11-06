<template>
  <div>
    <div
      id="toolbar"
      class="form-inline"
    >
      <el-input-number
        v-model="page"
        :min="1"
        :max="3"
      />
      <el-button @click="selectPage">
        selectPage
      </el-button>
      <el-button @click="prevPage">
        prevPage
      </el-button>
      <el-button @click="nextPage">
        nextPage
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
      page: 2,
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
        height: 420,
        pagination: true,
        url: 'json/data1.json'
      }
    }
  },
  methods: {
    selectPage () {
      this.$refs.table.selectPage(this.page)
    },
    prevPage () {
      this.$refs.table.prevPage()
    },
    nextPage () {
      this.$refs.table.nextPage()
    }
  }
}
</script>
