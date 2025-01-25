<template>
  <!-- prettier-ignore -->
  <div class="grid grid-cols-3 items-start" :class="[{ 'grid': inline }, addClass]">
    <label
      v-if="label"
      :for="id"
      class="block text-sm font-semibold"
      :class="inline ? '' : 'mb-2'"
    >
      {{ label }}
    </label>
    <textarea
      :id="id"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="[height, { 'border-red-600': error, 'border-gray-200': !error }]"
      class="text-left w-full focus:outline-none col-span-2 border p-3 sm:text-sm rounded-lg"
    ></textarea>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
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
  error: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "",
  },
  height: {
    type: String,
    default: "h-72",
  },
  addClass: {
    type: String,
    default: "",
  },
  inline: {
    type: Boolean,
    default: false,
  },
});
</script>
