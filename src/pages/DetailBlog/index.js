import React from 'react'
import { RegisterBg } from '../../assets'
import './detailBlog.scss';
import {useHistory} from 'react-router-dom';
import { Gap, Link } from '../../components';

const DetailBlog = () => {
    const history = useHistory();
    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={RegisterBg} alt="thumb"/>
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sequi quasi dicta omnis doloremque maiores blanditiis libero delectus exercitationem itaque neque culpa, quos ab adipisci optio repellat nisi eaque dignissimos.</p>
            <Link title="Kembali ke home" onClick={() => history.push('/')}/>
            <Gap height={10}/>
        </div>
    )
}

export default DetailBlog
