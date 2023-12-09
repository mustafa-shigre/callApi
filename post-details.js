document.addEventListener('DOMContentLoaded', () => {
    // Get the post ID from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (postId) {
        fetchPostDetails(postId);
        fetchPostComments(postId);
    } else {
        // Handle the case where no post ID is provided
        console.error('No post ID provided.');
    }
});

function fetchPostDetails(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => displayPostDetails(post))
        .catch(error => console.error('Error fetching post details:', error));
}

function displayPostDetails(post) {
    const postDetailsContainer = document.getElementById('postDetails');

    const titleElement = document.createElement('div');
    titleElement.classList.add('post-title-details');
    titleElement.innerText = post.title;

    const bodyElement = document.createElement('div');
    bodyElement.classList.add('post-body-details');
    bodyElement.innerText = post.body;

    postDetailsContainer.appendChild(titleElement);
    postDetailsContainer.appendChild(bodyElement);
}

function fetchPostComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => displayPostComments(comments))
        .catch(error => console.error('Error fetching post comments:', error));
}

function displayPostComments(comments) {
    const commentsContainer = document.getElementById('postComments');

    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');

        const nameElement = document.createElement('div');
        nameElement.classList.add('comment-name');
        nameElement.innerText = comment.name;

        const emailElement = document.createElement('div');
        emailElement.classList.add('comment-email');
        emailElement.innerText = comment.email;

        const bodyElement = document.createElement('div');
        bodyElement.classList.add('comment-body');
        bodyElement.innerText = comment.body;

        commentElement.appendChild(nameElement);
        commentElement.appendChild(emailElement);
        commentElement.appendChild(bodyElement);

        commentsContainer.appendChild(commentElement);
    });
}
