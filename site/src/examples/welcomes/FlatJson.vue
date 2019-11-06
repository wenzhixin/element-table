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
            title: 'Name',
            field: 'github.name',
            sortable: true
          },
          {
            title: 'Stargazers',
            field: 'github.count.stargazers',
            sortable: true
          },
          {
            title: 'Forks',
            field: 'github.count.forks',
            sortable: true
          },
          {
            title: 'Description',
            field: 'github.description',
            sortable: true
          }
        ]
      ],
      options: {
        flat: true,
        search: true,
        url: 'json/data3.json'
      }
    }
  }
}
</script>
