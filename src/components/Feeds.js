import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetchFeeds } from './Fetch'
import fs from "fs";
import { parseString } from "xml2js";
import Post from './Post'
import moment from 'moment';

function Feeds() {

    const [feeds, setfeeds] = useState([]);
    const [searchKey, setsearchKey] = useState('');


    useEffect(() => {

        var xml = fetchFeeds();
        var json = {}
        parseString(xml, function (err, results) {
            // parsing to json
             json = JSON.stringify(results);
        });

        setfeeds(json.rss.channel.item);

    }, [])

    return (
        <div style={{ width: '100%', height: '100%' }}>

            <TopBar heading={'Dwinnex Feed'} searchKey={searchKey} setsearchKey={setsearchKey} />
            
            {/* Results */}
            {
                    <div style={{ height: '70%', maxHeight: '70vh', margin: '10px', display: 'flex', flexWrap: 'wrap', overflowY: 'scroll', justifyContent: 'flex-start', padding: '10px' }}>
                        {
                            feeds.length == 0 ?
                                <p style={{ textAlign: 'center', marginTop: '22%', color: '#2575c0' }}> No results found </p> :
                                feeds.map((item) => {

                                    if (searchKey == '' || item.title.toLowerCase().includes(searchKey.toLowerCase())) {
                                                return <Post item={item} />
                                    }
                                    else {
                                        return null
                                    }

                                }

                                )
                        }

                    </div>

            }




        </div>
    )
}


function TopBar({heading , searchKey , setsearchKey}) {


    return (
        <div style={{backgroundColor : '#ffffff' , width : '100%' , height : '100px' , display : 'flex' , flexDirection : 'row' , justifyContent : 'space-between' , alignItems : 'center'}}>
           
            <div style={{marginLeft : '38%' , display : 'flex' , flexDirection : 'row' , justifyContent : 'space-between' , alignItems : 'center'}}>
            <p style={{color : '#2575c0' , fontSize : '30px' , fontWeight : 'bold' , letterSpacing : '3px'}}> {heading.toUpperCase()} </p>
            </div>

              {/* Selectors */}
               { <div style={{marginRight : '15px'}}>
               <input style={{height : '28px',  width: '180px', marginRight: '5px', border: '2px solid #2575c0', borderRadius: '8px' }} type="text" value={searchKey} onChange={(e) => { setsearchKey(e.target.value) }} />
                    <button style={{height : '32px',fontSize: '14px', fontFamily: 'Roboto, sans-serif', color: '#ffffff', width: '70px', backgroundColor: '#2575c0', border: '2px solid #2575c0', borderRadius: '8px' }} type="button" onClick={() => { console.log(true) }}> Search </button>
               </div> }  

        </div>
    )
}



export default Feeds















