# -App
仿去哪儿App

###项目技术 swiper、scss、stylus、vue.js、axios、vuex、fastclick、
### 起步
* 安装fastclick包(解决浏览器300毫秒延迟)
```
npm run fastclick
```
* main.js中
```
import fastclick from 'fastclick'
fastclick.attach(document.body);

```
* 下载u-reset和iconfont文件，导入assets文件夹中
```
import './assets/css/u-reset.css'
import './assets/css/iconfont.css'
```
### 轮播
在github中搜索vue-swiper

### 分类分页效果同样用swiper实现
应该的数据格式：
```
pages:{
[]，
[]
}
```
