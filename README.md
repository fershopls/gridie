# Installation

```shell
npm install @ferchoposting/gridie
```

# Usage

```js
import { Gridie, cells } from "@ferchoposting/gridie";
```

# Rick and Morty API

## Copy paste example

Need tailwind.css

```html
<template>
  <div class="text-center text-4xl mt-8" v-if="loading">
    <i class="fas fa-spinner animate-spin"></i>
  </div>
  <div class="max-w-xl mx-auto my-6" v-else-if="model.info">
    <div class="flex items-center gap-5 justify-center">
      <div
        class="border p-2 cursor-pointer hover:bg-gray-100 rounded uppercase font-bold text-sm tracking-wider flex gap-2 items-center"
        v-if="model.info.prev"
        @click="fetchData(model.info.prev)"
      >
        <i class="fas fa-angle-left"></i>
        Prev
      </div>
      <div
        class="border p-2 cursor-pointer hover:bg-gray-100 rounded uppercase font-bold text-sm tracking-wider flex gap-2 items-center"
        v-if="model.info.next"
        @click="fetchData(model.info.next)"
      >
        Next
        <i class="fas fa-angle-right"></i>
      </div>
    </div>

    <div class="mt-4 shadow">
      <gridie class="w-full overflow-x-auto" :cols="cols" :rows="rows" />
    </div>
  </div>
</template>

<script>
  import Gridie from "./Gridie.vue";
  import CellImage from "./Cells/Image";
  import CellButtons from "./Cells/Buttons";

  import { reactive, ref } from "vue";

  export default {
    props: [],

    components: {
      Gridie,
    },

    data() {
      return {
        model: {},
        rows: [],
        loading: false,
      };
    },

    mounted() {
      const url = "https://rickandmortyapi.com/api/character";
      this.fetchData(url);
    },

    methods: {
      fetchData(url) {
        if (!url) return;

        this.loading = true;

        return fetch(url)
          .then((res) => res.json())
          .then((res) => {
            this.model = res;
            this.rows = res.results;
            this.loading = false;
          });
      },
    },

    setup() {
      const cols = [
        { name: "image", label: "Imagen", type: CellImage },

        ["name", "Nombre"],

        {
          name: "origin.url",
          label: "Origen",
          format: (value, context) =>
            `<a href="${value}" target="_blank" class="underline text-blue-500">${context.row.origin.name}</a>`,
          html: true,
        },

        {
          label: "",
          type: CellButtons,
          buttons: [
            {
              label: "Inspeccionar",
              clicked({ row }) {
                alert(row.name);
              },
            },
            {
              label: "Delete",
              class: "bg-red-600 text-white",
              clicked({ row }) {
                alert("Delete! " + row.name);
              },
            },
          ],
        },
      ];

      return { cols };
    },
  };
</script>
```
