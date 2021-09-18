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
      {
        name: "image",
        label: "Imagen",
        type: cells.Image,
        attrs: {
          class: "mx-auto",
          style: "max-width: 100px;",
        },
      },
      ["name", "Nombre"],
      ["location.name", "Origen"],
      ["status", "Estado"],
      ["gender", "Genero"],
      ["species", "Especie"],
      ["type", "Tipo"],
    ];

    return { cols };
  },
};
</script>
