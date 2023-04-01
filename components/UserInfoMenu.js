import UserPostsMenu from "./UserPostsMenu";

export default function UserInfoMenu({ userInfo, userPosts, handlePostsButton }) {
    
    if (userInfo) {
        return (
            <div className="user-div">
                <h2>User Info</h2>
                <p><b>Name:</b> {userInfo?.name}</p>
                <p><b>Username:</b> {userInfo?.username}</p>
                <p><b>Email:</b> {userInfo?.email}</p>
                <div className="inner-div"><b>Address:</b>
                    <p><i>Street:</i> {userInfo?.address?.street}</p>
                    <p><i>Suite:</i> {userInfo?.address?.suite}</p>
                    <p><i>City:</i> {userInfo?.address?.city}</p>
                    <p><i>Zipcode:</i> {userInfo?.address?.zipcode}</p>
                    <div><b>Geo:</b>
                        <p><i>Lat:</i> {userInfo?.address?.geo?.lat}</p>
                        <p><i>Lng:</i> {userInfo?.address?.geo?.lng}</p>
                    </div>
                </div>  
                <p><b>Phone:</b> {userInfo?.phone}</p>
                <p><b>Website:</b> {userInfo?.website}</p>
                <div className="inner-div"><b>Company:</b>
                    <p><i>Name:</i> {userInfo?.company?.name}</p>
                    <p><i>Suite:</i> {userInfo?.company?.catchPhrase}</p>
                    <p><i>BS:</i> {userInfo?.company?.bs}</p>
                </div>
                <button type="button" className="posts-button" onClick={() => handlePostsButton(userInfo.id)}>Posts</button>
                <UserPostsMenu userPosts={userPosts} />
            </div>
        )
    }
}