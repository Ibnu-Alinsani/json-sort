<script setup lang="ts">
import { VueMonacoEditor } from '@guolao/vue-monaco-editor'
import { ref, shallowRef } from 'vue'

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

const code = ref('{\n' +
  '  "id": 12345,\n' +
  '  "name": "John Doe",\n' +
  '  "isActive": true,\n' +
  '  "profile": {\n' +
  '    "age": 30,\n' +
  '    "address": {\n' +
  '      "street": "123 Main St",\n' +
  '      "city": "Springfield",\n' +
  '      "coordinates": {\n' +
  '        "lat": 37.7749,\n' +
  '        "long": -122.4194\n' +
  '      }\n' +
  '    },\n' +
  '    "preferences": [\n' +
  '      {\n' +
  '        "type": "notification",\n' +
  '        "enabled": true,\n' +
  '        "methods": ["email", "sms"]\n' +
  '      },\n' +
  '      {\n' +
  '        "type": "privacy",\n' +
  '        "settings": {\n' +
  '          "shareLocation": false,\n' +
  '          "shareActivity": true\n' +
  '        }\n' +
  '      }\n' +
  '    ]\n' +
  '  },\n' +
  '  "history": [\n' +
  '    {\n' +
  '      "action": "login",\n' +
  '      "timestamp": "2025-01-01T08:30:00Z",\n' +
  '      "metadata": {\n' +
  '        "ip": "192.168.1.1",\n' +
  '        "device": "mobile"\n' +
  '      }\n' +
  '    },\n' +
  '    {\n' +
  '      "action": "purchase",\n' +
  '      "timestamp": "2025-01-02T12:45:00Z",\n' +
  '      "metadata": {\n' +
  '        "items": [\n' +
  '          { "id": "A001", "name": "Laptop", "price": 1200.5 },\n' +
  '          { "id": "A002", "name": "Mouse", "price": 25.75 }\n' +
  '        ],\n' +
  '        "total": 1226.25\n' +
  '      }\n' +
  '    }\n' +
  '  ],\n' +
  '  "tags": ["premium", "frequent-user"],\n' +
  '  "notifications": null\n' +
  '}')
const editorRef = shallowRef()
const handleMount = editor => (editorRef.value = editor)

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
    @mount="handleMount"
  />
</template>

<style scoped>

</style>
