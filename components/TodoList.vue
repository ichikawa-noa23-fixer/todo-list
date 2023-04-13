<template>
  <div v-for="todoItem in todoItemList" :key="todoItem.name">
    {{ todoItem.name }}<button @click="emit('clickCompleteTodo', todoItem.id)">
      完了
    </button>
  </div>
</template>

<script setup lang="ts">
// TodoItem.tsを読み込む
import { TodoItem } from '../types/TodoItem'

interface TodoListProps {
    todoItemList: TodoItem[]
}
interface TodoListEmits {
    (e: 'clickCompleteTodo', todoId: number): void,
}

defineProps<TodoListProps>()
const emit = defineEmits<TodoListEmits>()
</script>
