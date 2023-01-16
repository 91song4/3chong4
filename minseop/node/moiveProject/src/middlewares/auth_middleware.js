module.exports = async (req,res,next) => {
	console.log("auth미들웨어를 거쳐간다.");
	return next();
}