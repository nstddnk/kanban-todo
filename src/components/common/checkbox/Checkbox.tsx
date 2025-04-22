import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './Checkbox.module.scss'
import { useField } from 'formik'

type CheckboxProps = {
  label: React.JSX.Element | string
  name: string
}

export const Checkbox = ({ name, label }: CheckboxProps) => {
  const [field] = useField(name)

  return (
    <div className={styles.wrapper}>
      <Form.Check>
        <Form.Check.Input type="checkbox" id={name} {...field} checked={field.value} />
        <Form.Check.Label htmlFor={name}>{label}</Form.Check.Label>
      </Form.Check>
    </div>
  )
}
