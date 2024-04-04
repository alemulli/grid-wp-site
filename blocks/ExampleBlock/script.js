const Example = (phrase) => {
    return {
        val: phrase,
        init: function () {
            console.log('Example block initialized');
        },
    };
};
window.Example = Example;
