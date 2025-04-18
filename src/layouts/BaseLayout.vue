<template>
  <div>
    <BaseHeader />
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import BaseHeader from '@/components/layout/BaseHeader.vue';

</script>
