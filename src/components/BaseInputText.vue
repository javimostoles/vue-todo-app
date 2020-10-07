  <template>
    <input
      type="text"
      class="input"
      :value="value"
      v-on="listeners"
    >
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    }
  },
  computed: {
    listeners () {
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>

<style>
    #todoList #newTask {
      background: rgba(0, 0, 0, 0.05);
      padding: 15px;
      display: flex;
    }
    #todoList #newTask input {
      flex: 1;
      margin-right: 10px;
      padding: 5px 10px;
      border: none;
      border-radius: 5px;
      outline: none;
      border-left: 2px solid #2ea44f;
      font-family: 'Roboto', sans-serif;
      font-size: 1em;
    }
    #todoList #newTask button {
      outline: none;
      border: none;
      border-radius: 50%;
      font-size: 2em;
      color: white;
      background: #2ea44f;
      display: flex;
      width: 35px;
      height: 35px;
      display: flex;
      font-family: Arial, Helvetica, sans-serif;
      justify-content: center;
      align-items: center;
      transition: all 0.15s ease-in-out;
    }
    #todoList #newTask button span {
      margin: auto;
    }
    #todoList #newTask button:hover {
      cursor: pointer;
      background: #047a39;
    }
</style>
