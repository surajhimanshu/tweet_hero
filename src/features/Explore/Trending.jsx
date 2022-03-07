import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { getCategoryPostsApi } from '../Profile/profile.api.js';
import IndividualCategoryInfo from './IndividualCategoryInfo';

const Trending = () => {

  const dispatch = useDispatch();
  const categoryPosts = useSelector((state) => state.profile.categoryPosts);
 
  useEffect(()=>{
    dispatch(getCategoryPostsApi("trending"))
  },[dispatch])

  return (
    <div>
      <div style={{margin:"5% 0 5%  4%", fontSize:"1.4em",fontWeight:"bold"}}>
            India Trends
      </div>

      <div>
        {categoryPosts.map((individualCategoryInfo) => {
           return  <IndividualCategoryInfo key = {individualCategoryInfo.id} individualCategoryInfo = {individualCategoryInfo} />
        })}
      </div>
      </div>
  )
}

export default Trending