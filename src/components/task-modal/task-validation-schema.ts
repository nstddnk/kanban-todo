import * as Yup from 'yup'

export const TaskValidationSchema = Yup.object().shape({
  title: Yup.string().max(50, 'Too Long').required('Required'),
  description: Yup.string().max(400, 'Too Long').required('Required'),
  link: Yup.string().matches(
    /((https):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    'Invalid url',
  ),
})
