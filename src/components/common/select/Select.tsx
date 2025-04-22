import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import styles from './Select.module.scss'
import { useField } from 'formik'

type SelectOption = {
  label: string
  value: string
}

type SelectProps = {
  label: string
  options: SelectOption[]
  name: string
}

export const Select = ({ name, label, options }: SelectProps) => {
  const [field] = useField(name)

  return (
    <div className={styles.wrapper}>
      <FloatingLabel label={label}>
        <Form.Select {...field}>
          {options.map((option: SelectOption) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
    </div>
  )
}
