import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import styles from './Textarea.module.scss'
import { useField } from 'formik'

type TextareaProps = {
  label: string
  placeholder?: string
  name: string
}

export const Textarea = ({ name, label, placeholder = '' }: TextareaProps) => {
  const [field, meta] = useField(name)

  return (
    <div className={styles.wrapper}>
      <FloatingLabel label={label}>
        <Form.Control
          {...field}
          as="textarea"
          placeholder={placeholder}
          style={{ height: '70px' }}
          className={meta.error ? styles.error : ''}
        />
      </FloatingLabel>
      <p className={styles.errorMessage}>{meta.error}</p>
    </div>
  )
}
