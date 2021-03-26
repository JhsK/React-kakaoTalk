const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const User = require("../models/user");

const router = express.Router();

router.post("/join", isNotLoggedIn, async (req, res, next) => {
  const { userId, password } = req.body;
  try {
    const exuser = await User.findOne({ where: { userId } });
    if (exuser) {
      return res.redirect("/join?error=exist");
    }
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      userId,
      password: hash,
    });
    return res.redirect("http://localhost:3000/");
  } catch (error) {
    console.error(error);
    res.json({
      message: err.message,
      error: err,
    });
    return next(error);
  }
});

router.post("/login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local", (authError, user, info) => {
    console.log(user);
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.redirect(`/?loginError=${info.message}`);
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }

      return (function () {
        // const exImg = User.findAll({
        //   attributes: ["profile_iamge"],
        //   where: {
        //     provider: "kakao",
        //   },
        // });
        // res.json(exImg);
        res.redirect("http://localhost:3000/main");
      })();
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

router.get("/logout", isLoggedIn, (req, res) => {
  console.log("logout please!!!");
  req.logout();
  req.session.destroy();
  res.redirect("http://localhost:3000/");
});

router.get("/kakao", passport.authenticate("kakao"));

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("http://localhost:3000/main");
  }
);

module.exports = router;
