<script setup lang="ts">
import Badge from './Badge.vue';

</script>

<template>
    <div class="flex gap-6">
        <div><span>Filtre par statut : </span></div>
        <div class="flex gap-4">
            <Badge label="Tous"/>
            <Badge label="Envoyée"/>
            <Badge label="Entretien"/>
            <Badge label="Offre"/>
            <Badge label="Refus"/>
        </div>
    </div>
</template>