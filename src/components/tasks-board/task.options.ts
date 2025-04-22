import { IssueType, PriorityType, TaskStatusType } from './task.interface'
import { Tag } from './task.interface'

export enum TaskStatusEnum {
  TODO = 'TODO',
  DOING = 'DOING',
  DONE = 'DONE',
}

export const toDoOption: TaskStatusType = { value: TaskStatusEnum.TODO, label: 'TO DO' }
export const doingOption: TaskStatusType = { value: TaskStatusEnum.DOING, label: 'DOING' }
export const doneOption: TaskStatusType = { value: TaskStatusEnum.DONE, label: 'DONE' }

export const statusOptions: TaskStatusType[] = [toDoOption, doingOption, doneOption]

export enum IssueTypeEnum {
  Bug = 'Bug',
  Task = 'Task',
  Story = 'Story',
  Epic = 'Epic',
}

export const bugOption: IssueType = { value: IssueTypeEnum.Bug, label: 'Bug' }
export const taskOption: IssueType = { value: IssueTypeEnum.Task, label: 'Task' }
export const storyOption: IssueType = { value: IssueTypeEnum.Story, label: 'Story' }
export const epicOption: IssueType = { value: IssueTypeEnum.Epic, label: 'Epic' }

export const issueOptions: IssueType[] = [bugOption, taskOption, storyOption, epicOption]

export enum PriorityEnum {
  High = 'High',
  Medium = 'Medium',
  Low = 'Low',
}

export const highPriorityOption: PriorityType = { value: PriorityEnum.High, label: 'High' }
export const mediumPriorityOption: PriorityType = { value: PriorityEnum.Medium, label: 'Medium' }
export const lowPriorityOption: PriorityType = { value: PriorityEnum.Low, label: 'Low' }

export const priorityOptions: PriorityType[] = [
  highPriorityOption,
  mediumPriorityOption,
  lowPriorityOption,
]

export const urgentTag: Tag = { type: 'success', text: 'Urgent' }
export const bugTag: Tag = { type: 'danger', text: 'Bug' }
export const featureTag: Tag = { type: 'info', text: 'Feature' }
export const improvementTag: Tag = { type: 'dark', text: 'Improvement' }

export const tagsOptions: Tag[] = [urgentTag, bugTag, featureTag, improvementTag]
