<script setup lang="ts">
import { ref } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'
import InputEmail from '@/components/form/InputEmail.vue'

const email = ref('')
</script>

<template>
  <main>
    <the-welcome />
    <br/>
    {{  'asdasd = ' + email  }}
    <br/>

    <input-email
      v-model:value="email"
    />
  </main>
</template>
