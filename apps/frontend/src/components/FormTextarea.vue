<script lang="ts" setup>
import { useField } from "vee-validate";

interface FormFieldProps {
  name: string;
  rows: number;
  class?: string;
  placeholder?: string;
}
const props = defineProps<FormFieldProps>();

const { value, meta, errors, setValue } = useField(() => props.name);
</script>
<template>
  <textarea
    :class="[
      props.class,
      errors && meta.touched && 'border-red-500 ring-1 ring-red-500',
    ]"
    :value="String(value)"
    :rows="props.rows"
    :placeholder="props.placeholder"
    @input="setValue(($event.target as HTMLTextAreaElement).value)"
  />
</template>
