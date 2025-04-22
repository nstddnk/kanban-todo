import { IssueTypeEnum, PriorityEnum, TaskStatusEnum } from './task.options'

export type TaskStatusType = {
  value: TaskStatusEnum
  label: 'TO DO' | 'DOING' | 'DONE'
}

export type IssueType = {
  value: IssueTypeEnum
  label: 'Bug' | 'Task' | 'Story' | 'Epic'
}

export type PriorityType = {
  value: PriorityEnum
  label: 'High' | 'Medium' | 'Low'
}

export type Tag = {
  type: 'success' | 'danger' | 'info' | 'dark'
  text: string
}

export type Task = {
  id: string
  status: TaskStatusEnum
  title: string
  createdAt: string
  createdBy: string
  issueType: IssueTypeEnum
  description: string
  imgUrl: string
  link: string
  tags: Tag[]
}
