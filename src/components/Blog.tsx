
import PaginationControlled from "./Pagination"
import blog from "../Blog/blog.json"
import  { useState } from "react"

interface BlogPost{
    id: number,
    title: string,
    content: string
}

interface BlogPosts{
    posts: BlogPost[]
}



function Blog(){
    const postsPerPage = 1
    const [currentPage, setCurrentPage] = useState(1)
    // const totalPost = blog.posts.length
    // const totalPages = Math.ceil(totalPost / postsPerPage)

    
    const startIndex = (currentPage - 1) * postsPerPage
    const endIndex = startIndex + postsPerPage
    
    const currentPost = blog.posts.slice(startIndex, endIndex) 
    // console.log(totalPages, totalPost, currentPost)


    return (
        <div>
            <h1>My Blog</h1>
            {currentPost.map((post, id:number) => <div key={id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </div>)}
        <PaginationControlled count={3} spacing={2} setCurrentPage={setCurrentPage} page={currentPage}/>
        </div>
    )
}
export default Blog