$(document).ready(function(){
  let modal = `
  <div class="modal">
    <div class="m_inner">
      <a href="#" title="이벤트 페이지로 바로가기">
        <img src="./images/"main_Popup_PC_450x600.jpg" alt="배너">
      </a>
      <p>
        <input type="checkbox" id="ch">
        <label for="ch">오늘 하루 열지 않음</label>
        <input type="button" value="닫기" id="c_btn">
      </p>
    </div>
  </div>    
  `
  $('body').append(modal);

  let ch = $('#ch');

  if($.cookie('popup')=='none');
  $('.modal').hide();

  function close_popup(){
    if(ch.is(':checked')){
      $.cookie('poptp', 'none',{expires:1, path:'/'});
      $('.modal').hide();
    }else{
      $('.modal').hide();
    }
  }
  $('#c_btn','#ch').click(function(){
    close_popup();
  });

});