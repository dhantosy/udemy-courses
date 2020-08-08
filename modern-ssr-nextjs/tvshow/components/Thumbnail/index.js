import styles from './Thumbnail.module.scss'
import Link from 'next/link'

const Thumbnail = ({ 
  imageUrl = 'https://via.placeholder.com/210x295', 
  caption,
  href = '',
  as = '',
}) => (
  <div className='thumbnail'>
    <Link href={href} as={as}>
      <a>
        <img src={imageUrl} alt={caption} className={styles.thumbnail__image} />
        <h4 className={styles.thumbnail__caption}>{caption}</h4>
      </a>
    </Link>
  </div>
)

export default Thumbnail
