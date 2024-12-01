document.getElementById("createPostForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (title && content) {
        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        const newPost = { id: Date.now(), title, content };

        posts.push(newPost);
        localStorage.setItem("posts", JSON.stringify(posts));

        alert("Post created successfully!");
        window.location.href = "dashboard.html";
    } else {
        alert("Please fill in all fields.");
    }
});
