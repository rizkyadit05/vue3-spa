<script setup lang="ts">
const props = defineProps<{
  value: string,
  isError?: boolean,
  errorMsg?: string,
  isRequired?: boolean
}>()

const emit = defineEmits<{
  'update:value': [value: string],
  'error': [error: boolean]
}>()

const emailData = {
  // eslint-disable-next-line no-useless-escape
  rgxEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^-<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,24}))$/,
  isError: props.isError ? props.isError : false,
  errorMsg: props.errorMsg ? props.errorMsg : ""
}

function updateData(e: Event) {
  const value = (e.target as HTMLInputElement)?.value

  // reset error
  setError(false, "")

  if (props.isRequired && !value) {
    setError(true, "Field can't be empty")
  }
  else if (!emailData.rgxEmail.test(value)) {
    setError(true, "Wrong email format!")
  }

  emit('update:value', value)
}

function setError(isError: boolean, errorMsg: string): void {
  emailData.isError = isError
  emailData.errorMsg = errorMsg

  emit("error", isError)
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
    <small
      v-if="emailData.isError"
      class="form-text error-label"
    >
      {{ emailData.errorMsg }}
    </small>
  </div>
</template>

<style lang="scss" scoped>
.error-label {
  color: red;
  font-weight: bold;
}
</style>
