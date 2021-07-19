/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */


exports.EXPORTED_FUNCTION_NAME = async (req, res) => {
    // Any Origin can query this no authentication based on domain 

    res.set('Access-Control-Allow-Origin', "*")

    if (req.method === 'OPTIONS') {
        // Handles CORS 
         
        // Set CORS headers for preflight requests
        // Allows GETs from any origin with the Content-Type header
        // and caches preflight response for 3600s
        res.set('Access-Control-Allow-Methods', 'GET');
        res.set('Access-Control-Allow-Headers', 'Content-Type');
        res.set('Access-Control-Max-Age', '3600');
        res.status(204).send('');
    } else {
        res.set('Access-Control-Allow-Methods', 'GET, POST')

        /**
         * ADD CLOUD FUNCTION LOGIC
         */

        res.send()
    }
};
