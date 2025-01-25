<template>
  <div
    class="w-full flex items-center justify-center top-0 left-0 fixed bg-black/50 h-screen z-50"
  >
    <div
      :class="startAnimation ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      class="p-5 transition-all duration-500 ease-in-out bg-white shadow rounded-lg"
    >
      <div class="w-full flex justify-end">
        <div @click="toggleModal">close</div>
      </div>
      <h1 class="animate-bounce-once">Success</h1>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["close"]);

const startAnimation = ref(false);

function toggleModal() {
  emit("close");
}

onMounted(() => {
  setTimeout(() => {
    startAnimation.value = true;
  }, 1);
});
</script>
