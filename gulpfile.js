'use strict';

var fs           = require('fs');
var path         = require('path');
var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var request      = require('request');

gulp.task('default', ['style'], function () {
  gulp.watch('./style/**/*.scss', ['style']);
  gulp.watch('./public/**/*.html', ['reload']);

  return browserSync({
    notify: false,
    open: false,
    ghostMode: false,

    server: {
      baseDir: './public/',
    }
  });
}); 

gulp.task('reload', function () {
  browserSync.reload();
});

gulp.task('style', function () {
  return gulp.src('./style/main.scss')
    .pipe(sass({errLogToConsole: true, outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./static/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('commits', function () {

  var contentDir = 'content/projects';
  var repoRegex  = /github\s*=\s*"https:\/\/github.com\/([\w-\.\/]*)"/i;
  var firstRegex = /first\s*=\s*"[\d-]*"/i;
  var lastRegex  = /date\s*=\s*"[\d\w:+-]*"/i;
  var totalRegex  = /total\s*=\s*"[\d]*"/i;

  fs.readdir(contentDir, function (err, files) {
    files.forEach(function (fp, i) {

      fp = path.join(contentDir, fp);

      fs.readFile(fp, { 
        encoding: 'utf8',
      },function (err, content) {

        var match = repoRegex.exec(content);

        if (match == null) {
          return;
        }

        var repo = match[1];

        if (repo == "stayradiated/") {
          return;
        }

        var pjaxUrl = 'https://github.com/' + repo + '/graphs';
        var metaUrl = 'https://github.com/' + repo + '/network/meta';
        var contribUrl = 'https://github.com/' + repo + '/graphs/contributors-data';

        (function getMeta() {
          request(metaUrl, function (err, res, metaBody) {
            if (! err && res.statusCode == 200) {
              var result = JSON.parse(metaBody);

              var firstDate = result.dates[0];

              // result.blocks.filter(function (author) {
              //   return author.name === 'stayradiated';
              // })[0]

              var lastDate = result.dates[result.spacemap[0][0][1]];
              // var lastDate = result.dates[result.dates.length - 1];

              content = content.replace(firstRegex, 'first = "' + firstDate + '"');
              content = content.replace(lastRegex, 'date = "' + lastDate + '"');

              request(contribUrl, function (err, res, contribBody) {
                if (! err && res.statusCode == 200) {
                  var result = JSON.parse(contribBody);

                  var me = result.filter(function (contrib) {
                    return contrib.author.login === 'stayradiated';
                  })[0];

                  var total = (me.total);

                  content = content.replace(totalRegex, 'total = "' + total + '"');

                  console.log(repo, firstDate, lastDate, total);

                  fs.writeFile(fp, content, { encoding: 'utf8' }, function (err) {
                    if (err) {
                      console.log('Failed writing:', fp);
                    }
                  });
                } else {
                  console.log('!!!', repo);
                }
              });

            } else {
              console.log(':::', repo);
              request(pjaxUrl, function (err, res, body) {
                getMeta();
              });
            }
          });
        }());

      });
    });
  });
});
