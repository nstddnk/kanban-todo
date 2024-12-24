import React from 'react'
import { Button, Modal, Form as BootstrapForm, Badge } from 'react-bootstrap'
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
import { taskDto } from '../../utils/dto/task.dto'
import { FileUploader } from '../common/file-uploader/FileUploader'
import { Checkbox } from '../common/checkbox/Checkbox'

type TaskModalProps = {
  isOpen: boolean
  onClose: () => void
  onCreateTask: (task: Task) => void
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

export const TaskModal = ({ isOpen, onCreateTask, onClose }: TaskModalProps) => {
  const initialValues = {
    title: '',
    status: TaskStatusEnum.TODO,
    priority: '',
    issueType: IssueTypeEnum.Task,
    description: '',
    assignee: '',
    imgUrl: '',
    link: '',
    fileUrl: '',
  }

  const handleSubmit = (values: FormValues) => {
    onCreateTask({ ...taskDto, ...values, imgUrl: values.imgUrl || '' })
    onClose()
  }

  return isOpen ? (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create new task</Modal.Title>
      </Modal.Header>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
            <FileUploader name="imgUrl" types={['JPG', 'PNG', 'GIF']} />
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
              Create
            </Button>
          </Modal.Footer>
        </Form>
      </Formik>
    </Modal>
  ) : null
}
