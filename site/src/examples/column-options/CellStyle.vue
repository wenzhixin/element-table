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
            field: 'name',
            cellStyle (value, row, index) {
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
          },
          {
            title: 'Item Price',
            field: 'price'
          }
        ]
      ],
      options: {
        url: 'json/data1.json'
      }
    }
  }
}
</script>

<style>
.bg-blue {
  background: blue;
}

.bg-green {
  background: green;
}

.bg-orange {
  background: orange;
}

.bg-red {
  background: red;
}
</style>
