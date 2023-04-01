
export default function UserPostsMenu({ userPosts }) {
    if (userPosts) {
        return (
            <div className="user-div">
                <h2>User Posts</h2>
                {userPosts.map((post, _) => (
                    <div>
                        <p><b>Title:</b> {post.title}</p>
                        <p><b>Post:</b> {post.body}</p>
                        <hr/>
                    </div>
                ))}
            </div>
        )
    }
}