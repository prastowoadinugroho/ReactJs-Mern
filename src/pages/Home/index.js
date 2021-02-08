import React, { useEffect, useState } from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.scss';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import { useSelector } from 'react-redux';

const Home = () => {
    //component dinamis with state
    const [dataBlog, setDataBlog] = useState([]);
    //menggunakan useSelector karena menggunakan function untuk page Home
    const stateGlobal = useSelector(state => state);
    console.log('State Global: ', stateGlobal);
    useEffect(() => {
        Axios.get('http://localhost:4000/v1/blog/posts')
        .then(result => {
            console.log('Data Api:', result.data);
            const responseAPI = result.data;

            //set datablog
            setDataBlog(responseAPI.data);
        })
        .catch(err => {
            console.log('error:',err)
        })
    },[])
    const history = useHistory();

    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button title="Create Blog" onClick={() => history.push('/create-blog')}/>
            </div>
            <Gap height={20}/>
            <div className="content-wrapper">
                {dataBlog.map(blog => {
                    return <BlogItem 
                    key={blog._id}
                    image={`http://localhost:4000/${blog.image}`}
                    title={blog.title}
                    body={blog.body}
                    name={blog.author.name}
                    date={blog.createdAt}/>
                })}
            </div>
            <div className="pagination">
                <Button title="Previous"/>
                <Gap width={20}/>
                <Button title="Next"/>
            </div>
            <Gap height={20}/>
        </div>
    )
}

export default Home;
