import Category from '../model/Category';

const categoryCtrl = {
    getAllCategory: async (req, res) => {
        try {

            const categories = await Category.find();


            return res.status(200).json(categories);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getCategory: async (req, res) => {
        try {
            const category = await Category.findById(req.params.id);

            if (!category) {
                return res.status(404).json("Mon an khong ton tai!");
            }

            return res.status(200).json(category);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    createCategory: async (req, res) => {
        try {
            const category = await new Category(req.body);

            await category.save();

            return res.status(200).json(category);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateCategory: async (req, res) => {
        try {
            const category = await Category.findByIdAndUpdate({
                _id: req.params.id
            }, req.body, {
                new: true
            });

            if (!category) {
                return res.status(404).json("Mon an khong ton tai!")
            }

            return res.status(200).json(category);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const category = await Category.findByIdAndDelete(req.params.id);

            if (!category) {
                return res.status(404).json("Mon an khong ton tai!")
            }

            return res.status(200).json("Xoa mon an thanh cong!");
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default categoryCtrl;