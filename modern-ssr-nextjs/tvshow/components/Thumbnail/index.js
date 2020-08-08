import styles from './Thumbnail.module.scss'
import Link from 'next/link'

const Thumbnail = ({ 
  imageUrl = 'https://via.placeholder.com/210x295', 
  caption,
  href = '',
  as = '',
  small = false
}) => (
  <div className='thumbnail'>
    <Link href={href} as={as}>
      <a>
        <img src={imageUrl} alt={caption} className='thumbnail__image' />
        <h4 className='thumbnail__caption'>{caption}</h4>
      </a>
    </Link>

    <style jsx>
      {`
        .thumbnail__image {
          width: ${small ? '100px' : '100%'};
        }

        .thumbnail__caption {
          text-align: center;
          padding: 10px;
        }
      `}
    </style>
  </div>
)

export default Thumbnail
