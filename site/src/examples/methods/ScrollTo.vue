<template>
  <div>
    <div id="toolbar">
      <el-button @click="scrollToTop">
        scrollTo Top
      </el-button>
      <el-button @click="scrollToIndex">
        Scroll to row index:
      </el-button>
      <el-input-number
        v-model="index"
        min="0"
      />
      <el-button @click="scrollToBottom">
        scrollTo Bottom
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
      index: 3,
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
        height: 460,
        url: 'json/data1.json'
      }
    }
  },
  methods: {
    scrollToTop () {
      this.$refs.table.scrollTo(0)
    },
    scrollToIndex () {
      this.$refs.table.scrollTo({
        unit: 'rows',
        value: this.index
      })
    },
    scrollToBottom () {
      this.$refs.table.scrollTo('bottom')
    }
  }
}
</script>
