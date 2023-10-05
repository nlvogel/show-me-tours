import Link from "next/link";
import styles from './PostCard.module.css'
import moment from "moment/moment";

export default function PostCard({slug, title, caption, cloudinary_image, classes, rounded, featured, publishedAt}) {
  return <div className={`${styles.postContainer} ${classes}`}>
    <Link href={`/blog/${slug}`}>
      {featured && <small className={`featured-flag`}>FEATURED</small>}
      <div className={`title-overlay ${rounded ? `title-overlay-rounded` : undefined}`}>
        <div className={styles.titleSection}>
          <h3>{title}</h3>
          <small>{moment(publishedAt).format('MMMM Do, YYYY')}</small>
        </div>
      </div>
      <img className={`image-16x9 ${rounded ? `rounded` : ''} blog-image`} alt={caption}
           width={cloudinary_image._meta.width}
           height={cloudinary_image._meta.height}
           src={cloudinary_image._meta.secure_url}/>
    </Link>
  </div>
}

export function PostCardWithDescription({
                                          slug,
                                          title,
                                          caption,
                                          cloudinary_image,
                                          classes,
                                          rounded,
                                          featured,
                                          description,
                                          publishedAt
                                        }) {
  return <div className={`${styles.postContainer} ${classes}`}>
    <Link className={`${styles.postContainerWithDescription} ${rounded ? 'rounded' : ''}`} href={`/blog/${slug}`}>
      {featured && <small className={`featured-flag`}>FEATURED</small>}
      <img className={`image-16x9 ${rounded ? styles.roundedImage : ''} ${styles.blogImage}`} alt={caption}
           width={cloudinary_image._meta.width}
           height={cloudinary_image._meta.height}
           src={cloudinary_image._meta.secure_url}/>
      <div className={styles.blogData}><h3 className={styles.blogTitle}>{title}</h3>
        <small>{moment(publishedAt).format('MMMM Do, YYYY')}</small>
        <p>{description}</p></div>
    </Link>
  </div>
}
