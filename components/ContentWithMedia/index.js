import Header from '../CustomHeader'
import Button from "../Buttons";
import Image from "next/image";
import classes from './index.module.scss'
import {addImage} from "../Schema";
import {Individual} from "../Schema/Container";
import PropTypes from "prop-types";

export default function ContentWithMedia({header, buttons, content, featuredImage, textPosition, aspectRatio}) {

  let ratio = ''

  switch (aspectRatio) {
    case 'landscape':
      ratio = classes.ratio16x9
      break
    case 'square':
      ratio = classes.ratio1x1
      break
    default:
      ratio = classes.ratio1x1
      break
  }

  const schema = addImage({image: featuredImage.src})

  if (textPosition === 'Right') {
    return <section className={`${classes.container} max-width`}>
      <Individual schema={schema}/>
      <div className={classes.row}>
        <div className={`${classes.imgContainer}`}>
          <div className={`${classes.imgContained} ${classes.ratio} ${ratio}`}><Image
            src={featuredImage.src}
            alt={featuredImage.altDescription || ``}
            width={featuredImage.width || 640}
            height={featuredImage.height || 360}
            className={classes.image}
          />
          </div>
        </div>
        <div className={classes.text}>
          <Header className={classes.header} headerLevel={header.headerLevel}>{header.headerText}</Header>
          <div className={classes.richText}>
            {content}
          </div>
          {buttons && <div className={classes.cta}><Button buttons={buttons}/></div>}
        </div>
      </div>
    </section>
  } else {
    return <section className={`${classes.container} max-width`}>
      <script type={`application/ld+json`}
              dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
      <div className={classes.reverseRow}>
        <div className={classes.text}>
          <Header className={classes.header} headerLevel={header.headerLevel}>{header.headerText}</Header>
          <div className={classes.richText}>
            {content}
          </div>
          {buttons && <div className={classes.cta}><Button buttons={buttons}/></div>}
        </div>
        <div className={`${classes.imgContainer}`}>
          <div className={`${classes.imgContained} ${classes.ratio} ${ratio}`}>
            <Image
              src={featuredImage.src}
              alt={featuredImage.altDescription || ``}
              width={featuredImage.width || 640}
              height={featuredImage.height || 360}
              className={classes.image}
            />
          </div>
        </div>
      </div>
    </section>
  }
}

ContentWithMedia.propTypes = {
  header: PropTypes.object.isRequired,
  buttons: PropTypes.array,
  content: PropTypes.any.isRequired,
  featuredImage: PropTypes.object.isRequired,
  textPosition: PropTypes.string.isRequired,
  aspectRatio: PropTypes.string.isRequired,
}
