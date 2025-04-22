import React from 'react'
import styles from './MenuItem.module.scss'
import cn from 'classnames'

export type MenuItemProps = {
  title: string
  className?: string
  counter?: number
  children: React.JSX.Element
  isActive: boolean
  onClick: () => void
  size?: 'small' | 'medium'
  isClickable?: boolean
}

export const MenuItem = ({
  title,
  className,
  counter,
  children,
  isActive,
  onClick,
  size = 'medium',
  isClickable = true,
}: MenuItemProps) => {
  return (
    <div
      className={cn(styles.menuItemWrapper, className, {
        [styles.menuItemActive]: isActive,
        [styles.smallItem]: size === 'small',
        [styles.mediumItem]: size === 'medium',
        [styles.pointerCursor]: isClickable,
      })}
      onClick={onClick}
    >
      <div className={styles.contentButton}>
        <div className={styles.leftContentButton}>
          {children}
          <span className={cn(styles.buttonText, { [styles.buttonTextActive]: isActive })}>
            {title}
          </span>
        </div>

        {Boolean(counter) && (
          <div
            className={cn(styles.buttonCounter, {
              [styles.buttonCounterActive]: isActive,
            })}
          >
            <div className={cn(styles.counterText, { [styles.counterTextActive]: isActive })}>
              {counter}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
