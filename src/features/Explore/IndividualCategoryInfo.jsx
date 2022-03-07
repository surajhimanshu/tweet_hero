import React from 'react';
import styles from "./individualcategoryinfo.module.css"

const IndividualCategoryInfo = ({individualCategoryInfo:post}) => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            {post.content}
        </div>
       <div className={styles.image_container}>
           <img src={post.avatar} alt="" />
       </div>
    </div>
  )
}

export default IndividualCategoryInfo