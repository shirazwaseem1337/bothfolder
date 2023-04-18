import Scholarship from "../models/Scholarship.js"

export const addScholarship = async (req, res) => {
    const data = req.body;      // scehma ka object
    const newScholarship = new Scholarship(data);

    try {
        await newScholarship.save();
        res.status(201).json(newScholarship);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getScholarships = async (req, res) => {
    try {
        const scholarships = await Scholarship.find({})        // empty chora so all data ajaya ga
        res.status(200).json(scholarships)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const deleteScholarship = async (req, res) => {

    try {
        await Scholarship.deleteOne({ _id: req.params.id });
        res.status(201).json("Scholarship deleted Successfully");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const getScholarshipById = async (req, res) => {
    try {
        // const user = await User.find({ _id: req.params.id });

        const scholarship = await Scholarship.findById(req.params.id);
        res.status(200).json(scholarship);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const editScholarship = async (req, res) => {
    let scholarship = req.body;
    const editScholarship = new Scholarship(scholarship);
    try {
        await Scholarship.updateOne({ _id: req.params.id }, editScholarship); // takes two argument phely kis ko krna 2nd kis sy replace krna
        res.status(200).json(editScholarship)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}