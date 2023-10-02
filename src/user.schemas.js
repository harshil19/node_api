import * as yup from 'yup'

const MIN_LENGTH = {
  name: 2,
  city: 2,
  country: 2
}

const MAX_LENGTH = {
  name: 20,
  email: 100,
  city: 20,
  country: 20
}

export const getUserValidationSchema = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup.number().required()
      })
    }
  }
}

export const addUserValidationSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        name: yup.string().min(MIN_LENGTH.name).max(MAX_LENGTH.name),
        email: yup.string().email().max(MAX_LENGTH.email),
        city: yup.string().min(MIN_LENGTH.city).max(MAX_LENGTH.city),
        country: yup.string().min(MIN_LENGTH.country).max(MAX_LENGTH.country)
      })
    }
  }
}

export const updateUserValidationSchema = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup.number().required()
      })
    },
    body: {
      yupSchema: yup.object().shape({
        name: yup.string().min(MIN_LENGTH.name).max(MAX_LENGTH.name),
        email: yup.string().email().max(MAX_LENGTH.email),
        city: yup.string().min(MIN_LENGTH.city).max(MAX_LENGTH.city),
        country: yup.string().min(MIN_LENGTH.country).max(MAX_LENGTH.country)
      })
    }
  }
}

export const removeUserValidationSchema = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup.number().required()
      })
    }
  }
}
