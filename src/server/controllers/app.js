export const serveApp = () => async (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/client/index.html'))
}
