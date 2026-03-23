<script setup lang="ts">
import Badge from './Badge.vue';

</script>

<template>
    <div class="flex gap-6">
        <div><span>Filtre par statut : </span></div>
        <div class="flex gap-4">
            <Badge 
            v-for="status in ['Envoyée', 'Refus', 'Offre', 'Entretien', 'Vue']"
            :key="status"
            :label="status"
            />
        </div>
    </div>
</template>