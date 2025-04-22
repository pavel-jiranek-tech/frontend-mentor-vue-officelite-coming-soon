<template>
  <component
    :is="componentType"
    v-bind="componentAttrs"
    class="button"
    :class="[variantClass]"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  as?: 'button' | 'a' | 'router-link';
  href?: string;
  to?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'ghost' | 'inverse';
  disabled?: boolean;
}>();

const componentType = computed(() => {
  if (props.as) return props.as;
  if (props.to) return 'router-link';
  if (props.href) return 'a';
  return 'button';
});

const componentAttrs = computed(() => {
  const attrs: Record<string, unknown> = {};

  if (props.href) attrs.href = props.href;
  if (props.to) attrs.to = props.to;
  if (props.type && componentType.value === 'button') attrs.type = props.type;
  if (props.disabled) attrs.disabled = true;

  return attrs;
});

const variantClass = computed(() => 
  props.variant ? `button--${props.variant}` : null
  );
</script>
