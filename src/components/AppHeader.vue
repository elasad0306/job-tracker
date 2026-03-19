<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
const emit = defineEmits(['open-modal'])
</script>

<template>
  <div>
    <!-- Header with logo and button for add new apply-->
    <div class="navbar p-2">
      <div class="flex-1 font-extrabold text-2xl">JobTracker</div>
      <div>
        <button
          class="btn bg-emerald-300 border-emerald-600 shadow-lg rounded-lg hover:shadow-emerald-300/30 hover:bg-[#4ade80] text-gray-950"
          @click="emit('open-modal')"
        >
          <Plus :size="16" /> Nouvelle candidature
        </button>
      </div>
    </div>
    <!-- Stats -->
  </div>
</template>
