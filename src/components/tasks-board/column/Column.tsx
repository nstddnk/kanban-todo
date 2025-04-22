import React from 'react'
import styles from './Column.module.scss'

import { useDrop } from 'react-dnd'
import { Task, TaskStatusType } from '../task.interface'
import { Card } from '../card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { getTasksById, updateTask } from '../../../store/slices/tasksSlice'

type ColumnProps = {
  type: TaskStatusType
}
export const Column = ({ type }: ColumnProps) => {
  const dispatch = useDispatch()
  const tasksById = useSelector(getTasksById)

  const tasks = Object.values(tasksById)

  const currentTasks = tasks.filter((task: Task) => task.status === type.value)

  const [{ isOver }, drop] = useDrop({
    accept: ['random'],
    drop: (item: Task) => {
      const updatedItem = tasksById[item.id]

      dispatch(updateTask({ ...updatedItem, status: type.value }))
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  })

  return (
    <div className={styles.taskColumn}>
      <p className={styles.columnTitle}>{type.label}</p>
      <div ref={drop} className={`${styles.cardsWrapper} ${isOver ? styles.columnActive : ''}`}>
        {currentTasks.map((task) => (
          <Card {...task} key={task.id} />
        ))}
      </div>
    </div>
  )
}
