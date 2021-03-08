

<template>
  <div id="app">
    <header_composant></header_composant>
    <router-view/>
  </div>
</template>

<script>
import header_composant from "./components/HeaderComposant.vue";

export default {
    name: "Header",
    components: {
        header_composant
    }
};
</script>

<style>

html {
	box-sizing: border-box
}

*,
*:before,
*:after {
	box-sizing: inherit
}

html {
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%
}

body {
	margin: 0
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section {
	display: block
}

summary {
	display: list-item
}

audio,
canvas,
progress,
video {
	display: inline-block
}

progress {
	vertical-align: baseline
}

audio:not([controls]) {
	display: none;
	height: 0
}

[hidden],
template {
	display: none
}

a {
	background-color: transparent
}

a:active,
a:hover {
	outline-width: 0
}

abbr[title] {
	border-bottom: none;
	text-decoration: underline;
	text-decoration: underline dotted
}

b,
strong {
	font-weight: bolder
}

dfn {
	font-style: italic
}

mark {
	background: #ff0;
	color: #000
}

small {
	font-size: 80%
}

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline
}

sub {
	bottom: -0.25em
}

sup {
	top: -0.5em
}

figure {
	margin: 1em 40px
}

img {
	border-style: none
}

code,
kbd,
pre,
samp {
	font-family: monospace, monospace;
	font-size: 1em
}

hr {
	box-sizing: content-box;
	height: 0;
	overflow: visible
}

button,
input,
select,
textarea,
optgroup {
	font: inherit;
	margin: 0
}

optgroup {
	font-weight: bold
}

button,
input {
	overflow: visible
}

button,
select {
	text-transform: none
}

button,
[type=button],
[type=reset],
[type=submit] {
	-webkit-appearance: button
}

button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
	border-style: none;
	padding: 0
}

button:-moz-focusring,
[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring {
	outline: 1px dotted ButtonText
}

fieldset {
	border: 1px solid #c0c0c0;
	margin: 0 2px;
	padding: .35em .625em .75em
}

legend {
	color: inherit;
	display: table;
	max-width: 100%;
	padding: 0;
	white-space: normal
}

textarea {
	overflow: auto
}

[type=checkbox],
[type=radio] {
	padding: 0
}

[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
	height: auto
}

[type=search] {
	-webkit-appearance: textfield;
	outline-offset: -2px
}

[type=search]::-webkit-search-decoration {
	-webkit-appearance: none
}

::-webkit-file-upload-button {
	-webkit-appearance: button;
	font: inherit
}

hr {
	border: 0;
	border-top: 1px solid #eee;
	margin: 20px 0
}

.poster {
	max-width: 100%;
	height: auto
}

img {
	vertical-align: middle
}

a {
	color: inherit
}

.hoverable tbody tr:hover,
.ul.hoverable li:hover {
	background-color: #ccc
}

.positioning-centered tr th,
.positioning-centered tr td {
	text-align: center
}

.my-style-button {
	border: none;
	display: inline-block;
	padding: 8px 16px;
	vertical-align: middle;
	overflow: hidden;
	text-decoration: none;
	color: inherit;
	background-color: inherit;
	text-align: center;
	cursor: pointer;
	white-space: nowrap
}


.my-style-button {
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none
}

.my-style-button:disabled {
	cursor: not-allowed;
	opacity: 0.3
}

:disabled * {
	pointer-events: none
}



.ul {
	list-style-type: none;
	padding: 0;
	margin: 0
}

.ul li {
	padding: 8px 16px;
	border-bottom: 1px solid #ddd
}

.ul li:last-child {
	border-bottom: none
}

.menu{
	max-width:1200px;
	margin:auto;
}

.sidebar{
	display:none;
	z-index:2;
	width:40%;
	min-width:300px;
}

.menu-sidebar {
	height: 100%;
	width: 200px;
	background-color: #fff;
	position: fixed!important;
	z-index: 1;
	overflow: auto
}

.menu-bar-block,
.menu-bar-block {
	width: 100%
}

.menu-bar-block,
.menu-bar-block {
	min-width: 100%
}

.menu-bar-block  .my-style-button,
.menu-bar-block  .my-style-button {
	width: 100%;
	text-align: left;
	padding: 8px 16px
}

.movie-container,
#main {
	transition: margin-left .4s
}




