import React from 'react'
import { useField } from 'formik'
import { FileUploader } from 'react-drag-drop-files'

type FileUploaderProps = {
  name: string
  types: string[]
}

export const ImageUploader = ({ name, types }: FileUploaderProps) => {
  const [field, , { setValue }] = useField(name)

  const handleChange = (file: File) => {
    const imgUrl = URL.createObjectURL(file)
    void setValue(imgUrl)
  }

  return (
    <div>
      <FileUploader
        name={field.name}
        handleChange={handleChange}
        types={types}
        file={field.value}
      />
    </div>
  )
}
