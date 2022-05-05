import User from "../model/Product";

const productCtrl = {


    getAllProduct: async(req, res) => {
        try {
            const users = await User.find();

            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getProduct: async(req, res) => {
        try {
            const user = await User.findById(req.params.id);

            if (!user) {
                return res.status(404).json("Nguoi dung khong ton tai!");
            }

            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getLimitProduct: (req, res) => {
        let page = req.params.page || 1;
        let perPage = 16;

        try {
            User.find()
                .skip((perPage * page) - perPage)
                .limit(perPage)
                .exec((err, users) => {
                    if (err) return next(err);
                    return res.status(200).json(users);
                })
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    sortProducts: (req, res) => {
        let s = req.params.sort || 1;
        try {
            User.find()
                .sort({ price: s })
                .exec((err, users) => {
                    res.status(200).json(users);
                })
        } catch (error) {
            res.status(500).json({ error: error });
        }

    }
}

export default productCtrl;