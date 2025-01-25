<template>
  <div class="grid-cols-3 items-center relative" :class="inline ? 'grid' : ''">
    <label
      v-if="label"
      :for="id"
      class="block text-sm font-semibold"
      :class="inline ? '' : 'mb-2'"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
      class="block w-full px-3 py-2 border col-span-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
      :class="[addClass, error ? 'border-danger' : 'border-gray-300']"
    />

    <div class="absolute right-0 top-0 pt-[0.6rem] pr-3" v-if="withIcon">
      <component :is="icon"></component>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  error: {
    type: Boolean,
    default: false,
  },
  addClass: {
    type: [String, Array],
    default: "",
  },
  inline: {
    type: Boolean,
    default: false,
  },
  withIcon: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: [Object, Function],
    default: null,
  },
});
</script>
