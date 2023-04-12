var reviews = [
    {name: "John Doe", comment: "I really like the startegy aspect of this game", rating: 5},
    {name: "Jane Smith", comment: "I love playing this game against my friends.", rating: 4},
    {name: "Samantha Lee", comment: "This game is too difficult for me.", rating: 2},
    {name: "Bob Johnson", comment: "It's okay, not really into these games", rating: 3},
    {name: "Mike Davis", comment: "I don't like this game at all.", rating: 1}
  ];
 
  for (var i = 0; i < reviews.length; i++) {
    var review = reviews[i];
    var ratingStars = "";
    for (var j = 0; j < review.rating; j++) {
      ratingStars += "&#9733;";
    }
    for (var j = review.rating; j < 5; j++) {
      ratingStars += "&#9734;";
    }
    var card = document.createElement("div");
    card.className = "card";
    card.innerHTML = "<h2>" + review.name + "</h2><p>" + ratingStars + "</p><p>" + review.comment + "</p>";
    document.getElementById("review-container").appendChild(card);
  }

  function generateReviewCards() {

    document.getElementById("review-container").innerHTML = "";

    for (var i = 0; i < reviews.length; i++) {
      var review = reviews[i];
      var ratingStars = "";
      for (var j = 0; j < review.rating; j++) {
        ratingStars += "&#9733;";
      }
      for (var j = review.rating; j < 5; j++) {
        ratingStars += "&#9734;";
      }
      var card = document.createElement("div");
      card.className = "card";
      card.innerHTML = "<h2>" + review.name + "</h2><p>" + ratingStars + "</p><p>" + review.comment + "</p>";
      document.getElementById("review-container").appendChild(card);
    }
  }

  function addReview(event) {
    event.preventDefault();
    var form = document.getElementById("add-review-form");
    var name = form.elements["name"].value;
    var comment = form.elements["comment"].value;
    var rating = form.elements["rating"].value;
    var review = {name: name, comment: comment, rating: rating};
    reviews.push(review);
    generateReviewCards();
    form.reset();
  }

  generateReviewCards();

  document.getElementById("add-review-form").addEventListener("submit", addReview);
