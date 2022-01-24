import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux';


interface Props {
  target: any,
  patchData: (id?: Number) => void,
  id? : Number,
  location: any,
}

interface Variable {
  loading: boolean, 
  hasErrors: boolean, 
  data: any
}

const useFetchData: any = ({...props} : Props) => {
  const dispatch = useDispatch()
  const { id, patchData, location, target } = props
  const { loading, hasErrors, data } : Variable = useSelector(target);

  React.useEffect(() => {
    if (id === undefined) {
      dispatch(patchData())
    } else {
      dispatch(patchData(props.id))
    }
  }, [location])

  if (loading) return {loading: true}
  if (hasErrors) return {hasErrors: true}
  return {data}
}

export default useFetchData