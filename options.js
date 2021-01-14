function save_options() {
  var code = document.getElementById('code').value;
  var password = document.getElementById('password').value;
  chrome.storage.sync.set({
    code: code,
    password: password
  }, function() {
		//Do Something
		window.close();
  });
}

function restore_options() {
  chrome.storage.sync.get({
    code: '',
    password: ''
  }, function(items) {
    document.getElementById('code').value = items.code;
    document.getElementById('password').value = items.password;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
