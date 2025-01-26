<template>
  <div>
    <div id="editor"></div>
  </div>
</template>

<script setup>
import "quill/dist/quill.snow.css";
import "./Quill.css";

const emit = defineEmits(["editor-content"]); // Definisikan event
const quillInstance = ref(null);
const editorContent = ref("");

onMounted(async () => {
  if (process.client) {
    const Quill = (await import("quill")).default;
    quillInstance.value = new Quill("#editor", {
      theme: "snow",
      placeholder: "Ketik Isi Surat",
      modules: {
        toolbar: {
          container: [
            "bold",
            "italic",
            "underline", // Format teks dasar
            "strike",
            "blockquote",
            { header: 1 },
            { header: 2 },
            { list: "ordered" },
            { list: "bullet" }, // Daftar (ordered dan bullet)
            { script: "sub" },
            { script: "super" }, // Superscript dan subscript
            { indent: "-1" },
            { indent: "+1" }, // Indentasi
            { direction: "rtl" }, // Arah teks (right-to-left)
            { color: [] },
            { background: [] }, // Warna teks dan latar belakang
            { font: [] }, // Font family
            { align: "" },
            { align: "center" },
            { align: "right" },
            { align: "justify" }, // Alignment
            "link",
            "image",
            "video", // Media (link, gambar, video)
            "clean", // Bersihkan formatting
          ],
        },
      },
    });

    // Kirim perubahan konten ke parent setiap kali ada perubahan
    quillInstance.value.on("text-change", () => {
      const content = quillInstance.value.root.innerHTML; // Ambil konten HTML
      editorContent.value = content; // Simpan konten di state lokal
      emit("editor-content", content); // Kirim konten ke parent
    });
  }
});
</script>
