# Component

<div id="codefund" class="tl"></div>
<script src="https://codefund.io/properties/291/funder.js"></script>

## Usage Example

```vue
<element-table
  ref="table"
  :columns="columns"
  :data="data"
  :options="options"
  @on-post-body="onPostBody"
/>
```

## Props

### columns

- **Type:** `Object`

- **Detail:**

  The [column options](https://bootstrap-table.com/docs/api/column-options/) of Bootstrap Table. This prop is required.

- **Default:** `undefined`

### data

- **Type:** `Array | Object`

- **Detail:**

  The data to be loaded.

- **Default:** `undefined`

### options

- **Type:** `Object`

- **Detail:**

  The [table options](https://bootstrap-table.com/docs/api/table-options/) of Bootstrap Table.

- **Default:** `{}`

## Events

The calling method syntax: `@on-event="onEvent"`.

All events (without `onAll`) are defined in [Events API](https://bootstrap-table.com/docs/api/events/).

**Note:** you need to convert event name to lowercase + hyphen format, for example: `onClickRow` should be `on-click-row`.

## Methods

The calling method syntax: `this.$refs.table.methodName(parameter)`.

Example: `this.$refs.table.getOptions()`.

All methods are defined in [Methods API](https://bootstrap-table.com/docs/api/methods/).
