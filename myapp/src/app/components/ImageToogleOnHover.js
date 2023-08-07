"use client"
import { useRef } from "react";
import React from 'react';

const ImageToogleOnHover = ({ primary, secondary }) => {
    const imageRef = useRef(null)
    return (
        <div>
            <img onMouseOver={() => {
                imageRef.current.src = secondary
            }} onMouseOut={() => {
                imageRef.current.src = primary
            }}
                src={primary} ref={imageRef} />

        </div>
    );
}

export default ImageToogleOnHover;
