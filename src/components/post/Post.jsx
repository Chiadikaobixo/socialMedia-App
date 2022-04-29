import { MoreVert } from '@mui/icons-material'
import './post.css'

const Post = () => {
    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img className='postProfileImg' src='assets/person/IMG-1.jpg' alt='' />
                        <span className='postUsername'>Xo</span>
                        <span className='postDate'>5 mins ago</span>
                    </div>
                    <div className='postTopRight'>
                        <MoreVert />
                    </div>
                </div>
                <div className='postCenter'>
                    <span className='postText'>This is my First Post</span>
                    <img className='postImg' img src='assets/post/IMG-2.jpg' />
                </div>
                <div className='postBottom'>
                    <div className='postBottomLeft'>
                        <img className='likeIcon' src='assets/like.png' alt='' />
                        <img className='likeIcon' src='assets/heart.png' alt='' />
                        <span className='postLikeCounter'>7 likes</span>
                    </div>
                    <div className='postBottomRight'>
                    <span className='postCommentText'>2 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post