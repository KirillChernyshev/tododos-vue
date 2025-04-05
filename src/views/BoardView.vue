<script setup lang="ts">
import TaskItem from '@/components/TaskItem.vue'
import type { Task } from '@/types/task'
import { ref } from 'vue'

const newTask = ref<string>('')
const tasks = ref<Task[]>([])

function addTask() {
  if (!newTask.value.trim()) return
  tasks.value.push({
    id: Date.now(),
    title: newTask.value,
  })
  newTask.value = ''
}

function removeTask(id: number) {
  tasks.value = tasks.value.filter((task) => task.id !== id)
}

function toggleTask(id: number) {
  const task = tasks.value.find((task) => task.id === id)
  if (!task) return

  task.done = !task.done
}
</script>

<template>
  <div class="app">
    <h1>Task Board</h1>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a task..." />
    <ul>
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @remove="removeTask"
        @toggle="toggleTask"
      />
    </ul>
    <p v-show="tasks.length === 0" class="no-results">
      No tasks available. Add a task to get started!
    </p>
  </div>
</template>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  color: #d4d4d4; /* Light text for contrast */
  background-color: #1e1e1e; /* Dark background */
  padding: 20px;
  min-height: 100vh;
}

h1 {
  text-align: center;
  color: #569cd6; /* Blue similar to VS Code */
}

input {
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 20px;
  border: 1px solid #3c3c3c; /* Border similar to VS Code panels */
  border-radius: 5px;
  background-color: #252526; /* Input background */
  color: #d4d4d4; /* Input text color */
  font-size: 16px;
  outline: none;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

input::placeholder {
  color: #808080; /* Placeholder text color */
}

input:focus {
  border-color: #569cd6; /* Blue border on focus */
  box-shadow: 0 0 5px #569cd6; /* Blue glow on focus */
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #3c3c3c; /* Border similar to VS Code panels */
  border-radius: 5px;
  background-color: #252526; /* Dark background */
  color: #d4d4d4; /* Light text */
}

button {
  background: none;
  border: none;
  color: #d16969; /* Red similar to VS Code errors */
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;
}

button:hover {
  color: #e06c75; /* Slightly lighter red on hover */
}

.no-results {
  text-align: center;
  color: #808080; /* Muted text color */
  font-size: 18px;
  margin-top: 20px;
}
</style>
