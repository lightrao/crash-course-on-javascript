// let post = {
//     title: "How to learn javascript",
//     body: "1. Take a course. 2. learn from books. ...",
//     author: "ZhangSan",
//     views: 101,
//     comments: [
//         { author: "LiSi", body: "A good post." },
//         { author: "WangWu", body: "Very useful." }
//     ],
//     isLive: true
// };

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

const post = new Post("How to learn javascript", "This is post body...", "ZhangSan");
console.log(post);
