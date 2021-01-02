import * as $ from 'jquery'
import Post from './Post'
import WebpackLogo from './assets/IMG_20180924_145057'
import './styles/index.js'
import './styles/styles.css'
import './styles/less.less'
import './styles/sass.scss'

const post = new Post('Webpack Post', WebpackLogo)

$('pre').html(post.toString())

// console.log('Post toString:', post.toString())

