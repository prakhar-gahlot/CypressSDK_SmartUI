module.exports = (on, config) => {
    on('task', {
        log(message) {
            console.log(message);
            return null;
        },
    });

    // Return the config object is a good practice, especially if you've modified it
    return config;
};  