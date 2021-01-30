import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Route,Link} from 'react-router-dom';


const PostsforPlanets =({posts}) =>{
  console.log(posts)
return <ul className="list-group mb-4">
{posts.map(post=>(
  
<li key={post.name} className="list-group-item">{post.name} <Link
                to={{
                  pathname: "/planet",
                  aboutProps: {
                    name: post.name,
                    rotation_period: post.rotation_period,
                    orbital_period: post.orbital_period
                  }
                }}>
              
                <Row><Col ><Button style={{float:"right"}}> show more</Button></Col></Row>
              </Link></li>))}
</ul>}
export default PostsforPlanets;