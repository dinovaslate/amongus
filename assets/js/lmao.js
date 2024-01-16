$('.collapse').collapse({
  toggle: false
});

$('.collapse').on('hidden.bs.collapse', function () {
  $(this).addClass("d-none");
});