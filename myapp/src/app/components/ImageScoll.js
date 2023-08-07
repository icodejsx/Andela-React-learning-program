"use client"
import { useEffect, useRef, useState } from "react";
import React from 'react';


const ImageScoll = ({ secondary, primary }) => {
    const imageRef = useRef(null)

    const isInView = () => {
        const rect = imageRef.currentRect.getBoundingClientReact()
        return rect.top >= 0 && rect.bottom <= window.innerHeight
    }

    const [inView, setInVew] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", scrollhandler)
        return () => {
            window.removeEventListener("scroll", scrollhandler)

        }
    }, [])

    const scrollhandler = () => {
        setInVew(isInView())
    }

    return (
        <div>
            <img
                src={primary} ref={imageRef} />
        </div>
    );
}

export default ImageScoll;
