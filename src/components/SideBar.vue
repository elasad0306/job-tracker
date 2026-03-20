<script setup lang="ts">
import { Kanban, List } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col ml-10 gap-5 w-64">
    <div class="flex flex-col gap-5">
      <span>Vue</span>
      <div
        class="flex items-center text-gray-500 p-2 gap-4 rounded-lg text-xl hover:text-gray-100 hover:shadow-emerald-300/30 hover:bg-emerald-300/30"
      >
        <!-- <List :size="24"/> -->
        <span>Liste</span>
      </div>
      <!-- <div class="flex items-center p-2 gap-4 shadow-lg rounded-lg text-xl hover:shadow-emerald-300/30 hover:bg-emerald-300/30">
                <Kanban :size="24"/>
                <span>Carte</span>
            </div> -->
    </div>
    <div class="flex flex-col gap-5">
      <span>Filtres</span>
      <div
        class="flex items-center text-gray-500 p-2 gap-4 rounded-lg text-xl hover:text-gray-100 hover:shadow-emerald-300/30 hover:bg-emerald-300/30"
      >
        <!-- <All :size="24"/> -->
        <span>Alternance</span>
      </div>
      <div
        class="flex items-center text-gray-500 p-2 gap-4 rounded-lg text-xl hover:text-gray-100 hover:shadow-emerald-300/30 hover:bg-emerald-300/30"
      >
        <!-- <All :size="24"/> -->
        <span>Stage</span>
      </div>
      <div
        class="flex items-center text-gray-500 p-2 gap-4 rounded-lg text-xl hover:text-gray-100 hover:shadow-emerald-300/30 hover:bg-emerald-300/30"
      >
        <!-- <All :size="24"/> -->
        <span>CDD</span>
      </div>
      <div
        class="flex items-center text-gray-500 p-2 gap-4 rounded-lg text-xl hover:text-gray-100 hover:shadow-emerald-300/30 hover:bg-emerald-300/30"
      >
        <!-- <All :size="24"/> -->
        <span>CDI</span>
      </div>
    </div>
  </div>
</template>
