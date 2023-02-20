import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import moment from "moment";

const Posts = ({ items }) => {
  const handleVoteColor = (total) => {
    let color = "";
    if (total < 0) color = "text-danger";
    else if (total > 0) color = "text-success";
    else color = "text-secondary";
    return color;
  };

  return (
    <>
      {items.map((item, index) => {
        const total = item.upVotes - item.downVotes;
        const color = handleVoteColor(total);
        const date = moment(new Date(item.date * 1000))
          .startOf("hour")
          .fromNow();

        return (
          <Link
            key={index}
            to={`/comments/${item.postId}`}
            state={{ postId: item.postId, subreddit: item.subreddit }}
          >
            <Card className="card-hover-shadow  p-4 mb-3 rounded">
              <Card.Body className="p-1 ">
                <div className="d-flex justify-content-center align-items-center mb-4 flex-row">
                  <div className="card-text-preview ">
                    <Card.Subtitle className="mb-4 fw-semibold fs-5">
                      {item.title}
                    </Card.Subtitle>
                    <Card.Text className="fw-normal">{item.text}</Card.Text>
                  </div>

                  {item.thumbnail &&
                    item.thumbnail !== "self" &&
                    item.thumbnail !== "default" && (
                      <div className="ms-3">
                        <img
                          className="rounded"
                          src={item.thumbnail}
                          width={item.thumbnailWidth}
                          height={item.thumbnailHeight}
                          alt="search"
                        />
                      </div>
                    )}
                </div>

                <div className="text-secondary fs-7">
                  <span className="fst-italic me-3">
                    Posted by:{" "}
                    <span className="fw-semibold">{item.author}</span>
                  </span>

                  <span className="fst-italic me-3">
                    Posted: <span className="fw-semibold">{date}</span>
                  </span>

                  <span className="fst-italic me-3">
                    {item.comments} Comments
                  </span>

                  <span className={`fst-italic fw-semibold ${color}`}>
                    {total > 0 && "+"}
                    {Math.abs(total)} Votes
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Link>
        );
      })}
    </>
  );
};

Posts.propTypes = {
  items: PropTypes.array,
};

export default Posts;
