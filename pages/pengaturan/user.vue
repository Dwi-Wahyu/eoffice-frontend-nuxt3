<template>
  <div class="mt-20 w-full flex flex-col">
    <WidgetsCardBaseCard
      :with-pagination="true"
      :pages="['Daftar Pengguna', 'Daftar Pejabat', 'Manajemen Role']"
      :page-selected="pageSelected"
      @update:page-selected="handleChangePage"
    >
      <div v-if="pageSelected == 0">
        <h1>Daftar Pengguna</h1>
      </div>
      <div v-if="pageSelected == 1">
        <h1>Daftar Pejabat</h1>
      </div>
      <div v-if="pageSelected == 2">
        <h1>Manajemen Role</h1>
      </div>
    </WidgetsCardBaseCard>
  </div>
</template>

<script setup>
const pageSelected = ref(0);

function handleChangePage(value) {
  pageSelected.value = value;
}

definePageMeta({
  layout: "default",
  middleware: "auth",
});
</script>