.bar {
	width: 100%;
	overflow: hidden
}

.positioning-center .bar {
	display: inline-block;
	width: auto
}

.bar .bar-item {
	padding: 8px 16px;
	float: left;
	width: auto;
	border: none;
	display: block;
	outline: 0
}

.bar .thisbar {
	position: static;
	float: left
}

.bar .my-style-button {
	white-space: normal
}

.menu-bar-block .bar-item {
	width: 100%;
	display: block;
	padding: 8px 16px;
	text-align: left;
	border: none;
	white-space: normal;
	float: none;
	outline: 0
}

.menu-bar-block.positioning-center .bar-item {
	text-align: center
}


.container-block:after,
.container-block:before,
.bar:before,
.bar:after {
	content: "";
	display: table;
	clear: both
}


.movie-info {
	float: left;
	width: 100%
}


@media (min-width:601px) {
	.movie-info {
		width: 24.99999%
	}
	.third {
		width: 33.33333%
	}
}

.movies-content {
	margin-left: auto;
	margin-right: auto
}

.movies-content {
	max-width: 980px
}

@media (max-width:992px) {
	.movie-container {
		margin-left: 0!important;
		margin-right: 0!important;
	}
}

.positioning-top {
	position: fixed;
	width: 100%;
	z-index: 1
}

.positioning-top {
	top: 0
}

.row-padding,
.row-padding>.third,
.row-padding>.movie-info {
	padding: 0 8px
}

.container-block {
	padding: 0.01em 16px
}

.menu-card,
.menu-card-2 {
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)
}

.menu-card-4 {
	box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19)
}



.animation-left {
	position: relative;
	animation: animateleft 0.4s
}

@keyframes animateleft {
	from {
		left: -300px;
		opacity: 0
	}
	to {
		left: 0;
		opacity: 1
	}
}





.size-large {
	font-size: 24px!important
}

.positioning-left-align {
	text-align: left!important
}

.positioning-right-align {
	text-align: right!important
}

.positioning-center {
	text-align: center!important
}

.positioning-topbar {
	border-top: 6px solid #ccc!important
}

.positioning-leftbar {
	border-left: 6px solid #ccc!important
}

.positioning-rightbar {
	border-right: 6px solid #ccc!important
}

movies-padding-small {
	padding: 4px 8px!important
}

movies-padding {
	padding: 8px 16px!important
}

movies-padding-large {
	padding: 12px 24px!important
}

.padding-16 {
	padding-top: 16px!important;
	padding-bottom: 16px!important
}

movies-padding-24 {
	padding-top: 24px!important;
	padding-bottom: 24px!important
}

movies-padding-32 {
	padding-top: 32px!important;
	padding-bottom: 32px!important
}

movies-padding-48 {
	padding-top: 48px!important;
	padding-bottom: 48px!important
}

movies-padding-64 {
	padding-top: 64px!important;
	padding-bottom: 64px!important
}

movies-padding-top-64 {
	padding-top: 64px!important
}

movies-padding-top-48 {
	padding-top: 48px!important
}

movies-padding-top-32 {
	padding-top: 32px!important
}

movies-padding-top-24 {
	padding-top: 24px!important
}

.positioning-left {
	float: left!important
}

.positioning-right {
	float: right!important
}

.my-style-button:hover {
	color: #000!important;
	background-color: #ccc!important
}



.color-white {
	color: #000!important;
	background-color: #fff!important
}

.black {
	color: #fff!important;
	background-color: #000!important
}

/* devanagari */
@font-face {
  font-family: 'Karma';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/karma/v11/va9I4kzAzMZRGLBpQeNHkQ.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-family: 'Karma';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/karma/v11/va9I4kzAzMZRGLBmQeNHkQ.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Karma';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/karma/v11/va9I4kzAzMZRGLBoQeM.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

body,h1,h2,h3,h4,h5,h6 {font-family: "Karma", sans-serif}
.menu-bar-block .bar-item {padding:20px}

.marg-max-movies{
	max-width:1200px;
	margin-top:100px;
}

.image-presentation{
	display:block;
	margin:auto;
}

.movie-poster{
	width:100%
}

.filter{
	float: right;
	padding: 6px;
	margin-top: 8px;
	margin-right: 16px;
	font-size: 17px;
}
</style>
