import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCategoryPostsApi } from '../Profile/profile.api';
import styles from "./foryou.module.css";
import IndividualCategoryInfo from './IndividualCategoryInfo';


const Sports = () => {
  

  const dispatch = useDispatch();
  const categoryPosts = useSelector((state) => state.profile.categoryPosts);

  useEffect(()=>{
    dispatch(getCategoryPostsApi("sports"))
  },[dispatch])

  return (
    <div>
       <div className={styles.imgContent_container}>
         <div className={styles.img_container}>
            <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/000_9L476V_1200x768.jpeg?85wg5WEKD9C3TUYhWiKPGE21.iR33s4Y&size=770:433" alt="" />
         </div>
         <div className={styles.content_container}> 
            <div className={styles.content_container_title} style={{fontWeight:"bold" ,fontSize:"1.2em"}}>
                India vs Sri Lanka . LIVE
            </div>
            <div className={styles.content_container_para} style={{fontWeight:"bolder",fontSize:"1.4em"}}>
            INDvSL: India and Sri Lanka face off in the first Test
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

export default Sports