export function validation() {
$('.makeOrder').on('click', ()=>{
    
    $('input[name="phone"]').val() == ''? $('input[name="phone"]').addClass('error'): $('input[name="phone"]').removeClass('error')    
})
}