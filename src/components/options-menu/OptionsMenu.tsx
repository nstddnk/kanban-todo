import React, { useEffect, useRef, useState } from 'react'
import { ThreeDotsIcon } from '../../icons/three-dots.icon'
import styles from './OptionsMenu.module.scss'
import { MenuItem } from '../common/menu-item/MenuItem'
import { EditIcon } from '../../icons/edit.icon'
import { DeleteIcon } from '../../icons/delete.icon'
import cn from 'classnames'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../../store/slices/tasksSlice'
import { TaskModal } from '../task-modal/TaskModal'

enum MenuActionsEnum {
  Delete = 'delete',
  Edit = 'edit',
}

type OptionMenuProps = {
  cardId: string
}

export const OptionsMenu = ({ cardId }: OptionMenuProps) => {
  const dispatch = useDispatch()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        event.target instanceof Node &&
        !modalRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const menuItems = [
    {
      Icon: <EditIcon />,
      title: 'Edit',
      action: MenuActionsEnum.Edit,
    },
    {
      Icon: <DeleteIcon />,
      title: 'Delete',
      action: MenuActionsEnum.Delete,
    },
  ]

  const handleMenuItemClick = (action: MenuActionsEnum) => () => {
    if (action === MenuActionsEnum.Delete) {
      dispatch(deleteTask(cardId))
    }
    if (action === MenuActionsEnum.Edit) {
      setEditingId(cardId)
      toggleMenu()
      // dispatch(setEditingTaskId(cardId))
    }
  }

  return (
    <div className={cn(styles.wrapper, { [styles.isActiveMenu]: isMenuOpen })} ref={modalRef}>
      <button className={styles.dotsButton} type="button" onClick={toggleMenu}>
        <ThreeDotsIcon />
      </button>
      {isMenuOpen && (
        <div className={cn(styles.menuItems, { [styles.show]: isMenuOpen })}>
          {menuItems.map(({ Icon, action, ...item }, index) => (
            <React.Fragment key={index}>
              <MenuItem
                className={styles.menuItem}
                size="small"
                {...item}
                isActive={false}
                onClick={handleMenuItemClick(action)}
              >
                {Icon}
              </MenuItem>
              {index !== menuItems.length - 1 && <div className="border-top" />}
            </React.Fragment>
          ))}
        </div>
      )}
      {editingId && <TaskModal onClose={() => setEditingId(null)} editingId={editingId} />}
    </div>
  )
}
