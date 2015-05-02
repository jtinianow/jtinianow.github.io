portfolio-mar2015-v2
=============================

Jeremy Tinianow portfolio site. Built on the framework [jekyll-gulp-sass-browser-sync](https://github.com/shakyShane/jekyll-gulp-sass-browser-sync). See below:

```javascript
var deploy = require("gulp-gh-pages");

gulp.task("deploy", ["jekyll-build"], function () {
    return gulp.src("./_site/**/*")
        .pipe(deploy());
});
```
