import React from "react";


export function UserPage(props) {

    return (

        <div>
            <div>
                <div>
                    <div className="d-flex flex-column col-md-8">
                        <div className="d-flex flex-row align-items-center text-left comment-top p-2 bg-white border-bottom px-4">
                            <div className="profile-image"><img className="rounded-circle" src="https://i.imgur.com/t9toMAQ.jpg" width="70" /></div>
                            <div className="d-flex flex-column-reverse flex-grow-0 align-items-center votings ml-1"><i className="fa fa-sort-up fa-2x hit-voting"></i><span>127</span><i className="fa fa-sort-down fa-2x hit-voting"></i></div>
                            <div className="d-flex flex-column ml-3">
                                <div className="d-flex flex-row post-title">
                                    <h5>Is sketch 3.9.1 stable?</h5><span className="ml-2">(Jesshead)</span></div>
                                <div className="d-flex flex-row align-items-center align-content-center post-title"><span className="bdge mr-1">video</span><span className="mr-2 comments">number of comments&nbsp;</span><span className="mr-2 dot"></span><span>Time ago</span></div>
                            </div>
                        </div>
                        <div className="coment-bottom bg-white p-2 px-4">
                            <div className="d-flex flex-row add-comment-section mt-4 mb-4"><img className="img-fluid img-responsive rounded-circle mr-2" src="https://i.imgur.com/qdiP4DB.jpg" width="38" /><input type="text" className="form-control mr-3" placeholder="Add comment" /><button className="btn btn-primary" type="button">Comment</button></div>
                            <div
                                className="commented-section mt-2">
                                <div className="d-flex flex-row align-items-center commented-user">
                                    <h5 className="mr-2">Name Here</h5><span className="dot mb-1"></span><span className="mb-1 ml-2">Time ago</span></div>
                                <div className="comment-text-sm"><span>Comments Here</span></div>
                                <div
                                    className="reply-section">
                                    <div className="d-flex flex-row align-items-center voting-icons"><i className="fa fa-sort-up fa-2x mt-3 hit-voting"></i><i className="fa fa-sort-down fa-2x mb-3 hit-voting"></i><span className="ml-2">10</span><span className="dot ml-2"></span>
                                        <h6 className="ml-2 mt-1">Reply</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="commented-section mt-2">
                                <div className="d-flex flex-row align-items-center commented-user">
                                    <h5 className="mr-2">Name Here</h5><span className="dot mb-1"></span><span className="mb-1 ml-2">Time ago</span></div>
                                <div className="comment-text-sm"><span>Comments Here</span></div>
                                <div className="reply-section">
                                    <div className="d-flex flex-row align-items-center voting-icons"><i className="fa fa-sort-up fa-2x mt-3 hit-voting"></i><i className="fa fa-sort-down fa-2x mb-3 hit-voting"></i><span className="ml-2">15</span><span className="dot ml-2"></span>
                                        <h6 className="ml-2 mt-1">Reply</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="commented-section mt-2">
                                <div className="d-flex flex-row align-items-center commented-user">
                                    <h5 className="mr-2">Name Here</h5><span className="dot mb-1"></span><span className="mb-1 ml-2">Time ago</span></div>
                                <div className="comment-text-sm"><span>Comments here</span></div>
                                <div
                                    className="reply-section">
                                    <div className="d-flex flex-row align-items-center voting-icons"><i className="fa fa-sort-up fa-2x mt-3 hit-voting"></i><i className="fa fa-sort-down fa-2x mb-3 hit-voting"></i><span className="ml-2">25</span><span className="dot ml-2"></span>
                                        <h6 className="ml-2 mt-1">Reply</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage;