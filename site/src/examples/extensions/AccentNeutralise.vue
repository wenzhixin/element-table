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
            field: 'name'
          },
          {
            title: 'Stars',
            field: 'stargazers_count'
          },
          {
            title: 'Forks',
            field: 'forks_count'
          },
          {
            title: 'Description',
            field: 'description'
          }
        ]
      ],
      options: {
        search: true,
        searchAccentNeutralise: true
      }
    }
  }
}
</script>
