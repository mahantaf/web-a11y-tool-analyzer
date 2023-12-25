exports.generateRandomString = () => {
    return (Math.random() + 1).toString(36).substring(7);
}

exports.checkTrivialAlts = (alt) => {
    // Check for trivial/template alt text
    const trivialAlts = ['', 'spacer', 'image', 'picture'];
    if (trivialAlts.includes(alt)) {
        return true;
    }

    // Check for filename extensions in the alt text
    const extensionRegex = /\.(png|jpg|jpeg|svg)$/;
    if (extensionRegex.test(alt)) {
        return true;
    }

    // Check if alt text is a URL
    const urlRegex = /^(http|https):\/\/[^ "]+$/;
    if (urlRegex.test(alt)) {
        return true;
    }

    return false;
};
