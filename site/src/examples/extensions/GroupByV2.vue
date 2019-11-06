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
            title: 'Shape',
            field: 'shape'
          },
          {
            title: 'Color',
            field: 'color'
          },
          {
            title: 'Area',
            field: 'area'
          }
        ]
      ],
      options: {
        groupBy: true,
        groupByField: 'shape',
        url: 'json/data6.json'
      }
    }
  }
}
</script>
