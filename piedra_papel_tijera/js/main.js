function colorear(piedra, papel, tijera){
        pars = document.getElementsByTagName('img');
        for (i = 0; i < pars.length; i++) {
          pars[i].body.innerHTML = "piedra";
          pars[i].style.backgroundColor = backgroundColor;
        }


        var prob = Math.random();
        if(prob > 0.5){
          document.body.style = "background-color: blue";
        }
        else{console.log('red');
        document.body.style = "background-color: red";

      }
