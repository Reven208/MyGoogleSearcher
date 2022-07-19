  function Enter(event) {
        if (event.keyCode == 13) {
            Search();
    console.log("Hello");
        }
    }
    
    
    function Search() {
        var URL = document.getElementById("SCH").value.toString();
        if (URL == "") {
            alert("Introduce Algo!")
            return
    }
    
    if (URL.toString().startsWith("https://") || URL.toString().startsWith("http://")) {
        window.open(URL);
    } 
      else {
        window.open("https://www.google.com/search?q=" + URL)
    }
      
    }
