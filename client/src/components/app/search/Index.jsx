import React, { useState } from "react";
import { Container } from "react-bootstrap";
import search_img from "../../../assets/svg/search.svg";
import { Reddit } from "../../../services/reddit";
import Posts from "../../Posts";

const SearchView = () => {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <div className="d-flex h-100 justify-content-center bg-light text-dark">
        <Container fluid="md">
          <div className="row height d-flex justify-content-center align-items-center pt-4">
            <div className="col-sm-12 col-md-12 col-lg-8">
              <div className="form">
                <div className="p-1 bg-white rounded rounded-pill shadow-sm mb-4">
                  <div className="input-group">
                    <input
                      type="search"
                      placeholder="What're you searching for?"
                      aria-describedby="button-addon1"
                      onChange={(e) => (Reddit.search = e.target.value)}
                      className="form-control border-0 bg-white"
                    />
                    <div className="input-group-append">
                      <button
                        id="button-addon1"
                        type="submit"
                        className="btn btn-link text-primary"
                        onClick={() => Reddit.getPosts(setPosts)}
                      >
                        <img
                          src={search_img}
                          width={20}
                          height={20}
                          alt="search"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row height d-flex justify-content-center align-items-center pt-4">
            <div className="col-sm-12 col-md-12 col-lg-8">
              <Posts items={posts} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SearchView;
