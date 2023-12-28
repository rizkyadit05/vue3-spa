<script setup lang="ts">
import { ref } from 'vue';
import InputEmail from '@/components/form/InputEmail.vue'

const email = ref('')
let error = ref(false)
</script>

<template>
  <div>
    <h1>this is your playground!</h1>

    <br/>
    {{  'asdasd = ' + email  }}
    <br/>

    <input-email
      v-model:value="email"
      :is-required="true"
      @error="error = $event"
    />
  </div>
</template>
