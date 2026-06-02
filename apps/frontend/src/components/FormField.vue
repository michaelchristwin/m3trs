<script lang="ts" setup>
import { useField } from "vee-validate";
import { type InputTypeHTMLAttribute } from "vue";

interface FormFieldProps {
  name: string;
  type: InputTypeHTMLAttribute;
  placeholder?: string;
  class?: string;
}
const props = defineProps<FormFieldProps>();

const { value, meta, errors, setValue } = useField(() => props.name);
</script>
<template>
  <input
    :type="props.type"
    :class="[
      props.class,
      errors && meta.touched && 'border-red-500 ring-1 ring-red-500',
    ]"
    :value="value"
    :placeholder="props.placeholder"
    @input="setValue(($event.target as HTMLInputElement).value)"
  />
</template>
