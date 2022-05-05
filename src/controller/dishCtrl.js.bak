import Dish from '../model/Dish';
import { APIfeartures } from "../lib/features";

const dishCtrl = {
    getAllDish: async (req, res) => {
        try {
            const features = new APIfeartures(Dish.find().populate('category'), req.query)
                .paginating()   // phân trang
                .sorting()      // sắp xếp
                .searching()    // tìm kiếm
                .filtering();   // lọc

            const result = await Promise.allSettled([
                features.query
            ]);

            const dishes = result[0].status === 'fulfilled' ? result[0].value : [];

            return res.status(200).json(dishes);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getDish: async (req, res) => {
        try {
            const dish = await Dish.findById(req.params.id).populate('category');

            if (!dish) {
                return res.status(404).json("Mon an khong ton tai!");
            }

            return res.status(200).json(dish);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    createDish: async (req, res) => {
        try {
            const dish = await new Dish(req.body);

            await dish.save();

            return res.status(200).json(dish);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateDish: async (req, res) => {
        try {
            const dish = await Dish.findByIdAndUpdate({
                _id: req.params.id
            }, req.body, {
                new: true
            }).populate('category');

            if (!dish) {
                return res.status(404).json("Mon an khong ton tai!")
            }

            return res.status(200).json(dish);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteDish: async (req, res) => {
        try {
            const dish = await Dish.findByIdAndDelete(req.params.id);

            if (!dish) {
                return res.status(404).json("Mon an khong ton tai!")
            }

            return res.status(200).json("Xoa mon an thanh cong!");
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default dishCtrl;