<template>
  <div class="mt-12 px-4">
    <gridie
      class="w-full"
      :rows="rows"
      :cols="cols"
    />
  </div>
</template>

<script>
import { Gridie, cells } from "../src/main.js";

export default {
  components: {
    Gridie,
  },

  mounted() {
    const url = "https://rickandmortyapi.com/api/character";

    fetch(url)
      .then((x) => x.json())
      .then((res) => {
        this.rows = res.results;
      });
  },

  data() {
    return {
      rows: [],
    };
  },

  setup() {
    const cols = [
      ["id", "id"],
      ["name", "Nombre"],
    ];

    return { cols };
  },
};
</script>
