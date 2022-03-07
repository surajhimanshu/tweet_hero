
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCategoryPostsApi } from '../Profile/profile.api';
import styles from "./foryou.module.css";
import IndividualCategoryInfo from './IndividualCategoryInfo';

 const ForYou = () => {
   const dispatch = useDispatch();
  const categoryPosts = useSelector((state) => state.profile.categoryPosts);

  useEffect(()=>{
    dispatch(getCategoryPostsApi("ForYou"))
  },[dispatch])

  // console.log(categoryPosts);
     
  return (
    <div>
       <div className={styles.imgContent_container}>
         <div className={styles.img_container}>
            <img src="https://pbs.twimg.com/semantic_core_img/1499721802213310466/CnkglllS?format=jpg&name=small" alt="" />
         </div>
         <div className={styles.content_container}>
            <div className={styles.content_container_title}>
               War in Ukraine . LIVE

            </div>
            <div className={styles.content_container_para}>
            Russia announces a ceasefire to allow humanitarian corridors in Mariupol and Volnovakha
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

export default ForYou

