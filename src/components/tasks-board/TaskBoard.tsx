import React from 'react'
import styles from './TaskBoard.module.scss'
import { doingOption, doneOption, toDoOption } from './task.options'
import { EmptyTaskBoardIcon } from '../../icons/empty-task-board.icon'
import { Column } from './column/Column'
import { useSelector } from 'react-redux'
import { getTaskListIds } from '../../store/slices/tasksSlice'

export const TaskBoard = () => {
  const taskListIds = useSelector(getTaskListIds)

  return (
    <>
      {taskListIds.length > 0 ? (
        <div className={styles.taskBoard}>
          <Column type={toDoOption} />
          <Column type={doingOption} />
          <Column type={doneOption} />
        </div>
      ) : (
        <div className={styles.emptyIconWrapper}>
          <EmptyTaskBoardIcon />
          <p className={styles.emptyBoardText}>No tasks, no worries. Want to start planning?</p>
        </div>
      )}
    </>
  )
}
