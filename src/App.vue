<script setup lang="ts">
import { ref } from 'vue'

interface Task {
  id: number
  text: string
}

const newTask = ref<string>('')
const tasks = ref<Task[]>([])

function addTask() {
  if (!newTask.value.trim()) return
  tasks.value.push({
    id: Date.now(),
    text: newTask.value,
  })
  newTask.value = ''
}

function removeTask(id: number) {
  tasks.value = tasks.value.filter((task) => task.id !== id)
}
</script>

<template>
  <div class="app">
    <h1>Task Board</h1>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a task..." />
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.text }}
        <button @click="removeTask(task.id)">❌</button>
      </li>
    </ul>
    <p v-show="tasks.length === 0" class="no-results">
      No tasks available. Add a task to get started!
    </p>
  </div>
</template>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  color: #ffffff;
  background-color: #121212;
  padding: 20px;
  min-height: 100vh;
}

h1 {
  text-align: center;
  color: #bb86fc;
}

input {
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 20px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #1e1e1e;
  color: #ffffff;
  font-size: 16px;
  outline: none;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

input::placeholder {
  color: #888;
}

input:focus {
  border-color: #bb86fc;
  box-shadow: 0 0 5px #bb86fc;
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
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #1e1e1e;
  color: #ffffff;
}

button {
  background: none;
  border: none;
  color: #ff5252;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;
}

button:hover {
  color: #ff867c;
}

.no-results {
  text-align: center;
  color: #888;
  font-size: 18px;
  margin-top: 20px;
}
</style>
