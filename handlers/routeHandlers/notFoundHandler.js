/*
 * Title: Not Found Handler
 * Description: 404 Not Found Handler
 * Author:Sadia Afrin Tarin ( inspired by Learn with Sumit )
 * Date: 15/5/2023
 *
 */
// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found!',
    });
};

module.exports = handler;