<script setup lang="ts">
import { VueMonacoEditor } from '@guolao/vue-monaco-editor'
import { shallowRef } from 'vue'

const {
  theme = 'vs-dark'
} = defineProps< {
  width: string | number
  height: string | number
  options?: Record<string, any>
  language?: string
  theme?: string
}>()

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
}

const editorRef = shallowRef()

const code = defineModel()

const on = {
  monacoEditor: {
    mount(editor) {
      editorRef.value = editor
    }
  }
}

// your action
function formatCode() {
  editorRef.value?.getAction('editor.action.formatDocument').run()
}
</script>

<template>
  <vue-monaco-editor
    v-model:value="code"
    v-bind="$attrs"
    :class-name="$attrs.class"
    :theme="theme"
    :options="{
      ...MONACO_EDITOR_OPTIONS,
      ...options
    }"
    default-language="json"
    :language="language"
    :width="width"
    :height="height"
    @mount="on.monacoEditor.mount"
  />
</template>

<style scoped>

</style>
