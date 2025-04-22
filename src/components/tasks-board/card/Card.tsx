import React from 'react'
import styles from './Card.module.scss'
import { LinkIcon } from '../../../icons/link.icon'
import { Badge } from 'react-bootstrap'
import { Task } from '../task.interface'
import { OptionsMenu } from '../../options-menu/OptionsMenu'
import { useDrag } from 'react-dnd'

export const Card = ({
  title,
  createdBy,
  createdAt,
  description,
  tags,
  link,
  imgUrl,
  id,
}: Task) => {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: 'random',
      item: { id },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [title, 'random'],
  )

  return (
    <div className={styles.cardBlock} ref={drag} style={{ opacity }}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <OptionsMenu cardId={id} />
        </div>
        <div className={styles.cardMeta}>
          <span className={styles.time}>{createdAt}</span>
          <span>&#8226;</span>
          <span className={styles.createdBy}>Created by {createdBy}</span>
        </div>
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>{description} </p>
        </div>

        {imgUrl && (
          <div className={styles.imagePlaceholder}>
            <img src={imgUrl} alt="Loaded" className={styles.loadedImage} />
          </div>
        )}
        {link && (
          <div className={styles.linksSection}>
            <div className={styles.linkWrapper}>
              <LinkIcon />
              <a className={styles.ellipsisText} target="_blank" href={link} rel="noreferrer">
                {link}
              </a>
            </div>
          </div>
        )}
        <div className={styles.tagSection}>
          {tags?.map(({ text, type }, index) => (
            <Badge bg={type} key={index}>
              {text}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
