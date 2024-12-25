function ajaxRequest(url, callback) {
  var xhr = new XMLHttpRequest(); // 구형 브라우저 호환 가능
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
          if (xhr.status === 200) {
              callback(null, xhr.responseText); // 성공 시 데이터 반환
          } else {
              callback(new Error('Request failed with status ' + xhr.status));
          }
      }
  };
  xhr.send();
}

// 사용 예시
ajaxRequest('https://jsonplaceholder.typicode.com/posts', function (error, data) {
  if (error) {
      console.error('Error:', error);
  } else {
      console.log('Data:', data);
  }
});

ajaxRequest('https://j', function (error, data) {
  if (error) {
      console.error('Error:', error);
  } else {
      console.log('Data:', data);
  }
});
