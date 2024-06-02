let reviewToggle = document.getElementById('review-toggle');
let reviewsDiv = document.getElementById('reviews');

reviewToggle.addEventListener('click', function() {
    if (reviewToggle.textContent === 'how') {
        fetch('/reviews')
           .then(response => response.json())
           .then(reviews => {
                reviews.forEach(review => {
                    let reviewElement = document.createElement('div');
                    reviewElement.textContent = review;
                    reviewsDiv.appendChild(reviewElement);
                });
                reviewToggle.textContent = 'hide';
            });
    } else {
        while (reviewsDiv.firstChild) {
            reviewsDiv.removeChild(reviewsDiv.firstChild);
        }
        reviewToggle.textContent = 'how';
    }
});
