import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCategoryPostsApi } from '../Profile/profile.api';
import styles from "./foryou.module.css";
import IndividualCategoryInfo from './IndividualCategoryInfo';

const Entertainment = () => {

  const dispatch = useDispatch();
   const categoryPosts = useSelector((state) => state.profile.categoryPosts);
 
   useEffect(()=>{
     dispatch(getCategoryPostsApi("entertainment"));
   },[dispatch])


 
  return (
    <div>
         <div className={styles.imgContent_container}>
         <div className={styles.img_container}>
            <img src="https://images.indianexpress.com/2022/01/shah-rukh-khan-1200-1.jpeg" alt="" />
         </div>
         <div className={styles.content_container}>
            <div className={styles.content_container_title}>
            Entertainment
            </div>
            <div className={styles.content_container_para}>
                Shahrukh Khan shared the teaser of his film Pathan

            </div>
         </div>
      </div>

      <div>
        {categoryPosts.map((individualCategoryInfo) => {
           return  <IndividualCategoryInfo key = {individualCategoryInfo.id} individualCategoryInfo = {individualCategoryInfo} />
        })}
      </div>

    </div>
  )
}

export default Entertainment