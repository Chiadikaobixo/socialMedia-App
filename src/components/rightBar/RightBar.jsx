import './rightBar.css'

const RightBar = () => {
    return (
        <div className='rightbar'>
            <div className='rigtbarWrapper'>
                <div className='birthdayContainer'>
                    <img className='birthdayImg' src='assets/person/IMG-1.jpg' alt='' />
                    <span className='birthdayText'>
                        <b>Chiadikaobi</b> and <b>3 other friends</b>  have a birthdau today
                    </span>
                </div>
                <img className='rightbarAd' src='assets/person/IMG-1.jpg' alt='' />
                <h4 className='rightbarTitle'>Online friends</h4>
                <ul className='rightbarFriendList'>
                    <li className='rightbarFriend'>
                        <div className='rightbarProfileImgContainer'>
                            <img className='rightbarProfileImg' src='assets/person/IMG-1.jpg' alt='' />
                            <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'>Franchise xo</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RightBar