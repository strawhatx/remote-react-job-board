import React from "react";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import moment from "moment";
import he from "he";
import CommentTree from "./Tree";

const CommentTreeNode = ({ node }) => {
  const {
    author,
    body_html,
    thumbnail,
    thumbnail_width,
    thumbnail_height,
    ups,
    downs,
    created,
    replies,
  } = node;

  const handleVoteColor = (total) => {
    let color = "";
    if (total < 0) color = "text-danger";
    else if (total > 0) color = "text-success";
    else color = "text-secondary";
    return color;
  };

  const total = ups - downs;

  const color = handleVoteColor(total);

  const date = moment(new Date(created * 1000))
    .startOf("hour")
    .fromNow();

  return (
    <>
      <div
        className="pb-3 pt-2"
        style={{ paddingLeft: "10px", borderLeft: "4px solid lightgrey" }}
      >
        <div className="d-flex justify-content-start align-items-start flex-row">
          <div className="small-links">
            <div className="fw-normal card-text">
              {ReactHtmlParser(he.decode(body_html))}
            </div>
          </div>

          {thumbnail && thumbnail !== "self" && thumbnail !== "default" && (
            <div className="ms-3">
              <img
                className="rounded"
                src={thumbnail}
                width={thumbnail_width}
                height={thumbnail_height}
                alt="search"
              />
            </div>
          )}
        </div>

        <div className="text-secondary fs-7">
          <span className="fst-italic me-3">
            Posted by: <span className="fw-semibold">{author}</span>
          </span>

          <span className="fst-italic me-3">
            Posted: <span className="fw-semibold">{date}</span>
          </span>

          <span className={`fst-italic fw-semibold ${color}`}>
            {total > 0 && "+"}
            {Math.abs(total)} Votes
          </span>
        </div>
      </div>

      <div style={{ paddingLeft: "10px", borderLeft: "4px solid lightgrey" }}>
        {replies && <CommentTree children={replies?.data?.children} />}
      </div>
    </>
  );
};

CommentTreeNode.propTypes = {
  node: PropTypes.object,
};

export default CommentTreeNode;
