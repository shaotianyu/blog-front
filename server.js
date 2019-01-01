const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const compression = require('compression')

app.prepare().then(() => {

  const server = express()

  if (!dev) {
    server.use(compression())
  }

  server.get('/p/:id', (req, res) => {
    const actualPage = '/detail'
    const queryParams = { 
        id: req.params.id 
    } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/blog/:page', (req, res) => {
    const actualPage = '/blog'
    const queryParams = {
      page: req.params.page
    }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/life/:page', (req, res) => {
    const actualPage = '/life'
    const queryParams = {
      page: req.params.page
    }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/blog/classify/:classify/:page?', (req, res) => {
    const actualPage = '/classify'
    const queryParams = {
      page: req.params.page,
      classify: req.params.classify
    }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})