import axios from "axios";

const API = "http://localhost:5000/posts";
class PostService {
    // add
    static getPosts() {
        return axios.get(API);
    }

    // add
    static add(data) {
        return axios.post(API, data);
    }
}

export default PostService;
