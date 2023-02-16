import {getSeries, addSeries} from "../models/seriesModel.js"
import * as seriesModel from "../models/seriesModel.js"


class SeriesController {

    static async getSeries(req, res) {
        try {
            
            const series = await seriesModel.getSeries();

        }catch(error){
            return res.status(500).json(error.message)
            }
        }
    

    static async addSeries(req, res) {

        try{
            
            const newSeries = await seriesModel.addSeries(req.body);
            return res.status(200).json(req.body)
        }catch(error){
            res.status(500).json(error.message)
        }

    }
}


export default SeriesController;