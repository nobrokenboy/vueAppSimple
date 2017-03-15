/**
 * Created by jessic on 2016/12/29.
 */
/*SASS等工具：源代码 -> 生产环境 CSS*/
/*PostCSS：源代码 -> 标准 CSS -> 生产环境 CSS*/
var gulp=require("gulp"),
    sass=require("gulp-sass"),
    sourcemaps=require("gulp-sourcemaps"),//源文件映射
    autoprefixer=require("autoprefixer"),//浏览器前缀自动补全
    concat=require("gulp-concat"),//合并js
    uglify=require('gulp-uglify'),//js压缩
    imagemin=require('gulp-imagemin'),//压缩图片
    rev=require('gulp-rev-append'),//添加版本号
    rename=require('gulp-rename'),//重命名
    jshint=require('gulp-jshint'),//js语法检测
    browerify=require('browserify'),//让浏览器端支持require()
    postcss=require('gulp-postcss'),//一个支持css多种处理方式的“平台”
    webpack=require('gulp-webpack'),
    _webpack=require('webpack'),
    browerSync=require('browser-sync').create(),
    changed=require('gulp-changed'),//只编译改动过的文件，加快gulp的编译速率
    pngquant=require('imagemin-pngquant'),//深度压缩png
    cache=require('gulp-cache'),//只压缩修改的图片，其余从缓存读取;
    livereload=require('gulp-livereload');//实现浏览器刷新

//自动刷新，加载
var reload=browerSync.reload;
//静态服务器
gulp.task('brower-sync',function(){
    browerSync.init({
        /*server:{
            baseDir: "themes/ohome",
            index: "worksite_mycustomer.html"
        },
        files:['themes/ohome/!*.html']*/
            proxy: '10.70.7.222:8091',
            files: ['themes/ohome/**.html'],
            port: 8099
    });
});
//编译、合并、压缩、重命名css
//sass输入风格(自带压缩功能，可以替代gulp-minify-css)
/*嵌套输出方式 nested,展开输出方式 expanded,紧凑输出方式 compact,压缩输出方式 compressed*/
gulp.task("css",function(){
    //"!src/sass/{reset,common.scss}"
    gulp.src("./src/assets/sass/base.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle:"compressed"}).on("error",sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(rename({suffix:".min"}))
        .pipe(sourcemaps.write())
        .pipe(rev())
        .pipe(gulp.dest("./src/assets/css"))
        .pipe(reload({stream:true}));
});
//检测js语法
gulp.task("jshint",function(){
    gulp.src(['./static/worksite/js/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(reload({stream:true}));
});
//合并，重命名、压缩js
gulp.task("webpack", function () {
    gulp.src(['./static/worksite/js/**/*.js'])
        .pipe(webpack({
            entry : {
                bundle: './static/worksite/js/main.js',
            },
            output : {
                path : '/static/worksite/js',
                filename : '[name].js'//输出的名称与entry中的命名有关bundle
            },
            plugins:[
                new _webpack.ProvidePlugin({
                    $:"jquery",
                    jQuery:"jquery"
                })
            ],
            resolve:{
                alias:{
                    vue: 'vue/dist/vue.js',
                    jquery:'jquery/src/jquery.js'
                }
            }
        }))
        .pipe(rename({suffix:".min"}))
        .pipe(rev())
        .pipe(gulp.dest("./static/worksite/js"))
        .pipe(reload({stream:true}));
});
//图片压缩
gulp.task("imagemin",function(){
    gulp.src(["./src/assets/images/**/*.{jpg,gif,svg,png,ico}"])
        .pipe(cache(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true,//类型：Boolean 默认：false 多次优化svg直到完全优化
            use: [pngquant()]
        })))
        .pipe(gulp.dest("./src/assets/images"))
        .pipe(reload({stream:true}));
});
//监听
gulp.task("watch",function(){
    console.log("hello");
    gulp.watch("static/worksite/scss/*.scss",["css"]);
    gulp.watch("static/worksite/js/**/*.js",["jshint","webpack"]);
    gulp.watch("static/worksite/img/input/**/*.{jpg,gif,svg,png,ico}",["imagemin"]);

    //浏览器自动刷新
    gulp.run('brower-sync');
});
//默认的任务
gulp.task("default",function(){
    console.log("hello");
});
//执行默认的全部
gulp.task("done", function () {
    gulp.run('css');
    gulp.run('jshint');
    gulp.run('webpack');
    gulp.run('imagemin');
});