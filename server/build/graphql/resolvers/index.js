import axios from "axios";
import fs from "fs";
import path from "path";
const swapi_url = process.env.SWAPI_BASE_URL;
const cacheFolderPath = path.join(__dirname, "cache"); //  the cache folder path 
if (!fs.existsSync(cacheFolderPath)) {
    fs.mkdirSync(cacheFolderPath);
}
// Function to get the cache expiration time from environment variables or default to 3600 seconds
function getCacheExpiration() {
    const cacheExpiration = process.env.CACHE_EXP;
    return cacheExpiration ? parseInt(cacheExpiration) : 0;
}
async function getAndCacheData(url, cacheFilename) {
    const cacheExpiration = getCacheExpiration();
    if (fs.existsSync(cacheFilename)) {
        const { timestamp, data } = JSON.parse(fs.readFileSync(cacheFilename, "utf-8"));
        const now = new Date().getTime();
        if (now - timestamp <= cacheExpiration * 1000) {
            return data;
        }
    }
    try {
        const { data } = await axios.get(url);
        const timestamp = new Date().getTime();
        fs.writeFileSync(cacheFilename, JSON.stringify({ timestamp, data }));
        return data;
    }
    catch (err) {
        throw new Error(`Something went wrong ${err}`);
    }
}
export const resolvers = {
    Query: {
        movie: async (_, { id }) => {
            const cacheFilename = path.join(cacheFolderPath, `movie_${id}.json`);
            const data = await getAndCacheData(`${swapi_url}films/${id}`, cacheFilename);
            return data;
        },
        movies: async () => {
            const cacheFilename = path.join(cacheFolderPath, "movies.json");
            const { results } = await getAndCacheData(`${swapi_url}films/`, cacheFilename);
            return results;
        },
    }
};
