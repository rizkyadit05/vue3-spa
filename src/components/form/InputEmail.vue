<script setup lang="ts">
defineProps<{
  value: string
}>()

const emit = defineEmits<{
  'update:email': [value: string]
}>()

function updateData(e: Event) {
  emit('update:value', e.target.value)
}
</script>

<template>
  <div class="form-group">
    <input
      type="text"
      class="form-control"
      :value="value"
      @input="updateData($event)"
    />
  </div>
</template>
