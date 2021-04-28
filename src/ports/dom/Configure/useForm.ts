import { useCallback, useState } from "react"
import { configureFailure } from "../../http/services/repositoryService"



export const useForm = () => {
  
   const handleOnFinish = useCallback(
    (formData) => configureFailure(formData.failures),
    [],
  )

  return {
    handleOnFinish,
  }
}