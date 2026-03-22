<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import JobFormModal from '@/components/JobFormModal.vue'
import TableJobs from '@/components/TableJobs.vue';


const isModalOpen = ref(false)
</script>

<template>
  <AppHeader @open-modal="isModalOpen = true" />
  <JobFormModal v-if="isModalOpen" @close="isModalOpen = false" />

  <TableJobs/>
</template>
