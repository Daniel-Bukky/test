import {IPost} from "../../../interfaces/IPost"
import React from "react"
export function Post({post} : {post: IPost}):React.JSX.Element{


    return(
        <div>
            {/* <p>id: {post.id}</p>
            <p>userId : {post.userId}</p> */}
            <p>title:{post.title}</p>
            <p>{post.body}</p>
        </div>
    )
}