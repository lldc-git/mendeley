function bindings(){
  //bind 'key up' -> search input
  $('#search').keyup(checkInput);

  //bind 'click' -> submit button
  $('#submit').click(send);

  //bind 'click' -> clear button
  $('#clear').click(clearClick);

  //bind 'key up' -> return key
//$.bind('keyup',checkInput);
}