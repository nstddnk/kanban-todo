import React from 'react'
import styles from './Home.module.scss'
import { Menu } from '../../components/menu/Menu'
import { TaskBoard } from '../../components/tasks-board/TaskBoard'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.leftPanel}>
        <Menu />
      </div>
      <div className={styles.rightPanel}>
        <DndProvider backend={HTML5Backend}>
          <TaskBoard />
        </DndProvider>
      </div>
    </div>
  )
}
