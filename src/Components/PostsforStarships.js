import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Route,Link} from 'react-router-dom';

import Starship from './Starship'
const PostsforStarships =({posts}) =>{
  console.log(posts)
return <ul className="list-group mb-4">
{posts.map(post=>(
  
<li key={post.name} className="list-group-item">{post.name} <Link
                to={{
                  pathname: "/starship",
                  aboutProps: {
                    name: post.name,
                    model: post.model,
                    manufacturer: post.manufacturer
                  }
                }}>
              
                <Row><Col ><Button style={{float:"right"}}> show more</Button></Col></Row>
              </Link></li>))}
</ul>}
export default PostsforStarships;