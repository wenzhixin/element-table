# Getting Started

Looking to quickly add Element Table to your <a href="https://element.eleme.io/" target="_blank">Element</a> project?

<div id="codefund" class="tl"></div>
<script src="https://codefund.io/properties/291/funder.js"></script>

## Installation

Install and manage Element Table using [npm](https://www.npmjs.com/package/element-table).

```bash
npm install element-ui-table
# or
yarn add element-ui-table
```

## Import

In `main.js` or `plugins/table.js`:

```javascript
import Vue from 'vue'
import ElementTable from 'element-ui-table'
import 'element-ui-table/dist/element-table.css'

Vue.use(ElementTable)
```

The above imports Element Table entirely. Note that CSS file needs to be imported separately.

## Usage

```vue
<template>
  <element-table
    :columns="columns"
    :data="data"
    :options="options"
  />
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          title: 'Item ID',
          field: 'id'
        },
        {
          field: 'name',
          title: 'Item Name'
        },
        {
          field: 'price',
          title: 'Item Price'
        }
      ],
      data: [
        {
          id: 1,
          name: 'Item 1',
          price: '$1'
        }
      ],
      options: {
        search: true,
        showColumns: true
      }
    }
  }
}
</script>
```
