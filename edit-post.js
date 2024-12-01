const queryParams = new URLSearchParams(window.location.search);
const postId = queryParams.get("id");
const posts = JSON.parse(localStorage.getItem("posts")) || [];
const postToEdit = posts.find((post) => post.id == postId);

if (postToEdit) {
    document.getElementById("title").value = postToEdit.title;
    document.getElementById("content").value = postToEdit.content;
}

document.getElementById("editPostForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const updatedTitle = document.getElementById("title").value;
    const updatedContent = document.getElementById("content").value;

    if (postToEdit) {
        postToEdit.title = updatedTitle;
        postToEdit.content = updatedContent;

        localStorage.setItem("posts", JSON.stringify(posts));

        alert("Post updated successfully!");
        window.location.href = "dashboard.html";
    }
});
