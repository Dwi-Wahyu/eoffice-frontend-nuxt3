<template>
  <div>
    <label class="text-sm" :for="id">
      <input
        @change="$emit('update:modelValue', $event.target.value)"
        :id="id"
        type="radio"
        :name="name"
        :value="modelValue"
      />
      {{ label }}
    </label>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
});
</script>
