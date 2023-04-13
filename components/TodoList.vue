<!-- Todoの一覧を表示するコンポーネント -->
<template>
  <div v-for="todoItem in todoItemList" :key="todoItem.id">
    {{ todoItem.name }}
    <button v-if="!todoItem.isComplete" @click="emit('clickCompleteTodo', todoItem.id)">
      完了する
    </button>
    <button v-else @click="emit('clickUnCompleteTodo', todoItem.id)">
      未完了に戻す
    </button>
    <button @click="emit('clickDeleteTodo', todoItem.id)">
      削除する
    </button>
  </div>
</template>

<script setup lang="ts">
import { TodoItem } from '~/types/TodoItem'

  interface TodoListProps {
    todoItemList: TodoItem[]
  }
  interface TodoListEmits {
    (e: 'clickCompleteTodo', todoId: number): void,
    (e: 'clickUnCompleteTodo', todoId: number): void,
    (e: 'clickDeleteTodo', todoId: number): void,
  }

defineProps<TodoListProps>()
const emit = defineEmits<TodoListEmits>()
</script>
