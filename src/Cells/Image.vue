<template>
  <div
    class=""
    v-bind="context.column.attrs"
  >
    <img
      :src="value"
      alt=""
    />
  </div>
</template>


<script>
export default {
  props: ["value", "context"],
};
</script>