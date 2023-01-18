const AuthService = require('../services/auth.services')
const asdf = require('path')
class AuthController {
	getPage_homePage = async (req,res) => {
		 // res.sendFile(__dirname +"/home.ejs")
		res.render('home/home')
	}
}






module.exports = AuthController