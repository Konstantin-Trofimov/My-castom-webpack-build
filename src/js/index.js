import * as $ from 'jquery'
import Post from '@models/Post'
import '@/styles/style.css'
import json from '@/assets/json'
import xml from '@/assets/data.xml'
import csv from '@/assets/data.csv'
import WebpackLogo from '../assets/webpack-logo'


const post = new Post('Hello from Post.js!!!', WebpackLogo)

$('pre').addClass('code').html(post.toString())

console.log(post.toString())
console.log(csv)
console.log(json.title)
console.log(xml)







	




