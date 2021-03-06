import * as React from 'react'

import {DropMenu} from '../../component'

interface Menu {
  url: string, 
  name: string,
}

interface Props {
  showMenu: (category: string) => void,
  hideMenu: (category: string) => void,
  isVisible: boolean,
  category: string,
  name: string,
  menus: Array<Menu>
}

const HeaderBtn : React.FC<Props> = ({showMenu, hideMenu, isVisible, category, name, menus}:Props) => (
  <div
    className="flex h-full items-center mobile:hidden"
    data-name={category}
    onMouseOver={() => showMenu(category)}
    onFocus={() => showMenu(category)}
    onMouseOut={() => hideMenu(category)}
    onBlur={() => hideMenu(category)}
  >
    <button className="mr-12 font-bold text-white text-xl" type="button">
      {name}
    </button>
    <DropMenu
      category={category}
      menus={menus}
      isVisible={isVisible}
    />
  </div>
  )

export { HeaderBtn as default }