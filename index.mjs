const PORT = 8000
import http from 'http'
import { headers } from './util/helpers.mjs'
/* import home from './pages/home.mjs'; */

(async () => {
    http
        .createServer((request, response) => {
            let error
            switch (request.url) {
                case '/':
                    headers(home, response)
                    break;
                case '/about':
                    headers(about, response)
                    break
                default:
                    response.end(`Error ${error}`)
            }
        })
        .listen(PORT)
    console.log(`Listening on port: ${PORT}`)
})()