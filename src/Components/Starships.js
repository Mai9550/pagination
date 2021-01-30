import React,{useState,useEffect} from 'react'

import Posts from './PostsforStarships'
import Pagination from 'react-bootstrap/Pagination'
import PostsforStarships from './PostsforStarships';
const Starships = () =>{
    const [posts,setPosts]=useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage]=useState(10);
    useEffect(()=>{
        
         ;(async () => {
            let nextPage = 'https://swapi.py4e.com/api/starships/'
        
            let all = []
        
            while(nextPage) {
                const res = await fetch(nextPage)
        
                const { next, results } = await res.json()
        
                nextPage = next
        
                all = [...all, ...results]
                
            }
        setPosts(all)
            console.log(all.length)
            console.log(all)
        })()
        
        
            
        
        
    },[])
    console.log(posts)
    const paginate =(number)=>{setCurrentPage(number)}
    
    let items = [];
    for (let number = 1; number <= Math.ceil(posts.length/postsPerPage); number++) {
      items.push(
        <Pagination.Item key={number}  onClick={()=>{paginate(number)}}>
          {number}
        </Pagination.Item>,
      );
    }
    const indexofLastPost=currentPage*postsPerPage;
    const indexofFirstPost=indexofLastPost-postsPerPage;
    const currentPosts=posts.slice(indexofFirstPost,indexofLastPost);
    return(
<div className="container mt-5">
<h1>Starships</h1>
<PostsforStarships posts={currentPosts}/>
<Pagination>{items}</Pagination>
</div>

    );
};
export default Starships;