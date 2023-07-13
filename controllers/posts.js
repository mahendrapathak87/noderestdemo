
exports.postsController = (req, res, next) => {

    res.status(200).json({
        title: 'hello world',
        content: 'hello world from content'
    })
}

exports.savePostsController = (req, res, next) => {

    const title = req.body.title;
    const content = req.body.content;
    console.log(title, content);
    res.status(201).json({
        title: title,
        content: content
    })

}