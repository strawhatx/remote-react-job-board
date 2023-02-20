import React from "react";
import CommentTreeNode from "./TreeNode";
import PropTypes from "prop-types";

const CommentTree = ({ children }) => {
  return (
    <>
      {children
        ?.map((i) => i.data)
        ?.map((node) => (
          <CommentTreeNode node={node} key={node.id} />
        ))}
    </>
  );
};

CommentTree.propTypes = {
  children: PropTypes.array,
};

export default CommentTree;
