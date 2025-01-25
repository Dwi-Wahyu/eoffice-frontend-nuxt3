<template>
  <div
    class="w-full flex items-center flex-col justify-center top-0 left-0 fixed bg-black/50 min-h-screen z-50"
  >
    <div
      class="min-w-96 transition-all duration-300 ease-in-out"
      :class="startAnimation ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    >
      <div
        class="bg-white border-b rounded-t-lg px-4 py-3 flex justify-between items-center"
      >
        <h1 class="font-semibold text-lg">{{ title }}</h1>

        <button @click="toggleModal">
          <IconsClose />
        </button>
      </div>
      <div class="p-4 bg-white shadow">
        <div class="w-full flex">
          <slot />
        </div>
      </div>
      <div
        class="flex bg-white justify-end rounded-b-lg px-4 py-3 gap-3 border-t"
      >
        <WidgetsButtonBaseButton
          @click="toggleModal"
          variant="outline"
          class="rounded-full"
        >
          Kembali
        </WidgetsButtonBaseButton>
        <WidgetsButtonBaseButton class="rounded-full">
          Submit
        </WidgetsButtonBaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["close"]);

defineProps({
  title: {
    type: String,
    default: "Modal Box",
  },
});

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
