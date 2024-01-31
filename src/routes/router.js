const { Router } = require('express')
const { livros } = require('../database/books')

const router = Router()

router.get('/api/recomendacoes/livros', (req, res) => {
  res.json({ livros })
})

router.get('/api/recomendacoes/livros/buscar/:genero', (req, res) => {
  const genero = req.params.genero
  const recomendacoes = livros.filter((livro) => livro.genero === genero)
  res.json({ genero, recomendacoes })
})

router.get('/api/recomendacoes/livros/autor/:autor', (req, res) => {
  const autor = req.params.autor
  const recomendacoes = livros.filter((livro) => livro.autor === autor)
  res.json({ autor, recomendacoes })
}
)

router.get('/api/recomendacoes/livros/aleatorio', (req, res) => {
  const livroAleatorio = livros[Math.floor(Math.random() * livros.length)]
  res.json({ livroAleatorio })
})


module.exports = router