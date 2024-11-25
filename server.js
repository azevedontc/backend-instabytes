import express from  "express";

const posts = 
[
    {
        id: 1,
        desc: "img",
        imgUrl: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        desc: "img2",
        imgUrl: "https://placecats.com/millie/300/150",
    },
    {
        id: 3,
        desc: "img3",
        imgUrl: "https://placecats.com/millie/300/150",
    },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscaPostID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscaPostID(req.params.id)
    res.status(200).json(posts[index]);
});