import * as React from 'react'
import SearchContent from './searchContent'
import Pagination from './pagination'

interface Content {
  name? : string,
  title? : string,
  id: string,

}

interface Props {
  contents : Array<Content>,
  currentPage: number,
  totalPage: number,
  setCurrentPage: void
}

const ContentSearchResult: React.FC<Props> = ({contents, currentPage, totalPage, setCurrentPage } : Props) =>
    <div>
      {contents.map((element: Content) => (
        <SearchContent key={element.id} content={element} />
      ))}
      {totalPage > 1 ? (
        <Pagination
          page={currentPage}
          totalPage={totalPage}
          onChangePage={setCurrentPage} />
      ) : (
        <></>
      )}
    </div>

export default ContentSearchResult