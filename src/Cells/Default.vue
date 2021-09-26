<template>
  <div
    v-if="context.column.html"
    v-html="value"
    v-bind="context.column.attrs"
  ></div>
  <div
    v-else
    v-bind="context.column.attrs"
  >{{ value }}</div>
</template>


<script>
export default {
  props: ["value", "context"],
};
</script>