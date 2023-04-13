<template>
  <div>
    <h1>ToDoApp</h1>
    <hr>
    <h2>タスク追加</h2>
    <input v-model="todoNameInput"><button @click="onClickAddTodoHandler">
      追加
    </button>
    <hr>
    <h2>タスク一覧</h2>

    <TodoList
      :todo-item-list="todoItemList"
      @click-complete-todo="updateTodoItem($event, { isComplete: true })"
      @click-un-complete-todo="updateTodoItem($event, { isComplete: false })"
      @click-delete-todo="deleteTodoItem"
    />
  </div>
</template>

<script setup lang="ts">
import { TodoItem, newTodoItem } from '~/types/TodoItem'
/** 表示するTodoのリスト */
const todoItemList = ref<TodoItem[]>([
  { id: 0, name: 'Vue' },
  { id: 1, name: 'Vue3' },
  { id: 2, name: 'Nuxt3' }
].map(newTodoItem))
/** 入力中のTodoの名前 */
const todoNameInput = ref<string>('')

/**
 * ToDoの追加ボタンを押した時の処理
 */
function onClickAddTodoHandler() {
  // ToDo名が空の場合何もしない
  if (todoNameInput.value === '') {
    return
  }

  // ToDoを追加する
  addTodoItem({ name: todoNameInput.value })

  // テキストボックスの値をクリアする
  todoNameInput.value = ''
}

/**
 * ToDoを追加する
 */
function addTodoItem(initialValue: Pick<TodoItem, 'name'> & Partial<TodoItem>) {
  // ToDoのリストに新しいToDoを追加する
  todoItemList.value.push(newTodoItem({
    // idに0-1000000のランダムな値を取る（つなぎこみまでの仮の実装）
    id: Math.floor(Math.random() * 1000000),
    ...initialValue
  }))
}

/**
 * ToDoを削除する
 * @param targetId 削除するTodoのId
 */
function deleteTodoItem(targetId: number) {
  // todoItemListからcompletedTodoIdと同じIdを持つ要素を取り除く
  todoItemList.value = todoItemList.value.filter(todoItem => todoItem.id !== targetId)
}

/**
 * ToDoを更新する
 * @param targetId 更新するTodoのId
 * @param value 更新後の値
 */
function updateTodoItem(targetId: number, newValue: Partial<Omit<TodoItem, 'id'>>) {
  const targetItemIndex = todoItemList.value.findIndex(({ id }) => id === targetId)
  if (targetItemIndex === undefined) { return }
  todoItemList.value[targetItemIndex] = { ...todoItemList.value[targetItemIndex], ...newValue }
}

</script>
