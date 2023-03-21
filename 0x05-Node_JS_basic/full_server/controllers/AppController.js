/**
 * Contains the miscellaneous route handlers.
 * @author Benjamin Eruvieru <https://github.com/benjamineruvieru>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
