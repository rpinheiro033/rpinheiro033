function drop_menu() {
  document.getElementById("personal_area_dropdown").classList.toggle("show");
}

function change_team_view() {
  var e = document.getElementById("team_selector");
  var strUser = e.options[e.selectedIndex].value;
  console.log(strUser);
}

function alert_change() {
  window.alert("Alteração feita! Jogadores Adicionados!");
}

function appointmnt_done() {
	window.alert("Marcação feita! Pode prosseguir para a página inicial...");	
}