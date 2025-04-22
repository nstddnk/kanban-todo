import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../../components/tasks-board/task.interface'
import { RootState } from '../store'
import { IssueTypeEnum, TaskStatusEnum } from '../../components/tasks-board/task.options'

export interface TasksState {
  byId: { [key: string]: Task }
}

const initialState: TasksState = {
  byId: {
    1: {
      id: '1',
      status: TaskStatusEnum.TODO,
      title: 'My to-do',
      createdAt: '12th Jan',
      createdBy: 'Mark',
      description: 'Just one step closer to pretending you have it all together.',
      imgUrl: 'https://tech-admin.deliveryhero.net/wp-content/uploads/2021/04/Gofer-.png',
      link: 'https://docs.google.com/',
      issueType: IssueTypeEnum.Bug,
      tags: [
        {
          type: 'danger',
          text: 'Oops',
        },
        {
          type: 'info',
          text: 'WillDoItTomorrowForSure',
        },
        {
          type: 'success',
          text: 'ImpossiblyPossible',
        },
        {
          type: 'dark',
          text: 'AlmostDoneButNotQuite',
        },
      ],
    },
  },
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<Task>) => {
      state.byId[action.payload.id] = action.payload
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      state.byId[action.payload.id] = action.payload
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      delete state.byId[action.payload]
    },
  },
})

export const { createTask, updateTask, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer

export const getTasksById = (state: RootState) => state.tasks.byId
export const getTaskListIds = (state: RootState) => Object.keys(getTasksById(state))
