import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const serveApp = () => async (req, res) => {
    res.sendFile(path.join(__dirname, '../../../dist/client/index.html'))
}
