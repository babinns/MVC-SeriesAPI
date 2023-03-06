import {getSeries, addSeries} from "../models/seriesModel.js"
import * as seriesModel from "../models/seriesModel.js"


class SeriesController {

    static async getSeries(req, res) {
    

        try{
            const series = await seriesModel.getSeries();
            return res.status(200).json(series)
            
        }catch(error){
            res.status(500).json(error.message)
        }
    
            

    
    }

    static async addSeries(req, res) {

        try{
            const newSeries = await seriesModel.addSeries(req.body.name, req.body.seasons);
            return res.status(200).json(req.body)

        }catch(error){
        res.status(500).json(error.message)
    }
}

    static async deleteSeries (req, res) {
        try{
            const { id } = req.params;
            await seriesModel.deleteSeries(id);
            return res.status(200).json(`${req.body} deleted successfully!`)
        } catch(error) {
            res.status(500).json(error.message)
        }
    }

    static async updateSeries (req, res) {
        try{
            const { id } = req.params;
            await seriesModel.updateSeries(id, req.body);
            return res.status(200).json(`updated successfully!`)
        } catch(error) {
            res.status(500).json(error.message)
        }
    }

    static async searchByStatus (req, res) {
        try{
            const filtered = await seriesModel.searchByStatus('false')
            return res.status(200).json(filtered)
        } catch(error) {
            res.status(500).send(error.message)
        }
    }

}




export default SeriesController;