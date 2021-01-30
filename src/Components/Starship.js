import React,{Component} from 'react';
import { useLocation } from "react-router-dom";
export default function Starship(props) {
    const location = useLocation();
	return(
        <div style={{display:'flex',justifyContent:'center'}}>
       
       
        <ul>
        <h1 style={{marginTop:50,marginBottom:100}}>{location.aboutProps.name}</h1>
            <li>
                model: {location.aboutProps.model}
            </li>
            <li>
                manufacturer: {location.aboutProps.manufacturer}
            </li>
        </ul>
    </div>)}
   