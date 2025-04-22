import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import styles from './Input.module.scss'
import { useField } from 'formik'

type InputProps = {
  label: string
  type?: string
  placeholder?: string
  name: string
  className?: string
}

export const Input = ({
  name,
  type = 'text',
  label,
  placeholder = '',
  className = '',
}: InputProps) => {
  const [field, meta] = useField(name)

  return (
    <div className={styles.wrapper}>
      <FloatingLabel label={label}>
        <Form.Control
          size="sm"
          {...field}
          type={type}
          placeholder={placeholder}
          className={meta.error ? `${styles.error} ${className}` : className}
        />
      </FloatingLabel>
      <p className={styles.errorMessage}>{meta.error}</p>
    </div>
  )
}
