<template>
  <div>
    <div class="toolbar">
      <div class="radio">
        <label>
          <input
            type="radio"
            checked
            name="theadClasses"
          >
          <code>undefined</code>
        </label>
      </div>
      <div class="radio">
        <label>
          <input
            type="radio"
            name="theadClasses"
          >
          <code>thead-light</code>
        </label>
      </div>
      <div class="radio">
        <label>
          <input
            type="radio"
            name="theadClasses"
          >
          <code>thead-dark</code>
        </label>
      </div>
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
      columns: [

      ],
      options: {
        showColumns: true
      }
    }
  }
}
</script>
