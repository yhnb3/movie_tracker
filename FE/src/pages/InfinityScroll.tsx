/* eslint-disable no-underscore-dangle */
import * as React from 'react'
import { throttle } from 'lodash';

interface Props {
  isLoading: boolean,
  size: number,
  setSize: (size: number) => void,
  children: React.FC
}
const InfinityScroll = ({isLoading, setSize, size, children} : Props) => {
  
  const _throttle = throttle((e) => {
  
    if (isLoading) return;
    if (
      e.target.scrollingElement.scrollHeight <=
      window.scrollY + window.innerHeight
    ) {
      setSize(size + 1);
    }
  }, 500);
  const throttling = React.useCallback(_throttle, [size]);

  React.useEffect(() => {
    window.addEventListener('scroll', throttling);

    return () => {
      window.removeEventListener('scroll', throttling);
      throttling.cancel();
    };
  }, [size]);
 
  if (isLoading) return <></>
  return children
}

export default InfinityScroll