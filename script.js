document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display posts
    fetchPosts();

    // Add event listener to the "Add New Post" button
    const newPostButton = document.getElementById('newPostButton');
    newPostButton.addEventListener('click', () => navigateToNewPost());
});

function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => displayPosts(posts))
        .catch(error => console.error('Error fetching posts:', error));
}

function displayPosts(posts) {
    const postListContainer = document.getElementById('postList');
    postListContainer.innerHTML = ''; // Clear previous content

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const titleElement = document.createElement('div');
        titleElement.classList.add('post-title');
        titleElement.innerText = post.title;

        const bodyElement = document.createElement('div');
        bodyElement.classList.add('post-body');
        bodyElement.innerText = post.body;


        // Add a link to navigate to Post Details page
        postElement.addEventListener('click', () => showPostDetails(post.id));

        postElement.appendChild(titleElement);
        postElement.appendChild(bodyElement);

        postListContainer.appendChild(postElement);
    });
}

function showPostDetails(postId) {
    // Redirect to the Post Details page with the post ID in the URL
    window.location.href = `post-details.html?id=${postId}`;
}

function navigateToNewPost() {
    // Redirect to the New Post page
    window.location.href = 'new-post.html';
}
