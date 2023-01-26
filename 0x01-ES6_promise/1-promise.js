export default function getFullResponseFromAPI(success) {
  if (success) {
    return Promise.resolve({
      status: 200,
      body: 'Success',
    });
  }
  return Promise.reject(
    {
        status: 400,
        body: 'The fake API is not working currently',
      }
  );
}
