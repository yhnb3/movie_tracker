import axios from 'axios'
import useSWR from 'swr'


interface Props {
  urls: Array<string>,
}


const useFetchData: any = ({...props} : Props) => {
  const fetcher = (urls : Array<string>) => {
    const f = (url : string) => axios.get(url).then((res) => res.data)
    return Promise.all(urls.map(f))
  };
  const { data, error } = useSWR(
    [props.urls],
    fetcher,
  );

  if (!error && !data) return {loading: true}
  if (error) return {hasErrors: true}
  return {data}
}

export default useFetchData