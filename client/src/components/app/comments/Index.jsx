import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Reddit } from "../../../services/reddit";
import CommentTree from "../../comment-tree/Tree";
import moment from "moment";

const PostView = () => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  const { state } = useLocation();

  useEffect(() => {
    Reddit.postId = state.postId;

    Reddit.subreddit = state.subreddit;

    Reddit.getComments(setPost, setComments);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Reddit, state, setComments]);

  const handleVoteColor = (total) => {
    let color = "";
    if (total < 0) color = "text-danger";
    else if (total > 0) color = "text-success";
    else color = "text-secondary";
    return color;
  };

  const total = post.ups - post.downs;

  const color = handleVoteColor(total);

  const date = moment(new Date(post.created * 1000))
    .startOf("hour")
    .fromNow();
  return (
    <>
      <div className="d-flex h-100 justify-content-center bg-light text-dark">
        <Container fluid="md">
          <div className="row height d-flex justify-content-center align-items-center pt-4">
            <div className="col-sm-12 col-md-12 col-lg-8">
              <Card className="card-hover-shadow  p-4 mb-3 rounded">
                <Card.Body className="p-1 ">
                  <div className="d-flex justify-content-start align-items-start mb-4 flex-row">
                    <div className="">
                      <Card.Subtitle className="mb-4 fw-semibold fs-5">
                        {post.title}
                      </Card.Subtitle>
                      <Card.Text className="fw-normal">
                        {post.selftext}
                      </Card.Text>
                    </div>

                    {post.thumbnail &&
                      post.thumbnail !== "self" &&
                      post.thumbnail !== "default" && (
                        <div className="ms-3">
                          <img
                            className="rounded"
                            src={post.thumbnail}
                            width={post.thumbnail_width}
                            height={post.thumbnail_height}
                            alt="search"
                          />
                        </div>
                      )}
                  </div>

                  <div className="text-secondary fs-7">
                    <span className="fst-italic me-3">
                      Posted by:{" "}
                      <span className="fw-semibold">{post.author}</span>
                    </span>

                    <span className="fst-italic me-3">
                      Posted: <span className="fw-semibold">{date}</span>
                    </span>

                    <span className="fst-italic me-3">
                      {post.num_comments} Comments
                    </span>

                    <span className={`fst-italic fw-semibold ${color}`}>
                      {total > 0 && "+"}
                      {Math.abs(total)} Votes
                    </span>
                  </div>
                </Card.Body>
              </Card>

              <Card className="card-hover-shadow  p-4 mb-3 rounded">
                <Card.Body className="p-1 ">
                  <CommentTree children={comments} />
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PostView;
