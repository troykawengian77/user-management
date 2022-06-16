import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import BackIcon from "@material-ui/icons/ArrowBack";

const Details = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [item, setItem] = useState(null);

    useEffect(() => {
        setItem(location.state)
    }, []);


    return (
        <div style={{ padding: 20 }}>
            <div>
                <button
                    onClick={() => navigate(-1)}
                    style={{ background: 'none', border: 'none', color: '#037A9C', display: 'flex', alignItems: 'center', marginBottom: 20 }}>
                    <BackIcon />
                    Back
                </button>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '90%', alignItems: 'center', padding: 50, float: 'left', border: '',
                    webkitBoxShadow: "0px 0px 5px 0px #037A9C",
                    mozBoxShadow: "0px 0px 5px 0px #037A9C",
                    boxShadow: "0px 0px 5px 0px #037A9C",
                    borderRadius: 5,
                }}>
                <div style={{ width: '15%' }}>
                    <img src={location.state.image} />
                </div>
                <div style={{ width: '10%' }}>
                    <h5>Name</h5>
                    <h5>Gender</h5>
                    <h5>Email</h5>
                    <h5>Phone</h5>
                    <h5>Cellular</h5>
                </div>
                <div style={{ width: '30%' }}>
                    <h5 style={{ fontWeight: 'bold' }}>: {location.state.name}</h5>
                    <h5 style={{ fontWeight: 'bold' }}>: {location.state.gender}</h5>
                    <h5 style={{ fontWeight: 'bold' }}>: {location.state.email}</h5>
                    <h5 style={{ fontWeight: 'bold' }}>: {location.state.phone}</h5>
                    <h5 style={{ fontWeight: 'bold' }}>: {location.state.cell}</h5>
                </div>
            </div>
        </div>
        </div >
    )
}

const styles = {
    boxShadow: {
        webkitBoxShadow: "1px 3px 1px #9E9E9E",
        mozBoxShadow: "1px 3px 1px #9E9E9E",
        boxShadow: "1px 3px 1px #9E9E9E"

    }
};

export default Details