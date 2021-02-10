import React from 'react';
import './blogItem.scss';
import {useHistory} from 'react-router-dom';
import { Button, Gap } from '../../atoms';

const BlogItem = (props) => {
    const history = useHistory();
    //destructuring
    const {image, title, name, date, body, _id} = props;
    return (
        <div className="blog-item">
            <img className="image-thumb" src={image}/>
            <div className="content-detail">
                <div className="title-wrapper">
                <p className="title">{title}</p>
                <div className="edit-wrapper">
                    <p 
                    className="edit"
                    onClick={() => history.push(`/create-blog/${props._id}`)}
                    >Edit
                    </p> | <p className="delete">Delete</p>
                </div>
                </div>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                <Gap height={20}/>
                <Button title="View Detail" onClick={() => history.push(`/detail-blog/${props._id}`)}/>
            </div>
        </div>
    )
}

export default BlogItem;
