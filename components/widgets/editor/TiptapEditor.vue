<template>
  <div class="rounded-lg mt-3 shadow-inner border">
    <div v-if="editor" class="mb-4">
      <ButtonBar :editor="editor" />
    </div>
    <div class="p-4 pt-0">
      <editor-content :editor="editor" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import StarterKit from "@tiptap/starter-kit";

import { Editor, EditorContent } from "@tiptap/vue-3";
import ButtonBar from "./ButtonBar.vue";

import "./Editor.css";

// Extension
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Superscript from "@tiptap/extension-superscript";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import Blockquote from "@tiptap/extension-blockquote";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const editor = ref(null);

watch(
  () => props.modelValue,
  (value) => {
    if (!editor.value) return;

    const isSame = editor.value.getHTML() === value;

    if (isSame) return;

    editor.value.commands.setContent(value, false);
  }
);

onMounted(() => {
  editor.value = new Editor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      Image,
      Superscript,
      BulletList,
      ListItem,
      Underline,
      Blockquote,
    ],
    content: props.modelValue,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
      },
    },
    onUpdate: () => {
      emit("update:modelValue", editor.value.getHTML());
    },
  });
});

onBeforeUnmount(() => {
  if (editor.value) {
    editor.value.destroy();
  }
});
</script>
