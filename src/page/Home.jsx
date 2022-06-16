import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [arrItem, setArrayItem] = useState([]);
    const navigate = useNavigate()

    const columns = [
        {
            name: "image",
            label: null,
            options: {
                filter: false,
                customBodyRender: (val) => {
                    return (
                        <img src={val} />
                    )
                }
            }
        },
        { name: "name", label: "Name" },
        { name: "gender", label: "Gender" },
        { name: "email", label: "Email" },
        { name: "phone", label: "Phone" },
        { name: "cell", label: "Cellular" },
        {
            name: "detail",
            label: "",
            options: {
                filter: false,
                customBodyRender: (value) => {
                    return (
                        <button style={{backgroundColor: '#037A9C', border: 'none', padding: 10, color: 'white', width: 75, borderRadius: 5}} onClick={() => handleDetail(value)}>
                            Details
                        </button>
                    )
                }
            }
        },
    ];

    useEffect(() => {
        fetchData()
        setInterval(() => {
            fetchData()
        }, 10000);    
    }, []);

    const handleDetail = (data) => {
        console.log(data)
        navigate('details', { state: data })
    }

    const fetchData = () => {
        axios.get(`https://randomuser.me/api/?results=20`)
            .then(res => {
                const resp = res.data.results
                let arrData = []
                resp.map((item, key) => {
                    let data = {
                        image: item.picture.thumbnail,
                        name: item.name.title + ". " + item.name.first + " " + item.name.last,
                        gender: item.gender,
                        email: item.email,
                        phone: item.phone,
                        cell: item.cell,
                        detail: {
                            image: item.picture.large,
                            name: item.name.title + ". " + item.name.first + " " + item.name.last,
                            gender: item.gender,
                            email: item.email,
                            phone: item.phone,
                            cell: item.cell,
                        }
                    }
                    arrData.push(data)
                })
                setArrayItem(arrData)
            })
    }

    return (
        <div style={{ maxWidth: "100%", padding: 20 }}>
            <MUIDataTable
                title={"Employee List"}
                data={arrItem}
                columns={columns}
                options={{
                    selectableRows: false,
                    download: false,
                    print: false,
                    viewColumns: false
                }}
            />
        </div>
    )
}

export default Home