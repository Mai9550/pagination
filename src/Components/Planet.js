import React,{Component} from 'react';
import { useLocation } from "react-router-dom";
export default function Planet(props) {
    const location = useLocation();
	return(
        <div style={{display:'flex',justifyContent:'center'}}>
       
       
        <ul>
        <h1 style={{marginTop:50,marginBottom:100}}>{location.aboutProps.name}</h1>
            <li>
                rotation period: {location.aboutProps.rotation_period}
            </li>
            <li>
                orbital period: {location.aboutProps.orbital_period}
            </li>
        </ul>
    </div>)}
   