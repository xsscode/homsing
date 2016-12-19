/**
 * Created by Administrator on 2016/12/10 0010.
 */
var gulp=require('gulp');
var stylus=require('gulp-stylus');
var minifycss=require('gulp-minify-css');
var uglify=require('gulp-uglify');
var browserSync=require('browser-sync').create();
var reload=browserSync.reload;
var nodemon=require('gulp-nodemon');
gulp.task('nodemon',function(ab){
	var ft=false;
	return nodemon({
		script:'./app.js'
	} ).on('start',function(){
		if(!ft){
			ab();
			ft = true;
		}
	})
});
gulp.task('browserSync',['nodemon'],function(){
	browserSync.init({
		proxy:{
			target:'http://127.0.0.1:11012'
		},
		files:['*'],
		port:10045,
		open:false,
		notify:false
	})
});
/*login*/
gulp.task('stylus',function(){
	return gulp.src('./stylus/**/*.styl')//指定一个文件及所有子目录下的文件
		.pipe(stylus())
		.pipe(gulp.dest('./public/css'))
});
gulp.task('uglify',function(){
	return gulp.src('./stylus/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./public/minjs'))
});



gulp.task('minifycss',['stylus'],function(){
 return gulp.src('./public/css/**/*.css')
 .pipe(minifycss())
 .pipe(gulp.dest('./public/mincss'))
 });


gulp.task('watcher',['browserSync','stylus','uglify','minifycss'],function(){
	gulp.watch('./stylus/**/*.styl',['stylus']);
	gulp.watch('./stylus/**/*.js',['uglify']);

	gulp.watch('./public/css/**/*.css',['minifycss']);
	gulp.watch([
		'./public/mincss/**/*.css','.pulic/minjs/**/*.js'
	] ).on('change',function(){
		reload();
	})
});
