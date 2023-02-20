import { reddit_api } from "../config/axios";
import { Request, Response, NextFunction } from "express";
import { GET_POST_COMMENTS_EXCEPTION_MESSAGE, SEARCH_POSTS_EXCEPTION_MESSAGE } from "../messages/reddit";

/**
* Coin Controller
*/

export class RedditController {
    constructor() { }

    async searchPosts(req: Request, res: Response, next: NextFunction) {
        try {
            let last = req.body.last, size = req.body.size, search = req.body.search?.trim(), sort = req.body.sortBy;

            //http://www.reddit.com/search.json  -- get posts by search params
            const response = await reddit_api.get(`/search.json?q=${search}&limit=${size}&after=${last}&sort=${sort}`);

            res.status(200).json(response.data);
        }

        catch (error) {
            console.log(error);
            res.status(500).json({ error: SEARCH_POSTS_EXCEPTION_MESSAGE })
        }
    }

    async getPostComments(req: Request, res: Response, next: NextFunction) {
        try {
            let postId = req.body.postId, sub = req.body.subreddit;

            //http://www.reddit.com/r/excel/comments/v0vzbu.json  -- listing with comments in json format 
            //http://www.reddit.com/comments/v0vzbu
            const response = await reddit_api.get(`/r/${sub}/comments/${postId}.json`);

            res.status(200).json(response.data);
        }

        catch (error) {
            console.log(error);
            res.status(500).json({ error: GET_POST_COMMENTS_EXCEPTION_MESSAGE })
        }
    }

}