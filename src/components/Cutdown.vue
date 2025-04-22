<template>
  <div :class="['cutdown', variantClass]">
    <p class="cutdown__coming-label">
      Coming <time datetime="2020-11-04" class="cutdown__coming-date">4 nov 2020</time>
    </p>
    <div class="cutdown__wrapper">
      <div class="cutdown__unit" v-for="(unit, index) in units" :key="index">
        <div class="cutdown__unit-number">{{ unit.value }}</div>
        <div class="cutdown__unit-label">{{ unit.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  variant?: 'light' | 'dark';
}>();

const variantClass = computed(() => (props.variant ? `cutdown--${props.variant}` : ''));

const units = [
  { value: '47', label: 'days' },
  { value: '07', label: 'hours' },
  { value: '56', label: 'min' },
  { value: '14', label: 'sec' },
];
</script>
