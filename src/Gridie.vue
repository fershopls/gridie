<template>
  <div>
    <grid-table v-bind="$attrs">
      <tr>
        <grid-th
          v-for="(col, key) in cols"
          :key="key"
        >
          {{ getColumnLabel(col) }}
        </grid-th>
      </tr>
      <tr
        v-for="(row, key) in rows"
        :key="key"
      >
        <grid-td
          v-for="(col, col_key) in cols"
          :key="col_key"
        >
          <component
            :is="getComponentType(col)"
            :value="
              getRowCellValue(row, col, col_key, getContext({ col, row }))
            "
            :context="getContext({ col, row })"
          />
        </grid-td>
      </tr>
    </grid-table>
  </div>
</template>


<script>
import GridTable from "./Table/Table.vue";
import GridTh from "./Table/Th.vue";
import GridTd from "./Table/Td.vue";

import CellDefault from "./Cells/Default.vue";

import getSetStringProp from "./getSetStringProp.js";

export default {
  props: ["cols", "rows"],

  components: {
    GridTable,
    GridTh,
    GridTd,
  },

  methods: {
    getComponentType(col) {
      if (typeof col.type === "object") {
        return col.type;
      }
      return CellDefault;
    },

    getColumnLabel(col) {
      if (Array.isArray(col)) {
        return col[1];
      }

      if (typeof col === "object") {
        return col.label;
      }

      return col;
    },

    getContext(localContext) {
      return {
        cols: this.cols,
        rows: this.rows,

        ...localContext,
      };
    },

    getRowCellValue(row, col, col_key, context) {
      let value = null;

      if (Array.isArray(col)) {
        value = getSetStringProp(row, col[0]);
      } else if (typeof col === "object" && typeof col.name === "undefined") {
        value = Object.values(row)[col_key];
      } else {
        value = getSetStringProp(row, col.name);
      }

      if (col.hasOwnProperty("format")) {
        value = col.format(value, context);
      }

      return value;
    },
  },
};
</script>