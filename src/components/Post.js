import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';


function Post({ item }) {

    const [fullCard, setfullCard] = useState(false);
    const [category, setcategory] = useState('');

    const toggleCard = () => {
        setfullCard(!fullCard)
    }

  useEffect(() => {
    
    console.log(item.category)

    if (item.category.__cdata)
    {
        setcategory(item.category.__cdata)
        console.log(item.category)
    }
    else {

        var str = "";
        item.category.map((itm) => 
        {
            str += itm.__cdata + ','
            })

            setcategory(str)

        }
  },[])
  

    return (

        <div style={{ width: '100%', borderBottom: '1px solid #69a8e2', borderRadius: "0px", padding: "10px", marginBottom: "10px", backgroundColor: fullCard ? '#2575c0' : '#ffffff' }}>

            <div style={{ backgroundColor: fullCard ? '#2575c0' : '#ffffff', width: "100%", display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>

                <div style={{ marginLeft: '10px', display: 'inline', width: "35%" , maxWidth : '400px' }}>
                    <h4 style={{ color: fullCard ? '#ffffff' : '#2575c0', fontSize: "15px", fontWeight: '700', letterSpacing: '1px', margin: '0' }}>
                        {item.title}
                    </h4>
                </div>

                <div style={{ display: 'inline', textAlign: 'center' }}>
                    <h3 style={{ color: fullCard ? '#ffffff' : '#2575c0', fontSize: "12px", fontWeight: '700', letterSpacing: '1px', margin: '0' }}>
                        Posted By
                    </h3>
                    <h3 style={{ color: fullCard ? '#ffffff' : '#2575c0', fontSize: "12px", fontWeight: '400', letterSpacing: '1px', margin: '0' }}>
                        {item.creator.__cdata}
                    </h3>

                </div>


                <div style={{ display: 'inline', textAlign: 'center' , maxWidth : '200px' }}>
                    <h3 style={{ color: fullCard ? '#ffffff' : '#2575c0', fontSize: "12px", fontWeight: '700', letterSpacing: '1px', margin: '0' }}>
                        Categories
                    </h3>
                    <h3 style={{ color: fullCard ? '#ffffff' : '#2575c0', fontSize: "10px", fontWeight: '400', letterSpacing: '1px', margin: '0' }}>
                        {category}
                    </h3>
                </div>


                <div style={{ display: 'inline', textAlign: 'center' }}>
                    <h4 style={{ color: fullCard ? '#ffffff' : '#2575c0', fontSize: "12px", fontWeight: '400', letterSpacing: '1px', margin: '0' }}>
                        {moment((item.pubDate).valueOf()).format('LL')}
                    </h4>
                </div>


                <div style={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'space-around' }}>



                    <button onClick={() => { toggleCard() }} style={{ width: "70px", height: '30px', fontSize: '12px', borderRadius: '10px', backgroundColor: fullCard ? '#ffffff' : '#2575c0', border: "none", color: fullCard ? '#2575c0' : '#ffffff' }}>
                        {fullCard ? 'Hide' : 'View'} </button>

                </div>

            </div>

            {fullCard ? <div style={{ display: 'inline', textAlign: 'left', padding: '8px' }}>
                <h4 style={{ color: fullCard ? '#ffffff' : '#2575c0', fontSize: "12px", fontWeight: '700', letterSpacing: '1px', margin: '0', marginLeft: '10px' }}>
                    Description
                </h4>
                <h4 style={{ color: fullCard ? '#ffffff' : '#2575c0', fontSize: "12px", fontWeight: '400', letterSpacing: '1px', margin: '0', marginLeft: '10px' }}>
                    {item.description.__cdata}
                </h4>
            </div> : null}
        </div>
    )
}


export default Post;