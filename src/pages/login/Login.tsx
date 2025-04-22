import React from 'react'
import { Form, Formik } from 'formik'
import { Input } from '../../components/common/input/Input'
import { Button } from 'react-bootstrap'
import { LoginValidationSchema } from './login-validation-schema'
import styles from './Login.module.scss'
import { useNavigate } from 'react-router'
import { LoginIcon } from '../../icons/login.icon'

export const Login = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginValidationSchema}
        onSubmit={(values) => {
          navigate('/')
          console.log('Submitted values:', values)
        }}
      >
        <Form>
          <div className={styles.form}>
            <p className={styles.title}>The journey to done starts here!</p>
            <Input
              className={styles.input}
              name="email"
              label="Email address"
              placeholder="name@example.com"
            />
            <Input
              className={styles.input}
              name="password"
              label="Password"
              placeholder="Enter your password"
            />
            <Button className={styles.button} type="submit">
              Login
            </Button>
          </div>
        </Form>
      </Formik>
      <div className={styles.imageWrapper}>
        <LoginIcon />
      </div>
    </div>
  )
}
