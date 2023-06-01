// document.addEventListener('DOMContentLoaded', () => {
//     $('input#btn_translate').on('click', () => {
//         const $input = $('input#language_code').val()
//         $.ajax({
//             type: "GET",
//             url: `https://hellosalut.stefanbohacek.dev/?lang=${$input}`,
//             success: response => {
//                 $('div#hello').text(response.hello);
//             }
//         });
//     });
// });

$('document').ready(() => {
    const url = 'https://hellosalut.stefanbohacek.dev/?lang=';
    $('input#btn_translate').click(() => {
        const $input = $('input#language_code').val() 
        $.get((url + $input), data => {
        $('div#hello').html(data.hello);
      });
    });
});
