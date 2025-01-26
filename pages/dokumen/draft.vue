<template>
  <div class="mt-20 flex flex-col mb-10 gap-5 w-full">
    <WidgetsCardBaseCard add-class="flex flex-col">
      <WidgetsEditorQuillEditor @editor-content="handleEditorContent" />
    </WidgetsCardBaseCard>

    <WidgetsCardBaseCard>
      <div v-if="editorContent">
        <h3>Editor Content:</h3>
        <div v-html="editorContent"></div>
        {{ editorContent }}
      </div>
    </WidgetsCardBaseCard>
  </div>
</template>

<script setup>
import "~/components/widgets/editor/Quill.css";

definePageMeta({
  layout: "default",
  middleware: "auth",
});

const editorContent = ref("");

const handleEditorContent = (content) => {
  editorContent.value = content;
};
</script>
