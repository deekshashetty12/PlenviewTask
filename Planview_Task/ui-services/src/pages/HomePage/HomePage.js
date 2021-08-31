import React, { useEffect } from 'react';
import ContentArea from '../../components/ContentArea';
import Comments from '../../components/Comments/Comments';
import './HomePage.scss'

export default function HomePage(props) {
    console.log("HOME PAGE::::::::::::::")
    useEffect(() =>{
        console.log("hhhhhhhhhhhhhhhfetch data")
        props.fetchCommentsAll()
    })
    return (
        <div className='display-images'>
            <ContentArea />
            <Comments />
        </div>
    )
}