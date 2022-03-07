import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { getCategoryPostsApi } from '../Profile/profile.api';
import IndividualCategoryInfo from './IndividualCategoryInfo';
import styles from "./foryou.module.css";



const Covid = () => {
  const dispatch = useDispatch();
  const categoryPosts = useSelector((state) => state.profile.categoryPosts);
 
  useEffect(()=>{
    dispatch(getCategoryPostsApi("covid19"))
  },[dispatch])

  return (
    <div>
        <div className={styles.imgContent_container}>
         <div className={styles.img_container}>
            <img src="https://pbs.twimg.com/semantic_core_img/1436311725410717703/HY5Vd6sQ?format=jpg&name=240x240" alt="" />
         </div>
         <div className={styles.content_container}>
            <div className={styles.content_container_title}>
                COVID-19 . LIVE
            </div>
            <div className={styles.content_container_para}>
                COVId-19 in India
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

export default Covid