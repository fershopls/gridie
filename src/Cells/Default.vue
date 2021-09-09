<template>
  <div
    v-if="context.col.html"
    v-html="value"
  ></div>
  <div v-else>{{ value }}</div>
</template>


<script>
export default {
  props: ["value", "context"],
};
</script>