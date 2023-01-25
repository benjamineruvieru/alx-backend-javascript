function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform API call here and resolve or reject the promise
    // based on the response
    resolve({
      status: 200,
      body: "photo-profile-1",
    });
  });
}
