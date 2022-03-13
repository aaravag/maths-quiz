function adduser(){
    player1name = document.getElementById("player1_name_input").value;
    player2name = document.getElementById("player2_name_input").value;
    localStorage.setItem("q turn" , player1name);
    localStorage.setItem("a turn" , player2name);
    localStorage.setItem("1" , player1name);
    localStorage.setItem("2" , player2name);
    window.location = "index2.html";
}

