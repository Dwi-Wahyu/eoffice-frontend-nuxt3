<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    :class="`group-hover:text-[${color}]`"
  >
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M7 5v5a5 5 0 0 0 10 0V5M5 19h14"
    />
  </svg>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: "#000",
  },
});
</script>
