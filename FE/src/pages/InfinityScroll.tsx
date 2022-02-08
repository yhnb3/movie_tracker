/* eslint-disable no-underscore-dangle */
import * as React from 'react'
import { throttle } from 'lodash';

interface Props {
  isLoading: boolean,
  size: number,
  setSize: (size: number) => void,
  children: React.FC,
  dataLen: number
}
const InfinityScroll = ({isLoading, setSize, size, children, dataLen} : Props) => {
  const _throttle = throttle((e) => {
    if (
      e.target.scrollingElement.scrollHeight - 300 <=
      window.scrollY + window.innerHeight
    ) {
      setSize(size + 1);
    }
  }, 500);
  const throttling = React.useCallback(_throttle, [size]);

  React.useEffect(() => {
    window.addEventListener('scroll', throttling);

    return () => {
      console.log('is removed?')
      window.removeEventListener('scroll', throttling);
      throttling.cancel();
    };
  },[dataLen]);
 
  if (isLoading) return <></>
  return children
}

export default InfinityScroll