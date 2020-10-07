<template>
  <li>
    {{ todo.text }}
    <button @click="$emit('remove', todo.id)" class="remove" >
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

<style lang="css" scoped>
    .remove{
        border:0;
        color: #ff3c41;
        transition: all 0.2s ease-in-out;
        font-size: 1.2em;
        background: none;
    }
    .remove i{
      opacity: 0;
    } 
    .remove:focus i,
    li:hover .remove i,
    li:focus .remove i {
        opacity: 1;
        cursor: pointer;
    }
</style>