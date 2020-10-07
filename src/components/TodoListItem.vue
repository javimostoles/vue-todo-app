<template>
  <li>
    {{ todo.text }}
    <button @click="$emit('remove', todo.id)">
         <i class="fa fa-trash-o"></i>
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>