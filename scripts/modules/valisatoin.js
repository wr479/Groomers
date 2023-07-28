export function validation() {
$('.makeOrder').on('click', ()=>{
    
    $('input[class="val"]').val() == ''? $('input[class="val"]').addClass('error'):
    $('input[class="val"]').removeClass('error')    
})
}