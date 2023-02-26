// import searchpic from '../icon/search.png'
import React, { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'
import { useState} from 'react';
import axios from 'axios'

const Heading = () => {
    const [input, setInput] = useState('');
    const [photos, setPhotos] = useState([])
    const [cate,setCate]=useState();
    const [title,setTitle]=useState();
   

    const handler = () => {
        setTitle(input);
        const key = '541e4e6113f4a245be41d653a35850a6'
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${input}&per_page=24&format=json&nojsoncallback=1`
        const getPic = () => {
            axios.get(url)
                .then((res) => setPhotos(Object.values(res.data.photos.photo)))
                .catch((err) => { console.log(err) })
                .finally(() => { })
            console.log(input,cate);
            
        }
        getPic()

    }
    const Category=(e)=>{
        setTitle(e);
        const key = '541e4e6113f4a245be41d653a35850a6'
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${e}&per_page=24&format=json&nojsoncallback=1`
        const getPic = () => {
            axios.get(url)
                .then((res) => setPhotos(Object.values(res.data.photos.photo)))
                .catch((err) => { console.log(err) })
                .finally(() => { })
            console.log(input,cate);
            
        }
        getPic()

    }
   
    useEffect(()=>{
        setInput('')
        setCate('')
        setTitle('')
    },[])
// console.log(getPic)
    return (
        <div className='container' >
            <h1 id='heading'>Snap Shot</h1>
            <input id='inp' placeholder='Search...' onChange={(e) => { setInput(e.target.value) }} value={input} />
            <button id='btn' onClick={handler}><FaSearch /></button>
            <div className='options'>
                <button id='btn1' onClick={()=>Category('Mountains')}>Mountains</button>
                <button id='btn1' onClick={()=>Category('Beaches')} >Beaches</button>
                <button id='btn1' onClick={()=>Category('Birds')}>Birds</button>
                <button id='btn1' onClick={()=>Category('Food')}>Food</button>
            </div>
            {title && <h1>{title} Pictures</h1>}
            <div className='pic-container'>

                {photos.map((task, index) => {
                    return <div key={index} className='pic'>
                        <img className='image' key={task.id} src={`https://live.staticflickr.com/${task.server}/${task.id}_${task.secret}_m.jpg`} alt={task.title} />

                    </div>

                })}
            </div>
        </div>
    )
}
export default Heading;