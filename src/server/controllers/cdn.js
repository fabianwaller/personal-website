import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const serveCdnContent = () => async (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../../../cdn/' + req.params.content))
}