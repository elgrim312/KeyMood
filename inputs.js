var inputs = document.querySelectorAll('input');
  var words = query.split(' ');
  for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = words[i];
  }
