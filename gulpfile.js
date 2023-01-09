
let path          = require('path');
let gulp          = require('gulp');
let clean         = require('gulp-clean');
let rename        = require('gulp-rename');
let marked        = require('gulp-marked');
let through2      = require('through2');
let twig          = require('twig')
let liveServer    = require("live-server");

twig.cache(false);

function applyTemplate(templateFile) {
  const tplFile = path.join(__dirname, templateFile)
  return through2.obj(function (file, enc, cb) {
      var data = {
          content: file.contents.toString()
      };
      twig.renderFile(tplFile, data, function(err, html) {
        if (err === null) {
          file.contents = Buffer.from(html, 'utf8')
        }
        cb(err, file)
      })
  })
}

function mediaTask() {
  return gulp.src('media/**/*')
    .pipe(gulp.dest('build'))
}

function pagesTask() {
  return gulp.src('pages/*.md')
    .pipe(marked())
    .pipe(applyTemplate('templates/page.html'))
    .pipe(rename({extname: '.html'}))
    .pipe(gulp.dest('build'))
}


function pagesHtmlTask() {
  return gulp.src('pages/*.html')
    .pipe(applyTemplate('templates/page.html'))
    .pipe(rename({extname: '.html'}))
    .pipe(gulp.dest('build'))
}

function cleanTask() {
  return gulp.src('build', {read: false, allowEmpty: true})
    .pipe(clean())
}

function serverTask() {
  gulp.watch('media/**/*', mediaTask);
  gulp.watch('pages/*.md', pagesTask);
  gulp.watch('pages/*.html', pagesHtmlTask);
  gulp.watch('templates/*.html', pagesTask);

  liveServer.start({
    root: "build",
    wait: 500
  });
}

let buildTasks = gulp.parallel(mediaTask, pagesTask, pagesHtmlTask)

exports.build   = buildTasks
exports.clean   = cleanTask
exports.server  = gulp.series(buildTasks, serverTask) 
exports.default = buildTasks