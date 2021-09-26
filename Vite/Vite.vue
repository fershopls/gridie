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
import { Gridie, cells, c } from "../src/main.js";

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
      c("id", "ID"),

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
      {
        type: cells.Buttons,
        attrs: {
          class: "flex items-center gap-2",
        },
        buttons: [
          {
            label({ row }) {
              return `Ver ${row.name}`;
            },
            clicked({ row }) {
              alert(row.name);
            },
          },
          {
            label({ row }) {
              return `Eliminar`;
            },
            class: "bg-red-600 text-white",
            clicked({ row }) {
              alert(row.name);
            },
          },
        ],
      },
    ];

    return { cols };
  },
};
</script>
