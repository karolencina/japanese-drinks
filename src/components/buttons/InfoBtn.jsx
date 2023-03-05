import { IoInformationCircle } from "react-icons/io5";
import React from 'react';
import { Link } from 'react-router-dom'

const InfoBtn = () => {

    const handleClick = () => {

    };

    return (
        <Link to='/about'><IoInformationCircle /></Link>
    )
}

export default InfoBtn;
