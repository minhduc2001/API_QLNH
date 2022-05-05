import Booking from '../model/Booking';
import Table from '../model/Table';
import tableCtrl from './tableCtrl';

const bookingCtrl = {
    getAllBooking: async(req, res) => {
        try {
            const booking = await Booking.find()
                .populate('booker')
                .populate('dishes')
                .populate('table');

            return res.status(200).json(booking);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getBooking: async(req, res) => {
        try {
            const booking = await Booking.findById(req.params.id)
                .populate('booker')
                .populate('dishes')
                .populate('emptyTable');

            if (!booking) {
                return res.status(404).json("Don dat ban khong ton tai!");
            }

            return res.status(200).json(booking);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    createBooking: async(req, res) => {
        const table = await Table.find({ tableStatus: false });
        let i_table = Math.floor(Math.random() * table.length);

        try {

            const booking = await new Booking(req.body);
            booking.table = table[i_table];
            await booking.save();
            tableCtrl.updateTableStatus(table[i_table].tableName)
                .catch((err) => {
                    console.log(err)
                })
            return res.status(200).json(booking);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateBooking: async(req, res) => {
        try {

            const booking = await Booking.findByIdAndUpdate({
                _id: req.params.id
            }, req.body, {
                new: true
            }).populate('booker').populate('dishes');

            if (!booking) {
                return res.status(404).json("Don dat ban khong ton tai!");
            }

            return res.status(200).json(booking);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteBooking: async(req, res) => {
        try {
            const booking = await Booking.findByIdAndDelete(req.params.id);

            if (!booking) {
                return res.status(404).json("Don dat ban khong ton tai!")
            }
            return res.status(200).json("Xoa don dat ban thanh cong thanh cong!");
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default bookingCtrl;