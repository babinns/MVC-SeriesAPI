import express from "express";
import SeriesController from "../controllers/SeriesController.js"
 

const router = express.Router(); 

router
.get('/', (req, res) => {
    res.status(200).send("hi lorena!")
})

.get('/series', SeriesController.getSeries)

.post('/series', SeriesController.addSeries)

.delete('/series/:id', SeriesController.deleteSeries)

.put('/series/:id', SeriesController.updateSeries)

.get(`/series/filtered`, SeriesController.searchByStatus)


export default router;