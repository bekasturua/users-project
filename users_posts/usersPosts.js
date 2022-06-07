// I called user posts from JSON

window.addEventListener("load", async () => {
  const params = new URLSearchParams(location.search);
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${params.get("userId")}`
  )
    .then((response) => response.json())
    .then((json) => json);
  let postsHTML = "";
  posts.forEach((post) => {
    postsHTML += `
        <ul class="ul">
            <li>Title:  ${post.title}</li>
            <li>Body:  ${post.body}</li>
          </ul>
      `;
  });

  const userPostContainer = document.getElementsByClassName("user_posts")[0];
  userPostContainer.insertAdjacentHTML("afterend", postsHTML);
});
