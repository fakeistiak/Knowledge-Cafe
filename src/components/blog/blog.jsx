import PropTypes from 'prop-types'
import { FaBookmark} from 'react-icons/fa'
const Blog = ({ blog }) => {
    const { title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='h-96 w-full mb-8' src={cover} alt={`cover picture of title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex '>
                    <img className='w-14 rounded-3xl' src={author_img} alt="" />
                
                <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                    </div>
                    </div>
                <div>
                    <span>{reading_time}min read</span>
                    <button className='ml-2 font-'><FaBookmark/></button>
                </div>
                
               
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}> <a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired
}

export default Blog;