import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Proptypes from 'prop-types'

const Blogs = ({handleAddToBookmark,handleMarksAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
        .then(data=>setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog key={Blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark} handleMarksAsRead={handleMarksAsRead}></Blog>)
            }
        </div>
    ); 
};
 
Blogs.prototypes = {
    handleAddToBookmark: Proptypes.func,
    handleMarksAsRead:Proptypes.func
}
 
 export default Blogs;