/**
 * Todoリストの１タスクを表すインターフェース
 */
export interface TodoItem {
    /** 一意の識別子 */
    id: number
    /** Todoの名前 */
    name: string
    /** Todoが完了しているかどうか */
    isComplete: boolean
  }

/**
   * TodoItem型のオブジェクトを作成する
   * @param initialValue 初期値
   * @returns 新しく作成したオブジェクト
   */
export function newTodoItem(initialValue: Partial<TodoItem> = {}): TodoItem {
  return {
    id: 0,
    name: '',
    isComplete: false,
    ...initialValue
  }
}
