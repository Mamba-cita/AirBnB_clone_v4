document.addEventListener('DOMContentLoaded', function() {
    const reviewToggle = document.getElementById('review-toggle');
    const reviewsContainer = document.getElementById('reviews');

    reviewToggle.addEventListener('click', function() {
        if (reviewToggle.textContent === 'how') {
            fetch('/reviews')
               .then(response => response.json())
               .then(reviews => {
                    reviews.forEach(review => {
                        const reviewElement = document.createElement('div');
                        reviewElement.textContent = review.text;
                        reviewsContainer.appendChild(reviewElement);
                    });
                    reviewToggle.textContent = 'hide';
                });
        } else {
            reviewsContainer.innerHTML = '';
            reviewToggle.textContent = 'how';
        }
    });
});
