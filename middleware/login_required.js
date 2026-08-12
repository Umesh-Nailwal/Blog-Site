async function login_required(req, res, next) {
  if (!req.session.user) {
    return res.status(404).redirect("/auth/login");
  }

  next();
}
module.exports = login_required

