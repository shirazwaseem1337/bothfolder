import Annoucement from "../models/Annoucement.js"

export const addAnnoucement = async (req, res) => {
    const data = req.body;      // scehma ka object
    const newAnnoucement = new Annoucement(data);

    try {
        await newAnnoucement.save();
        res.status(201).json(newAnnoucement);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getAnnoucements = async (req, res) => {
    try {
        const annoucements = await Annoucement.find({})        // empty chora so all data ajaya ga
        res.status(200).json(annoucements)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const deleteAnnoucement = async (req, res) => {

    try {
        await Annoucement.deleteOne({ _id: req.params.id });
        res.status(201).json("Annoucement deleted Successfully");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const getAnnoucementById = async (req, res) => {
    try {
        // const user = await User.find({ _id: req.params.id });

        const annoucement = await Annoucement.findById(req.params.id);
        res.status(200).json(annoucement);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const editAnnoucement = async (req, res) => {
    let annoucement = req.body;
    const editAnnoucement = new Annoucement(annoucement);
    try {
        await Annoucement.updateOne({ _id: req.params.id }, editAnnoucement); // takes two argument phely kis ko krna 2nd kis sy replace krna
        res.status(200).json(editAnnoucement)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}