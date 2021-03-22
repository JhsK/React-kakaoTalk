const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const dotenv = require("dotenv");

dotenv.config();
const pageRouter = require("./routes/page");

const back = express();
back.set("port", process.env.PORT || 8001);

back.use(morgan("dev"));
back.use(express.static(path.join(__dirname, "build")));
back.use(express.json());
back.use(express.urlencoded({ extended: false }));
back.use(cookieParser(process.env.COOKIE_SECRET));
back.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

back.use("/", pageRouter);

back.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

back.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

back.listen(back.get("port"), () => {
  console.log(back.get("port"), "번 포트에서 대기중");
});
