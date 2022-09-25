export const handle404PageNotFound = () => async (req, res) => {
    res.status(404);
    res.send({ error: '404 Not found' });
}