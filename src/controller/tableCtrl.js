import Table from '../model/Table';

const tableCtrl = {
    getAllTable: async(req, res) => {
        try {
            const table = await Table.find();

            return res.status(200).json(table);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getTable: async(req, res) => {
        try {
            const table = await Table.findById(req.params.id);

            if (!table) {
                return res.status(404).json("Ban nay khong ton tai!");
            }

            return res.status(200).json(table);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    createTable: async(req, res) => {
        try {
            const table = await new Table(req.body);

            await table.save();

            return res.status(200).json(table);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateTable: async(req, res) => {
        try {
            const table = await Table.findByIdAndUpdate({
                _id: req.params.id
            }, req.body, {
                new: true
            });

            if (!table) {
                return res.status(404).json("Ban khong ton tai!")
            }

            return res.status(200).json(table);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteTable: async(req, res) => {
        try {
            const table = await Table.findByIdAndDelete(req.params.id);

            if (!table) {
                return res.status(404).json("Ban nay khong ton tai!")
            }

            return res.status(200).json("Xoa ban thanh cong!");
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateTableStatus: async(tableName) => {
        try {
            await Table.findOneAndUpdate({
                tableName: tableName,
            }, {
                tableStatus: true
            });
        } catch (error) {
            console.log(error)
        }
    },
    resetTable: (req, res) => {
        Table.updateMany({}, { tableStatus: false })
            .then(() => res.status(200).json("OK"))
            .catch(error => res.status(500).json(error))
    }
}

export default tableCtrl;