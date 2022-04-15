/**
 * Converts an image input of a user to a base64 string which represents the image.
 * @param file the file that was given as input by the user.
 * @return a promise to convert the image.
 */
export function convertToBase64Image(file, onLoadCallback) {
    return new Promise(function (resolve, reject) {
        let reader = new FileReader();
        reader.onload = function () {
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

/**
 * @return a formatted "day.month.year, hour:minutes" date string.
 */
export function getFormattedDateString(message) {
    let messageDate = new Date(message.createdAt);
    let day = messageDate.getDate();
    let month = messageDate.getMonth() + 1;
    let year = messageDate.getFullYear();
    let hour = messageDate.getHours();
    if (hour < 10)
        hour = "0" + hour;
    let minutes = messageDate.getMinutes();
    if (minutes < 10)
        minutes = "0" + minutes;
    return day + '.' + month + '.' + year + ", " + hour + ':' + minutes;
}