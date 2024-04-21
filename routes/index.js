const express = require('express')
const router = express.Router()
const MainController = require('../controllers/main_controller')
const AnimeController = require('../controllers/anime_controller')

router.get('/home', MainController.home)
router.get('/complete', MainController.completeAnimeList)
router.get('/complete/page/:page', MainController.completeAnimeList)
router.get('/ongoing', MainController.onGoingAnimeList)
router.get('/schedule', MainController.schedule)
router.get('/genres', MainController.genre)
router.get('/genres/:id/page/:pageNumber', MainController.animeByGenre)
router.get('/search/:query', MainController.search)
router.get('/anime/:id', AnimeController.detailAnime)
router.get('/batch/:id', AnimeController.batchAnime)
router.get('/eps/:id', AnimeController.epsAnime)

module.exports = router