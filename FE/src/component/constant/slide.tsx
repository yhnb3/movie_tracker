import * as React from 'react'

interface Props {
  Content: React.FC,
  contents: Array<any>
}

const Slide : React.FC<Props> = ({Content, contents} : Props) => {
  const [isScrolling, setIsScrolling] = React.useState<boolean>(false);

  const scrollRef = React.useRef<HTMLInputElement>()

  const handleScroll = () => {
    if (scrollRef.current.scrollLeft === 0) {
      setIsScrolling(false);
    } else {
      setIsScrolling(true);
    }
  };

  return <div className="relative">
    <div
      className="relative scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full overflow-y-hidden overflow-x-auto whitespace-nowrap h-list"
      ref={scrollRef}
      onScroll={() => handleScroll()}
    >
      {contents.map((content) => (
        <div className="inline-flex px-5" key={content.id}>
          {/* <Content content={content} /> */}
        </div>
      ))}
    </div>
    <div
      className={`z-20 h-list w-20 absolute bottom-0 right-0 ${
        isScrolling
          ? ''
          : 'bg-gradient-to-r from-whiteOp0 via-whiteOp50 to-whiteOp100'
      }`}
    />
    </div>
}

export { Slide as default }