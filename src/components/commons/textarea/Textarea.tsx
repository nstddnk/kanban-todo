import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import styles from './Textarea.module.scss'
import { useField } from 'formik'

type TextareaProps = {
  label: string
  placeholder: string
  name: string
}

export const Textarea = ({ name, label, placeholder }: TextareaProps) => {
  const [field] = useField(name)

  return (
    <div className={styles.wrapper}>
      <FloatingLabel label={label} className="mb-3">
        <Form.Control
          {...field}
          as="textarea"
          placeholder={placeholder}
          style={{ height: '100px' }}
        />
      </FloatingLabel>
    </div>
  )
}
