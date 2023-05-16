// import React from 'react'

import { Link } from "react-router-dom"

const Post = () => {
  return (
    <div className="post grid md:grid-cols-2 ">
      <div className="left-box mb-2 md:mb-0 pr-2">
        <img src="https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2023/sports/JYCvsMMC20230514U8A2315-1684114840.jpg&w=900&height=601" alt="article"/>
      </div>
      <div className="right-box pl-2">
        <div className="title">
          <h1 className="text-xl font-bold dark:text-white">Jawalakhel drop points against Manang</h1>
        </div>
        <div className="date py-1">
          <p className="italic text-slate-500">Post-Date:<span>2023/05/15</span></p>
        </div>
        <div className="info">
          <p className="dark:text-white">Leaders Jawalakhel Youth Club missed their opportunity to stretch the gap on top of the Martyrs Memorial A-Division League after they threw away a two-goal lead to draw 2-2 against Manang Marshyangdi Club at the Chyasal Stadium.</p>
        </div>
        <div className="author flex justify-between pt-1">
          <p className="text-[#6C9BCF] font-semibold">Author:Nepali Post</p>
          <Link to="" className="text-[#FF6D60] font-semibold pr-2 underline">See more</Link>
        </div>
      </div>
    </div>
  )
}

export default Post