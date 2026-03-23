<script setup lang="ts">
defineProps<{
    label: string,
    active?: boolean
}>()
</script>
<template>
    <span 
    class="badge badge-md border border-emerald-300 hover:bg-emerald-900"
     :class="active ? 'bg-emerald-300 text-gray-950' : ''"
    >
        {{ label }}
    </span>
</template>
