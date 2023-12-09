function createNewPost(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    if (title && body) {
        const newPost = {
            title: title,
            body: body,
            userId: 10, // You can adjust the userId as needed
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(post => {
            console.log('Server Response:', post);

            // Update the UI with the new post
            displayNewPost(post);

            // Clear the form fields after creating a new post
            document.getElementById('title').value = '';
            document.getElementById('body').value = '';
        })
        .catch(error => console.error('Error creating new post:', error));
    } else {
        console.error('Title and body are required.');
    }
}

function displayNewPost(post) {
    const postListContainer = document.getElementById('postList');

    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const titleElement = document.createElement('div');
    titleElement.classList.add('post-title');
    titleElement.innerText = post.title;

    const bodyElement = document.createElement('div');
    bodyElement.classList.add('post-body');
    bodyElement.innerText = post.body;

    postElement.appendChild(titleElement);
    postElement.appendChild(bodyElement);

    // Add the new post to the top of the post list
    postListContainer.insertBefore(postElement, postListContainer.firstChild);
}
