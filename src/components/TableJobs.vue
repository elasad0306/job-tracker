<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useJobStore } from '@/stores/jobs'
import { Pencil, Trash2 } from 'lucide-vue-next'
import type { JobStatus, JobType } from '@/types/job'
import FilterStatus from './FilterStatus.vue'

const store = useJobStore()
const { jobs, loading, error } = storeToRefs(store)

onMounted(() => store.fetchJobs())

const statusColors: Record<JobStatus, string> = {
  'Envoyée':   'badge-neutral',
  'Vue':       'badge-info',
  'Entretien': 'badge-warning',
  'Offre':     'badge-success',
  'Refus':     'badge-error'
}

const typeColors: Record<JobType, string> = {
  'Stage':      'badge-secondary',
  'Alternance': 'badge-accent',
  'CDI':        'badge-primary',
  'CDD':        'badge-ghost'
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'short'
  })
}

// async function handleDelete(id: string) {
//   if (confirm('Supprimer cette candidature ?')) {
//     await store.deleteJob(id)
//   }
// }
</script>

<template>
  <FilterStatus/>
  <!-- Loading -->
  <div v-if="loading" class="flex justify-center p-8">
    <span class="loading loading-spinner text-emerald-300" />
  </div>

  <!-- Erreur -->
  <div v-else-if="error" class="alert alert-error m-4">
    {{ error }}
  </div>

  <!-- Table -->
  <div v-else class="overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Entreprise</th>
          <th>Poste</th>
          <th>Type</th>
          <th>Statut</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(job, index) in jobs"
          :key="job.id"
          class="hover:bg-base-300"
        >
          <th>{{ index + 1 }}</th>
          <td class="font-semibold">{{ job.company }}</td>
          <td class="text-base-content/70"><a :href="job.url" target="_blank">{{ job.role }}</a></td>
          <td>
            <span class="badge badge-sm" :class="typeColors[job.type]">
              {{ job.type }}
            </span>
          </td>
          <td>
            <span class="badge badge-sm" :class="statusColors[job.status]">
              {{ job.status }}
            </span>
          </td>
          <td class="text-base-content/50 text-sm">
            {{ formatDate(job.applied_at) }}
          </td>
          <td>
            <div class="flex gap-1">
              <button class="btn btn-ghost btn-xs">
                <Pencil :size="12" />
              </button>
              <button
                class="btn btn-ghost btn-xs text-error"
                
              >
                <Trash2 :size="12" />
              </button>
            </div>
          </td>
        </tr>

        <!-- Vide -->
        <tr v-if="!jobs.length">
          <td colspan="7" class="text-center text-base-content/40 py-8">
            Aucune candidature pour le moment
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>