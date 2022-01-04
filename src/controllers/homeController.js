const posts = [
    {
        title: 's'
    },
    {
        title: 'p'
    },
]

export const homePage = async (req, res) => {
    return res.render('home', { posts })
}