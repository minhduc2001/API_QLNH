import SaleOff from "../model/Saleoff";

const saleoffCtrl = {
    getAllSaleoff: async (req, res) => {
        try {
            const saleoff = await SaleOff.find();

            return res.status(200).json(saleoff);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getSaleoff: async (req, res) => {
        try {
            const saleoff = await SaleOff.findById(req.params.id);

            if (!saleoff) {
                return res.status(404).json("Uu dai nay khong ton tai!");
            }

            return res.status(200).json(saleoff);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    createSaleoff: async (req, res) => {
        try {
            console.log("Warning >>>> ", req.body);
            const newSaleOff = new SaleOff(req.body);

            // newSaleOff.timeStart = new ISODate(req.body.timeStart);
            // newSaleOff.timeEnd = new ISODate(req.body.timeEnd);

            console.log("ABC >>>>", newSaleOff);

            await newSaleOff.save();

            return res.status(200).json(newSaleOff);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateSaleoff: async (req, res) => {
        try {
            const saleoff = await SaleOff.findByIdAndUpdate(
                req.params.id
                , req.body, {
                new: true
            });

            if (!saleoff) {
                return res.status(404).json("Uu dai nay khong ton tai!")
            }

            return res.status(200).json(saleoff);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteSaleoff: async (req, res) => {
        try {
            const saleoff = await SaleOff.findByIdAndDelete(req.params.id);

            if (!saleoff) {
                return res.status(404).json("Uu dai nay khong ton tai!")
            }

            return res.status(200).json("Xoa uu dai thanh cong!");
        } catch (error) {
            return res.status(500).json(error);
        }
    }
};

export default saleoffCtrl;