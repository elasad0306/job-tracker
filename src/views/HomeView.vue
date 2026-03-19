<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import JobFormModal from '@/components/JobFormModal.vue'

const isModalOpen = ref(false)
</script>

<template>
  <AppHeader @open-modal="isModalOpen = true" />
  <JobFormModal v-if="isModalOpen" @close="isModalOpen = false" />
</template>
