import React from 'react'
import { Link } from "react-router-dom";

const PaymentFailure = () => {
    return (
        <div>
            <h2>Payment Failed</h2>
            <p>unfortunitely payment has failed</p>
            <Link to='/confirm'>Try Again</Link>
        </div>
    )
}

export default PaymentFailure