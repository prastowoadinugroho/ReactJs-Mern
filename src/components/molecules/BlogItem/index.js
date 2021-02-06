import React from 'react';
import { RegisterBg } from '../../../assets';
import './blogItem.scss';
import {useHistory} from 'react-router-dom';
import { Button, Gap } from '../../atoms';

const BlogItem = () => {
    const history = useHistory();
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg}/>
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date Post</p>
                <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil culpa officiis unde at aspernatur ipsa laborum dolores, suscipit deleniti consequuntur dicta placeat, voluptatum quasi! Veritatis ab neque beatae repudiandae natus?</p>
                <Gap height={20}/>
                <Button title="View Detail" onClick={() => history.push('/detail-blog')}/>
            </div>
        </div>
    )
}

export default BlogItem;
