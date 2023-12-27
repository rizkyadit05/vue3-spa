<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

onMounted(() => {
  const router = useRouter()

  setTimeout(() => {
    router.push({ name: 'home' })
  }, 3000)
})
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        404 Not Found!
      </div>
    </div>
  </div>
</template>
