const gulp = require("gulp");

gulp.task("build", function (cb) {
  console.log("Construyendo el sitio");
  setTimeout(cb, 1200);
});
