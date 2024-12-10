import React from "react";
import Comment from "./Comment";
import comment from "./Comment";

const comments = [
    {
        name: "윤찬영",
        comment: "안녕하세요"
    },
    {
        name: "이동주",
        comment: "반가워요"
    },
    {
        name: "유재현",
        comment: "또 만나요"
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;