<template>
  <div>
    <h1>ToDoApp</h1>
    <hr>
    <h2>タスク追加</h2>
    <input v-model="todoNameInput"><button @click="addTodoItem">
      追加
    </button>
    <hr>
    <h2>タスク一覧</h2>
    <TodoList :todo-item-list="todoItemList" @click-complete-todo="completedTodoItem" />
  </div>
</template>

<script setup lang="ts">
// TodoItem.tsを読み込む
import { TodoItem } from '../types/TodoItem'
// id
let todoId = 3
// const todoNameList = ref<string[]>(['Vue', 'Vue3', 'Nuxt3'])
const todoItemList = ref<TodoItem[]>([
  { id: 0, name: 'Vue' },
  { id: 1, name: 'Vue3' },
  { id: 2, name: 'Nuxt3' }
])
const todoNameInput = ref<string>('')

/**
 * ここにToDoを追加する処理を追加する
 */

function addTodoItem() {
  // 空の場合何もしない
  if (todoNameInput.value === '') {
    return
  }

  // リスト追加
  // todoItemList.value.push(todoNameInput.value)
  // TodoItem型のオブジェクトを作成
  const todoitem: TodoItem = {
    id: todoId,
    name: todoNameInput.value
  }
  todoId += 1
  todoItemList.value.push(todoitem)

  // テキストボックスの値をクリア
  todoNameInput.value = ''
}

/**
 * ここにToDoを完了する処理を追加する
 * @param completedTodoId 完了するTodoの名前
 */

function completedTodoItem(completedTodoId: number) {
  // todoItemList.value = todoItemList.value.filter(todoName => todoName !== completedTodoItem)
  const index = todoItemList.value.findIndex(todo => todo.id === completedTodoId)
  if (index !== -1) {
    todoItemList.value.splice(index, 1)
  }
}
</script>
