
var posts = [
    {
      id: 1,
      content: "New Post",
    },
    {
      id: 2,
      content: "New Post",
    },
    {
      id: 3,
      content: "New Post",
    },
    {
      id: 4,
      content: "New Post",
    },
    {
      id: 5,
      content: "New Post",
    },
  ];
  
  var comments = [
    { postId: 4, comment: "Awesome Pic" },
    { postId: 4, comment: "Great shot!" },
    { postId: 1, comment: "Love it!" },
    { postId: 4, comment: "Fantastic picture" },
    { postId: 2, comment: "Well captured" },
    { postId: 3, comment: "Incredible!" },
    { postId: 1, comment: "Amazing photography skills!" },
    { postId: 4, comment: "Impressive composition" },
    { postId: 3, comment: "Speechless!" },
    { postId: 5, comment: "I wish I could take photos like this" },
    { postId: 3, comment: "Bravo!" },
  ];
  

  function getComments(post, comments) {
    return comments.filter(function (comment) {
      return post.id === comment.postId;
    });
  }
  
  var filteredComments = posts.map(function(post){
    return { [post.id]: getComments(post, comments).map(comment => comment.comment) };
  });
  console.log(filteredComments);
  