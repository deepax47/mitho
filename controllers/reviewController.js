const mongoose = require('mongoose');
const Review = mongoose.model('Review');

exports.addReview = async (req, res) => {

    //res.json(req.body);
    req.body.author = req.user._id;
    req.body.store = req.params.id;
    const newReview = new Review(req.body);
    await newReview.save();
    req.flash('success', 'Review saved');
    //res.json(req.body);
    res.redirect('back');
}