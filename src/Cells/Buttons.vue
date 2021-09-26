<template>
  <div v-bind="context.column.attrs">
    <template
      v-for="(button, key) in context.column.buttons"
      :key="key"
    >
      <button
        :type="button.type ? button.type : 'button'"
        @click="button.clicked(context)"
        class="px-2 py-1 rounded hover:scale-105 transform transition-transform inline-block"
        :class="getButtonStyle(button)"
      >
        {{ getButtonLabel(button) }}
      </button>
    </template>
  </div>
</template>


<script>
export default {
  props: ["value", "context"],

  methods: {
    getButtonStyle(button) {
      if (button.class) {
        return button.class;
      }

      return "bg-gray-900 text-white";
    },

    getButtonLabel(button) {
      if (typeof button.label === "function") {
        return button.label(this.context);
      }

      return button.label;
    },
  },
};
</script>