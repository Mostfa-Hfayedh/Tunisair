const jwt = require("jsonwebtoken");
const { Utilisateur } = require("../database");

const authProtection = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")

  ) {
    try {
      // Get token fron header
      token = req.headers.authorization.split(" ")[1];

      //Verify token
      const decoded = jwt.verify(token, "secretKeyForJWT@2024");
      //Get Utilisateur from the token
      req.user = await Utilisateur.findByPk(decoded.UtilisateurId);
      next();
    } catch (error) {
      res.status(401).
      send("Not authorized");
    }
  }

  if (!token) {
    res.status(401).
    send("Not authorized,no token ");
  }
};
module.exports = authProtection;