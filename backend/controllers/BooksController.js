exports.bookList = [
	(req, res) => {
		try {
			return res.status(200).json({success:true});
		} catch (err) {
			console.log(err);
		}
	}];