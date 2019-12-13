$('#some-input').keyup(function (event) {
    if (event.keyCode == 27) {
        $(this).val('')
    }
    var currentValue = $(this).val()
    $('#some-paragraph').html(currentValue)
})
$('#some-input').keypress(function (event) {
    if (event.keyCode == 13) {
        var text = $('#some-input').val()
        $(this).val(text)
        var currentText = $('#some-input').val()
        var newP = $('<p>' + currentText + '</p>')
        $('#wrapper').append(newP)
        $(this).val('')