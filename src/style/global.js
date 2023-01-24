import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
    color: black;
	font-family: 'Pretendard';
}
ol, ul {
	list-style: none;
}
a{
	text-decoration:none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
.custom-calendar.rmdp-shadow {
	box-shadow: none;
}
.custom-calendar.rmdp-wrapper{
	border: 1px solid #F49393;
	border-radius: 10px;
}
.rmdp-arrow {
	border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    height: 3px;
    margin-top: 5px;
    padding: 2px;
    width: 3px;
}
.rmdp-week-day {
    color: black;
    cursor: default;
    font-size: 12px;
    font-weight: 400;}
	.rmdp-day.rmdp-selected span:not(.highlight) {
    background-color: #F49393;
    box-shadow: 0 0 3px #8798ad;
    color: #fff;
}

`;

export default GlobalStyle;
