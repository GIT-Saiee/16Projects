var BOOK_WIDTH = 830;
var BOOK_HEIGHT = 260;
var PAGE_WIDTH = 400;
var PAGE_HEIGHT = 250;
var PAGE_Y = ( BOOK_HEIGHT - PAGE_HEIGHT ) / 2;
var CANVAS_PADDING = 60;




var book = document.getElementById( "book" );
var pages = book.getElementsByTagName( "section" );
for( var i = 0, len = pages.length; i < len; i++ ) {
pages[i].style.zIndex = len - i;
flips.push({ progress: 1, target: 1, page: pages[i], dragging: false });
}

function mouseMoveHandler( event ) {
    // Offset mouse position so that the top of the spine is 0,0
    mouse.x = event.clientX - book.offsetLeft - ( BOOK_WIDTH / 2 );
    mouse.y = event.clientY - book.offsetTop;
    }
    function mouseDownHandler( event ) {
    if (Math.abs(mouse.x) < PAGE_WIDTH) {
    if (mouse.x < 0 && page - 1 >= 0) {
    flips[page - 1].dragging = true;
    } else if (mouse.x > 0 && page + 1 < flips.length) {
    flips[page].dragging = true;
    }
    }
    // Prevents the text selection cursor from appearing when dragging
    event.preventDefault();
    }
    function mouseUpHandler( event ) {
    for( var i = 0; i < flips.length; i++ ) {
    if( flips[i].dragging ) {
    flips[i].target = mouse.x < 0 ? -1 : 1;
    if( flips[i].target === 1 ) {
    page = page - 1 >= 0 ? page - 1 : page;
    } else {
    page = page + 1 < flips.length ? page + 1 : page;
    }
    }
    flips[i].dragging = false;
    }
    }

    if( flip.dragging ) {
        flip.target = Math.max( Math.min( mouse.x / PAGE_WIDTH, 1 ), -1 );
        }
        flip.progress += ( flip.target - flip.progress ) * 0.2;

        if( flip.dragging || Math.abs( flip.progress ) < 0.997 ) {
            drawFlip( flip );
            }
drawFlip(flip)
{
    // Strength of the fold is strongest in the middle of the book
var strength = 1 - Math.abs( flip.progress );
// Width of the folded paper
var foldWidth = ( PAGE_WIDTH * 0.5 ) * ( 1 - flip.progress );
// X position of the folded paper
var foldX = PAGE_WIDTH * flip.progress + foldWidth;
// How far outside of the book the paper is bent due to perspective
var verticalOutdent = 20 * strength;
// The maximum width of the left and right side shadows
var paperShadowWidth = ( PAGE_WIDTH * 0.5 ) * Math.max( Math.min( 1 - flip.progress, 0.5 ), 0 );
// Mask the page by setting its width to match the foldX
flip.page.style.width = Math.max(foldX, 0) + "px";

context.save();
context.translate( CANVAS_PADDING + ( BOOK_WIDTH / 2 ), PAGE_Y + CANVAS_PADDING );
var foldGradient = context.createLinearGradient(foldX - paperShadowWidth, 0, foldX, 0);
foldGradient.addColorStop(0.35, '#fafafa');
foldGradient.addColorStop(0.73, '#eeeeee');
foldGradient.addColorStop(0.9, '#fafafa');
foldGradient.addColorStop(1.0, '#e2e2e2');
context.fillStyle = foldGradient;
context.strokeStyle = 'rgba(0,0,0,0.06)';
context.lineWidth = 0.5;
context.beginPath();
context.moveTo(foldX, 0);
context.lineTo(foldX, PAGE_HEIGHT);
context.quadraticCurveTo(foldX, PAGE_HEIGHT + (verticalOutdent * 2), foldX - foldWidth, PAGE_HEIGHT + verticalOutdent);
context.lineTo(foldX - foldWidth, -verticalOutdent);
context.quadraticCurveTo(foldX, -verticalOutdent * 2, foldX, 0);
context.fill();
context.stroke();
context.restore();}