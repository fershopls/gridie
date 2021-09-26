<template>
  <div>
    <component
      :is="table"
      v-bind="$attrs"
    >
      <component :is="tr">
        <component
          :is="th"
          v-for="(col, key) in cols"
          :key="key"
        >
          {{ getColumnLabel(col) }}
        </component>
      </component>
      <component
        :is="tr"
        v-for="(row, key) in rows"
        :key="key"
      >
        <component
          :is="td"
          v-for="(column, column_key) in cols"
          :key="column_key"
        >
          <component
            :is="getComponentType(column)"
            :value="
              getRowCellValue(row, column, column_key, getContext({ column, row }))
            "
            :context="getContext({ column, row })"
          />
        </component>
      </component>
    </component>
  </div>
</template>


<script>
import GridTable from "./Table/Table.vue";
import GridTr from "./Table/Tr.vue";
import GridTh from "./Table/Th.vue";
import GridTd from "./Table/Td.vue";

import CellDefault from "./Cells/Default.vue";

import getSetStringProp from "./getSetStringProp.js";

export default {
  props: {
    cols: null,
    rows: null,

    th: {
      default: GridTh,
    },

    td: {
      default: GridTd,
    },

    tr: {
      default: GridTr,
    },

    table: {
      default: GridTable,
    },
  },

  methods: {
    getComponentType(column) {
      if (column.hasOwnProperty("type")) {
        return column.type;
      }

      return CellDefault;
    },

    getColumnLabel(column) {
      return column.label;
    },

    getContext(localContext) {
      return {
        cols: this.cols,
        rows: this.rows,

        ...localContext,
      };
    },

    getRowCellValue(row, column, column_key, context) {
      return column_key;
      const key = column.name;

      return getSetStringProp(row, key);
    },
  },
};
</script>