
/**
 * User registration.
 *
 * @param {string}      firstName
 * @param {string}      lastName
 * @param {string}      email
 * @param {string}      password
 *
 * @returns {Object}
 */
exports.register = [
	(req, res) => {
		try {
			return res.status(200).json({success:true});
		} catch (err) {
			console.log(err);
		}
	}];

/**
 * User login.
 *
 * @param {string}      email
 * @param {string}      password
 *
 * @returns {Object}
 */
exports.login = [
	(req, res) => {
		try {
			return res.status(200).json({success:true});
		} catch (err) {
			console.log(err);
		}
	}];

/**
 * Verify Confirm otp.
 *
 * @param {string}      email
 * @param {string}      otp
 *
 * @returns {Object}
 */
exports.verifyConfirm = [
	(req, res) => {
		try {
			return res.status(200).json({success:true});
		} catch (err) {
			console.log(err);
		}
	}];

/**
 * Resend Confirm otp.
 *
 * @param {string}      email
 *
 * @returns {Object}
 */
exports.resendConfirmOtp = [
	(req, res) => {
		try {
			return res.status(200).json({success:true});
		} catch (err) {
			console.log(err);
		}
	}];