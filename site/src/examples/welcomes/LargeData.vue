<template>
  <div>
    <div class="toolbar">
      <el-button @click="load">
        Load 10000 Rows
      </el-button>
      <el-button @click="append">
        Append 10000 Rows
      </el-button>
      Total rows: {{ total }}
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
      total: 200,
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
        height: 400,
        virtualScroll: true,
        showColumns: true
      }
    }
  },
  mounted () {
    this.$refs.table.load(this.getData(20))
  },
  methods: {
    getData (number, isAppend) {
      if (!isAppend) {
        this.total = 0
      }
      const data = [

      ]
      for (let i = this.total; i < this.total + number; i++) {
        data.push({
          'id': i,
          'name': 'Item ' + i,
          'price': '$' + i
        })
      }

      if (isAppend) {
        this.total += number
      } else {
        this.total = number
      }

      return data
    },
    load () {
      this.$refs.table.load(this.getData(10000))
    },
    append () {
      this.$refs.table.append(this.getData(10000, true))
    }
  }
}
</script>
