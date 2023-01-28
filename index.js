import server from "./server/server.js"

const port =  parseInt(process.env.PORT) || 3001;

server.listen(port, () => {
    console.log(`Server on port ${port}`)
})

