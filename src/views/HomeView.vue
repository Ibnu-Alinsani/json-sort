<script setup lang="ts">

import Editor from "@/components/Editor.vue";
import {SortDirection} from "@/core/enums";
import {onBeforeMount, ref, type Ref, watch} from "vue";

import coreFunction from '@/core'
import { sample1 } from '@/core/samples'

const sortDirection: Ref<string> = ref(SortDirection.ASC)
const code: Ref<string> = ref('')

onBeforeMount(() => {
  code.value = JSON.stringify(sample1, null, 2)
})

watch(code, (val) => {
  console.log('code updated', val)
})

const on = {
  btnSortDirection: {
    click(): void {
      const result = coreFunction(JSON.parse(code.value), sortDirection.value)

      code.value = JSON.stringify(result, null, 2)
    }
  }
}

</script>

<template>
  <!-- Sort direction select -->
  <section class="editor-section">
    <div>
      <label for="sort">Direction</label>
      <select
        id="sort"
        name="sort"
        v-model="sortDirection"
      >
        <option
          v-for="direction in SortDirection"
          :value="direction"
        >
          {{ direction }}
        </option>
      </select>
      <button
        id="btn-sort"
        @click="on.btnSortDirection.click"
      >
        sort
      </button>
    </div>

    <!-- Editor component -->
    <Editor
      v-model="code"
      width="50rem"
      height="30rem"
    />
  </section>
</template>

<style scoped>

</style>
