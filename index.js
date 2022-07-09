var i = 0;
      var speed = 150;
      var txt = "ProgPhile";
      console.log(txt);
      var x = txt.length;
      function typeWriter() {
        if (i < x) {
          // console.log("i : " + i + "txt.length : " + txt.length);
          document.getElementsByClassName("ideal")[0].innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }
      typeWriter();