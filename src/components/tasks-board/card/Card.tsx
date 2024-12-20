import React from 'react'
import styles from './Card.module.scss'
import { LinkIcon } from '../../../icons/link.icon'
import { PaperClipIcon } from '../../../icons/paper-clip.icon'
import { CommentIcon } from '../../../icons/comment.icon'
import { Task } from '../../../pages/home/home.interface'
import { Badge } from 'react-bootstrap'

export const Card = ({
  title,
  createdBy,
  createdAt,
  description,
  imgUrl,
  fileUrl,
  tags,
  link,
  comments,
}: Task) => {
  return (
    <div className={styles.cardBlock}>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardMeta}>
          <span className={styles.time}>{createdAt}</span>
          <span>&#8226;</span>
          <span className={styles.createdBy}>Created by {createdBy}</span>
        </div>
        <p className={styles.description}>{description} </p>
        <div className={styles.imagePlaceholder}>
          <img src={imgUrl} alt="Loaded" className={styles.loadedImage} />
        </div>
        <div className={styles.linksSection}>
          <div className={styles.linkWrapper}>
            <LinkIcon />
            <a className={styles.ellipsisText} target="_blank" href={link} rel="noreferrer">
              {link}
            </a>
          </div>
          <div className={styles.linkWrapper}>
            <PaperClipIcon />
            <a className={styles.ellipsisText}>{fileUrl}</a>
          </div>
        </div>
        <div className={styles.tagSection}>
          {tags.map(({ text, type }, index) => (
            <Badge bg={type} className={styles.tagDesign} key={index}>
              {text}
            </Badge>
          ))}
        </div>
      </div>
      <div className={styles.cardComments}>
        <CommentIcon />
        <div className={styles.amountComments}>{comments.length}</div>
      </div>
    </div>
  )
}
