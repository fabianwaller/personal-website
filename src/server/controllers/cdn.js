export const serveCdnContent = () => async (req, res) => {
    res.sendFile(path.join(__dirname, '../../cdn/' + req.params.content))
}