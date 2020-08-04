import React, { Component } from 'react';

class CommentList extends Component {
    constructor(props) {
        super(props);
    }
    handleClick(i) {
        this.props.onGetIndex(i)
    }
    render() {
        return (
            <div className="comment-list-component">
                <label>评论列表</label>
                <ul className="list-group mb-3">
                    {
                        this.props.comments.map((item, index) => (
                            <li key={index} className="list-group-item">
                                {item}
                                <button type="button" className="btn btn-danger"
                                        key={index}
                                        onClick={this.handleClick.bind(this, index)}
                                >刪除</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
// const CommentList = ({ comments }) => {
//     return (
//         <div className="comment-list-component">
//             <label>评论列表</label>
//             <ul className="list-group mb-3">
//                 {
//                     comments.map((item, index) => (
//                         <li key={index} className="list-group-item">
//                             {item}
//                             <button type="button" className="btn btn-danger">刪除</button>
//                         </li>
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }

export default CommentList
