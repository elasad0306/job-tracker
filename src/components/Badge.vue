<script setup lang="ts">
defineProps(['label'])
</script>
<template>
    <span class="badge badge-md border border-emerald-300 hover:bg-emerald-900">
        {{ label }}
    </span>
</template>
