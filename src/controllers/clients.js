

const getClients = (req, res)=> {
    res.json({   
        clients: [{
            name: "john",
            lastname: "Johnson",
            age:"16"} ]
        })
}

module.exports = {getClients}