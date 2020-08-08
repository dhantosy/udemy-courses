import styles from './Thumbnail.module.scss'

const Thumbnail = ({ imageUrl = 'https://via.placeholder.com/210x295', caption}) => {
  return (
    <div className='thumbnail'>
      <img src={imageUrl} alt={caption} className={styles.thumbnail__image} />
      <h4 className={styles.thumbnail__caption}>{caption}</h4>
    </div>
  )
}

export default Thumbnail
