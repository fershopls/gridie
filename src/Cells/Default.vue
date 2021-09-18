<template>
  <div
    v-if="context.col.html"
    v-html="value"
    v-bind="context.col.attrs"
  ></div>
  <div
    v-else
    v-bind="context.col.attrs"
  >{{ value }}</div>
</template>


<script>
export default {
  props: ["value", "context"],
};
</script>