window.onload = function () {
  $('#submit').on('click', function () {
    $('#submit').prop("disabled", true);
    var data = $('form').serializeArray();  // ①form to json
    data = parseJson(data); // ②json to 欲しい形
    if (data === false) {
      alert("空欄の箇所があります。");
    } else {
      $.ajax({
        url: 'https://ikqvot24fh.execute-api.ap-northeast-1.amazonaws.com/default/MAKE--IT-HOMEPAGE-V2-api',
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        scriptCharset: 'utf-8',
        data: JSON.stringify(data),
        timeout: 5000,
      })
        .done(function (result) {
          console.log(result)
          alert("正常に送信されました。")
        }).fail(function (jqXHR, textStatus, errorThrown) {
          console.log(jqXHR.responseJSON);
          alert("送信中に異常が発生しました。")
        });
    }
    $('#submit').prop("disabled", false);
  });

  // ②変換関数：json to 欲しい形
  var parseJson = function (data) {
    var returnJson = {};
    for (idx = 0; idx < data.length; idx++) {
      returnJson[data[idx].name] = data[idx].value
      console.log(data[idx].value)
      if (data[idx].value === "") {
        return false
      }
    }
    console.log(returnJson)
    return returnJson;
  }
}