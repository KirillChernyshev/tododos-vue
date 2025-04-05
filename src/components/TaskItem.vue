<script setup lang="ts">
import type { Task } from '@/types/task'

defineProps({
  task: {
    type: Object as () => Task,
    required: true,
  },
})
</script>

<template>
  <li>
    <label class="checkbox-wrapper">
      <input type="checkbox" :checked="task.done" @change="$emit('toggle', task.id)" />
      <span class="custom-checkbox"></span>
    </label>
    <span :class="{ done: task.done }">{{ task.title }}</span>
    <button @click="$emit('remove', task.id)">Remove</button>
  </li>
</template>

<style scoped>
li {
  background-color: #252526; /* Dark background */
  color: #d4d4d4; /* Light text for contrast */
  padding: 10px;
  border: 1px solid #3c3c3c; /* Border similar to VS Code panels */
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

span {
  flex: 1; /* Ensures the text takes up available space */
  text-align: left; /* Align text to the left */
}

span.done {
  text-decoration: line-through;
  opacity: 0.5; /* Dimmed text for completed tasks */
}

button {
  background-color: #0e639c; /* Button color similar to VS Code blue */
  color: #ffffff; /* White text for contrast */
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: #1177bb; /* Slightly lighter blue on hover */
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
}

input[type='checkbox'] {
  display: none; /* Hide the default checkbox */
}

.custom-checkbox {
  width: 20px;
  height: 20px;
  background-color: #3c3c3c; /* Dark background similar to VS Code */
  border: 1px solid #252526; /* Border matching the dark theme */
  border-radius: 3px; /* Slightly rounded corners */
  position: relative;
}

input[type='checkbox']:checked + .custom-checkbox {
  background-color: #0e639c; /* Styled with VS Code blue */
}

.custom-checkbox::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  background-color: #ffffff; /* White checkmark */
  transform: translate(-50%, -50%) scale(0);
  border-radius: 2px;
  transition: transform 0.2s ease-in-out;
}

input[type='checkbox']:checked + .custom-checkbox::after {
  transform: translate(-50%, -50%) scale(1);
}
</style>
