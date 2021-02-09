import React, { useEffect, useState } from 'react'
import { RegisterBg } from '../../assets'
import './detailBlog.scss';
import {useHistory, withRouter} from 'react-router-dom';
import { Gap, Link } from '../../components';
import Axios from 'axios';

const DetailBlog = (props) => {
    const [data, setData] = useState({});
    useEffect(() => {
        const id = props.match.params.id;
        Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
        .then(res => {
            setData(res.data.data);
        })
        .catch(err => {
            console.log('Error: ', err);
        })
    },[props])
    const history = useHistory();
    if(data.author){
        return (
            <div className="detail-blog-wrapper">
                <img className="img-cover" src={`http://localhost:4000/${data.image}`} alt="thumb"/>
                <p className="blog-title">{data.title}</p>
                <p className="blog-author">{data.author.name} - {data.createdAt}</p>
                <p className="blog-body">{data.body}</p>
                <Link title="Kembali ke home" onClick={() => history.push('/')}/>
                <Gap height={10}/>
            </div>
        )
    }
    return <p>Loading data ...</p>
}

export default withRouter(DetailBlog);
