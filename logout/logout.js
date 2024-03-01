const express = require("express");
const router = express.Router();

router.get("/logout", (req, res) => {

  req.logout((err) => {
    if (err) {
      console.error("Error logging out:", err);
      return res.redirect("/");
    }

    req.session.destroy((destroyErr) => {
      if (destroyErr) {
        console.error("Error destroying session:", destroyErr);
        return res.redirect("/");
      }

      res.redirect("/login");
    });
  });
});

module.exports = router;
