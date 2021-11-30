import React, { useState, useEffect }  from 'react';
import axios from 'axios';



const DisplayComment = (prop) => {
    const [displayComment, setDisplayComment] = useState ([]);



    useEffect(() => {
         axios.get('http://localhost:5000/api/comments')
        .then(response => setDisplayComment(response.data))
    }, []);

    
    
    return (
        <center>
        <div>
           {displayComment && displayComment.map(comments => {
               return <li>
                   ({comments.text})
                   <br/>
                   ({comments.timeStamp})
                   <br/>
                   {comments.replies.map(reply => [
                       reply.text,
                       reply.timeStamp
                   ])}
                   </li>
            
                
           })
        }
        </div>
        </center>
    );
}
export default DisplayComment;