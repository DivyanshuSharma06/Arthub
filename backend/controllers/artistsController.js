const Artwork = require("../models/Artwork");

exports.getArtistInventory = async (req, res) => {
    try {
        let uid = req.uid
        let inventory = await Artwork.find({
            artist: uid
        })
        res.status(200).send(inventory)
    } catch (error) {
        console.error(error)
        res.status(500).send({
            message: "Error fetching artist inventory."
        })
    }
}