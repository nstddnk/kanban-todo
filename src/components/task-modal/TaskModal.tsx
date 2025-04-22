import React from 'react'
import { Button, Modal, Badge } from 'react-bootstrap'
import styles from './TaskModal.module.scss'
import { Input } from '../common/input/Input'
import { Select } from '../common/select/Select'
import { Textarea } from '../common/textarea/Textarea'
import { Form, Formik } from 'formik'
import { Tag, Task } from '../tasks-board/task.interface'
import {
  issueOptions,
  IssueTypeEnum,
  priorityOptions,
  statusOptions,
  tagsOptions,
  TaskStatusEnum,
} from '../tasks-board/task.options'
import { v4 as uuidv4 } from 'uuid'
import { ImageUploader } from '../common/img-uploader/ImageUploader'
import { Checkbox } from '../common/checkbox/Checkbox'
import { TaskValidationSchema } from './task-validation-schema'
import { useDispatch, useSelector } from 'react-redux'
import { createTask, getTasksById, updateTask } from '../../store/slices/tasksSlice'

type TaskModalProps = {
  onClose: () => void
  editingId?: string | null
}

export type FormValues = {
  title: string
  status: TaskStatusEnum
  priority: string
  issueType: IssueTypeEnum
  description: string
  assignee: string
  imgUrl: string
  link: string
  tags: Record<Tag['type'], boolean>
}

const values = {
  title: '',
  status: TaskStatusEnum.TODO,
  priority: '',
  issueType: IssueTypeEnum.Task,
  description: '',
  assignee: '',
  imgUrl: '',
  link: '',
}

export const TaskModal = ({ editingId, onClose }: TaskModalProps) => {
  const dispatch = useDispatch()
  const tasksById = useSelector(getTasksById)

  const editingTask: Task | undefined = tasksById[editingId ?? '']
  const isEdit = Boolean(editingTask)

  const initialValues = {
    ...values,
    ...editingTask,
    tags: (editingTask?.tags ?? []).reduce(
      (acc, tag: Tag) => ({ ...acc, [tag.type]: true }),
      {} as Record<Tag['type'], boolean>,
    ),
  }
  const handleSubmit = (values: FormValues) => {
    const mockData = {
      createdBy: 'Nastenka',
      createdAt: '24 Jul',
    }

    const tags = tagsOptions.filter((tag) => values.tags[tag.type])

    if (isEdit) {
      dispatch(
        updateTask({
          ...values,
          ...mockData,
          tags,
          id: editingTask?.id ?? '',
        }),
      )
    } else {
      dispatch(
        createTask({
          ...values,
          ...mockData,
          tags,
          id: uuidv4(),
        }),
      )
    }

    onClose()
  }

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isEdit ? 'Edit Task' : 'Create New Task'}</Modal.Title>
      </Modal.Header>

      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={TaskValidationSchema}
      >
        <Form>
          <Modal.Body className={styles.bodyWrapper}>
            <Input name="title" label="Title" />

            <div className={styles.taskDetails}>
              <Select name="status" label="Status" options={statusOptions} />
              <Select name="priority" label="Priority" options={priorityOptions} />
            </div>

            <div className={styles.taskScope}>
              <Select
                name="assignee"
                label="Assignee"
                options={[
                  { label: 'Mark', value: 'Mark' },
                  { label: 'Bob', value: 'Bob' },
                  { label: 'Kira', value: 'Kira' },
                ]}
              />
              <Select name="issueType" label="Issue type" options={issueOptions} />
            </div>

            <Textarea name="description" label="Description" />
            <ImageUploader name="imgUrl" types={['JPG', 'PNG', 'GIF', 'JPEG']} />
            <Input name="link" label="External Link" />

            <div className={styles.tagsCheckboxes}>
              <h4>Tags:</h4>
              {tagsOptions.map((tag) => (
                <Checkbox
                  label={<Badge bg={tag.type}>{tag.text}</Badge>}
                  key={tag.type}
                  name={`tags.${tag.type}`}
                />
              ))}
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>

            <Button variant="primary" type="submit">
              {isEdit ? 'Save' : 'Create'}
            </Button>
          </Modal.Footer>
        </Form>
      </Formik>
    </Modal>
  )
}
