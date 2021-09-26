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
      c("image", "Imagen", cells.Image).attrs({
        class: "mx-auto",
      }),

      c("name", "Nombre"),
      c("location.name", "Origen"),
      c("status", "Estado"),
      c("gender", "Género"),
      c("species", "Especie"),
      c("type", "Tipo"),

      c()
        .type(cells.Buttons)
        .class("flex items-center gap-2")
        .extend({
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
        }),
    ];

    return { cols };
  },
};
</script>
