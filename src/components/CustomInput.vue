<script lang="ts" setup>
import { SearchApi } from '@src/api/index';
import { onMounted, ref } from 'vue';

const props = defineProps<{
  modelValue: string;
  delay: number;
  placeholder: string;
}>();

const emit = defineEmits(['update:modelValue']);

const timeout = ref<NodeJS.Timeout>();

const onInput = (e) => {
  const { value } = e.target.value;

  if (props.delay) {
    clearTimeout(timeout.value);

    timeout.value = setTimeout(() => {
      emit('update:modelValue', e.target.value);
    }, props.delay ?? 0);

    return;
  }

  emit('update:modelValue', value);
};
</script>

<template>
  <input
    id="search-input"
    :value="modelValue"
    :placeholder="placeholder"
    @input="onInput"
  >
</template>

<style lang="scss" scoped>
#search-input {
  border: none;
  padding: 10px;
  width: 80vw;
  max-width: 500px;
  border-radius: 10px;
  color: var(--primary-text)
}
</style>