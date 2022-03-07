import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCategoryPostsApi } from '../Profile/profile.api';
import styles from "./foryou.module.css";
import IndividualCategoryInfo from './IndividualCategoryInfo';

const News = () => {
  const dispatch = useDispatch();
  const categoryPosts = useSelector((state) => state.profile.categoryPosts);

  useEffect(()=>{
    dispatch(getCategoryPostsApi("news"))
  },[dispatch])
  return (
    <div>
       <div className={styles.imgContent_container}>
         <div className={styles.img_container}>
            <img src="https://pbs.twimg.com/semantic_core_img/1500060124664111106/ENMzEMn5?format=jpg&name=small" alt="" />
         </div>
         <div className={styles.content_container}>
            <div className={styles.content_container_title}>
                War in Ukraine . LIVE
            </div>
            <div className={styles.content_container_para}>
            Russia not observing temporary ceasefire as attacks continue on evacuation route
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

export default News