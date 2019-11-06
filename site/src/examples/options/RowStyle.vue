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
            title: 'Item ID',
            field: 'id'
          },
          {
            title: '<i class="el-icon-star-on"></i> Item Name',
            field: 'name'
          },
          {
            title: '<i class="el-icon-money"></i> Item Price',
            field: 'price'
          }
        ]
      ],
      options: {
        url: 'json/data1.json',
        height: 400,
        rowStyle (row, index) {
          const classes = [
            'bg-blue',
            'bg-green',
            'bg-orange',
            'bg-red'
          ]

          if (index % 2 === 0 && index / 2 < classes.length) {
            return {
              classes: classes[index / 2],
              css: {
                color: 'white'
              }
            }
          }
          return {
            css: {
              color: 'blue'
            }
          }
        }
      }
    }
  }
}
</script>

<style>
.bg-blue {
  background: blue !important;
}

.bg-green {
  background: green !important;
}

.bg-orange {
  background: orange !important;
}

.bg-red {
  background: red !important;
}
</style>
