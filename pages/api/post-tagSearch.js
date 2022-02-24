/*import Cors from 'cors'

const cors = Cors({
    methods: ['POST', 'HEAD'],
})

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }
            return resolve(result)
        })
    })
}

async function handler(req, res) {
    await runMiddleware(req, res, cors)
    var reqData = req.body.email;
    res.json({ message: reqData })
}

export default handler;*/

export default function handler(req, res) {
    res.status(200).json({ message: 'Success' })
  }