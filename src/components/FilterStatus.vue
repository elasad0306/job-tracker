<script setup lang="ts">
import type { JobStatus } from '@/types/job';
import Badge from './Badge.vue';
const selectedStatus = defineModel<JobStatus | 'Tous'>()

const statuses: (JobStatus | 'Tous')[] = [
  'Tous', 'Envoyée', 'Vue', 'Entretien', 'Offre', 'Refus'
]
</script>

<template>
    <div class="flex gap-6">
        <div><span>Filtre par statut : </span></div>
        <div class="flex gap-4">
            <Badge 
            v-for="status in statuses"
            :key="status"
            :label="status"
            :active="selectedStatus === status"
            @click="selectedStatus = status"
            />
        </div>
    </div>
</template>