import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Message from './Message';
import Segment from './Segment';

// const getTime = () => {
//     return (new Date()).toTimeString()
// }


const App = () => {
    return (
        <div className="ui container comments">
            <Segment>
                <div className="ui icon header">
                    <i className="pdf file outline icon"></i>
                    No documents are listed for this customer
                </div>
                <div className="ui primary button">Add Document</div>
            </Segment>

            <Segment>
                <h4 className="ui header">For Your information</h4>
                <p>Wonderfully done</p>
            </Segment>
            <Message
                header="Changes in Service"
                paragraph="We just updated our privacy policy "
            />

            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today At 4:55pm"
                    comment="Are you for real?"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today At 4:55pm"
                    comment="Nice Picture"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Today At 4:55pm"
                    comment="Beautiful "
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);