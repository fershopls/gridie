<template>
  <div class="max-w-lg mt-12 mx-auto border border-gray-200 rounded p-6">
    <gridie
      :rows="rows"
      :cells="cells"
    />
  </div>
</template>

<script>
import { Gridie, cells } from "../src/main.js";

export default {
  components: {
    Gridie,
  },

  setup() {
    const rows = ["id", "Webos"];

    const cells = [[1, 2]];

    return { rows, cells };
  },
};
</script>
