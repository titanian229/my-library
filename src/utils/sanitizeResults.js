const processGoogleResponse = (res) => {
    const {
        title = '',
        authors = ['n/a'],
        publishedDate = '',
        description = '',
        pageCount = '',
        infoLink = '',
    } = res.volumeInfo;

    let image;

    if (res.volumeInfo.imageLinks) {
        image =
            res.volumeInfo.imageLinks.thumbnail ||
            '';
    } else {
        image =
            '';
    }
    const returnedBook = {
        title,
        author: authors.join(', '),
        publishedDate,
        description,
        pageCount,
        image,
        link: infoLink,
    };
    return returnedBook;
};

export default processGoogleResponse