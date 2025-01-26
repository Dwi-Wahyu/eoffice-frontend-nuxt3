<template>
  <div class="mt-20 flex flex-col mb-10 gap-5 w-full">
    <WidgetsCardBaseCard add-class="flex flex-col">
      <WidgetsButtonBaseButton add-class="rounded-lg" @click="toggleModal">
        Toggle Modal
      </WidgetsButtonBaseButton>
    </WidgetsCardBaseCard>

    <WidgetsPopupModal v-if="showModal" @close="toggleModal">
      <h1>halo</h1>
    </WidgetsPopupModal>
  </div>
</template>

<script setup>
const showModal = ref(false);

function toggleModal() {
  showModal.value = !showModal.value;
}

definePageMeta({
  layout: "default",
  middleware: "auth",
});
</script>
