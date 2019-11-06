<template>
  <div>
    <div>
      <button
        id="button"
        class="btn btn-secondary"
      >
        Show Row
      </button>
      <button
        id="button2"
        class="btn btn-secondary"
      >
        Hide Row
      </button>
    </div>

    <div class="toolbar form-inline">
      <span>Fixed Number: </span>
      <input
        id="fixedNumber"
        class="form-control"
        type="number"
        value="2"
        min="1"
        max="5"
      >
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
        height: 400,
        showColumns: true
      }
    }
  }
}
</script>
