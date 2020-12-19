import * as $ from 'jquery'
import Post from './Post'
import './styles/styles.css'
import WebpackLogo from './assets/IMG_20180924_145057'

const post = new Post('Webpack Post', WebpackLogo)

$('pre').html(post.toString())

// console.log('Post toString:', post.toString())

