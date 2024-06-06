import path from "path";
import {fileURLToPath} from "url";

// Obtenez le répertoire du fichier actuel
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias['@components'] = path.join(__dirname, 'src/app/components');
        config.resolve.alias['@pages'] = path.join(__dirname, 'src/app/pages');
        config.resolve.alias['@styles'] = path.join(__dirname, 'src/app/styles');
        config.resolve.alias['@utils'] = path.join(__dirname, 'src/app/utils');
        config.resolve.alias['@hooks'] = path.join(__dirname, 'src/app/hooks');
        config.resolve.alias['@context'] = path.join(__dirname, 'src/app/context');
        config.resolve.alias['@lib'] = path.join(__dirname, 'src/app/lib');
        return config;
    },
};

export default nextConfig;
