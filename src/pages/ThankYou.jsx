import React from 'react'
import { Link } from "react-router-dom";

const ThankYou = () => {
    return (
        <>
            <div className="container text-center my-5">
                <h2>Payment Successfull</h2>
                <p>Your Order Has Been Placed Sucessfully. Thank You</p>
                <Link to='/' className='' ></Link>
            </div>
        </>
    )
}

export default ThankYou