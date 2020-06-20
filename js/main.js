var app = new Vue({
  el: "#app",
  data: {
    temp: "",

    plus: "",
    minus: "",
    times: "",
    obelus: "",
    root: false,

    result: "",
  },
  methods: {
    on: function () {
      this.temp += 1;
      document.getElementById("type").innerText += "1";

      if (this.plus != 0) {
        this.result = Number(this.plus) + Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.minus != 0) {
        this.result = Number(this.minus) - Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.times != 0) {
        this.result = Number(this.times) * Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.obelus != 0) {
        this.result = Number(this.obelus) / Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      }
    },
    two: function () {
      this.temp += 2;
      document.getElementById("type").innerText += "2";

      if (this.plus != 0) {
        this.result = Number(this.plus) + Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.minus != 0) {
        this.result = Number(this.minus) - Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.times != 0) {
        this.result = Number(this.times) * Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.obelus != 0) {
        this.result = Number(this.obelus) / Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      }
    },
    three: function () {
      this.temp += 3;
      document.getElementById("type").innerText += "3";

      if (this.plus != 0) {
        this.result = Number(this.plus) + Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.minus != 0) {
        this.result = Number(this.minus) - Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.times != 0) {
        this.result = Number(this.times) * Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.obelus != 0) {
        this.result = Number(this.obelus) / Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      }
    },
    four: function () {
      this.temp += 4;
      document.getElementById("type").innerText += "4";

      if (this.plus != 0) {
        this.result = Number(this.plus) + Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.minus != 0) {
        this.result = Number(this.minus) - Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.times != 0) {
        this.result = Number(this.times) * Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.obelus != 0) {
        this.result = Number(this.obelus) / Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      }
    },
    five: function () {
      this.temp += 5;
      document.getElementById("type").innerText += "5";

      if (this.plus != 0) {
        this.result = Number(this.plus) + Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.minus != 0) {
        this.result = Number(this.minus) - Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.times != 0) {
        this.result = Number(this.times) * Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.obelus != 0) {
        this.result = Number(this.obelus) / Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      }
    },
    six: function () {
      this.temp += 6;
      document.getElementById("type").innerText += "6";

      if (this.plus != 0) {
        this.result = Number(this.plus) + Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.minus != 0) {
        this.result = Number(this.minus) - Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.times != 0) {
        this.result = Number(this.times) * Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.obelus != 0) {
        this.result = Number(this.obelus) / Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      }
    },
    seven: function () {
      this.temp += 7;
      document.getElementById("type").innerText += "7";

      if (this.plus != 0) {
        this.result = Number(this.plus) + Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.minus != 0) {
        this.result = Number(this.minus) - Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.times != 0) {
        this.result = Number(this.times) * Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.obelus != 0) {
        this.result = Number(this.obelus) / Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      }
    },
    eight: function () {
      this.temp += 8;
      document.getElementById("type").innerText += "8";

      if (this.plus != 0) {
        this.result = Number(this.plus) + Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.minus != 0) {
        this.result = Number(this.minus) - Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.times != 0) {
        this.result = Number(this.times) * Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.obelus != 0) {
        this.result = Number(this.obelus) / Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      }
    },
    nine: function () {
      this.temp += 9;
      document.getElementById("type").innerText += "9";

      if (this.plus != 0) {
        this.result = Number(this.plus) + Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.minus != 0) {
        this.result = Number(this.minus) - Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.times != 0) {
        this.result = Number(this.times) * Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.obelus != 0) {
        this.result = Number(this.obelus) / Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      }
    },
    zero: function () {
      this.temp += 0;
      document.getElementById("type").innerText += "0";

      if (this.plus != 0) {
        this.result = Number(this.plus) + Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.minus != 0) {
        this.result = Number(this.minus) - Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.times != 0) {
        this.result = Number(this.times) * Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.obelus != 0) {
        this.result = Number(this.obelus) / Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      }
    },
    tzero: function () {
      this.temp += "000";
      document.getElementById("type").innerText += "000";

      if (this.plus != 0) {
        this.result = Number(this.plus) + Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.minus != 0) {
        this.result = Number(this.minus) - Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.times != 0) {
        this.result = Number(this.times) * Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      } else if (this.obelus != 0) {
        this.result = Number(this.obelus) / Number(this.temp);
        document.getElementById("ans").innerText = this.result;
      }
    },
    dot: function () {
      this.temp += ".";
      document.getElementById("type").innerText += ".";
    },

    plus_a: function () {
      // if(document.getElementById('type').style.display == 'none'){

      // 	document.getElementById('type').style.display = 'block';
      // document.getElementById('ans').style.cssText = 'height:30%;text-align:right;';
      // document.getElementById('type').innerText=this.result;
      // this.result='';
      // }else{

      document.getElementById("type").innerText += "+";
      this.all_data += "+";

      if (this.plus != 0) {
        this.plus = Number(this.plus) + Number(this.temp);
        this.temp = "";
      }

      if (
        this.plus == 0 &&
        this.minus == 0 &&
        this.obelus == 0 &&
        this.times == 0
      ) {
        this.plus = Number(this.temp);
        this.temp = "";
      } else {
        if (this.times != 0) {
          this.plus = Number(this.times) * Number(this.temp);
          this.temp = "";
          this.times = "";
        } else if (this.minus != 0) {
          this.plus = Number(this.minus) - Number(this.temp);
          this.temp = "";
          this.minus = "";
        } else if (this.obelus != 0) {
          this.plus = Number(this.obelus) / Number(this.temp);
          this.temp = "";
          this.obelus = "";
        }
      }
    },
    minus_a: function () {
      document.getElementById("type").innerText += "-";
      this.all_data += "-";

      if (this.minus != 0) {
        this.minus = Number(this.minus) - Number(this.temp);
        this.temp = "";
      }

      if (
        this.plus == 0 &&
        this.minus == 0 &&
        this.obelus == 0 &&
        this.times == 0
      ) {
        this.minus = Number(this.temp);
        this.temp = "";
      } else {
        if (this.times != 0) {
          this.minus = Number(this.times) * Number(this.temp);
          this.temp = "";
          this.times = "";
        } else if (this.plus != 0) {
          this.minus = Number(this.plus) + Number(this.temp);
          this.temp = "";
          this.plus = "";
        } else if (this.obelus != 0) {
          this.minus = Number(this.obelus) / Number(this.temp);
          this.temp = "";
          this.obelus = "";
        }
      }
    },
    times_a: function () {
      document.getElementById("type").innerText += "x";
      this.all_data += "*";

      if (this.times != 0) {
        this.times = Number(this.times) * Number(this.temp);
        this.temp = "";
      }

      if (
        this.plus == 0 &&
        this.minus == 0 &&
        this.obelus == 0 &&
        this.times == 0
      ) {
        this.times = Number(this.temp);
        this.temp = "";
      } else {
        if (this.minus != 0) {
          this.times = Number(this.minus) - Number(this.temp);
          this.temp = "";
          this.minus = "";
        } else if (this.plus != 0) {
          this.times = Number(this.plus) + Number(this.temp);
          this.temp = "";
          this.plus = "";
        } else if (this.obelus != 0) {
          this.times = Number(this.obelus) / Number(this.temp);
          this.temp = "";
          this.obelus = "";
        }
      }
    },
    obelus_a: function () {
      document.getElementById("type").innerHTML += "&divide;";
      this.all_data += "/";

      if (this.obelus != 0) {
        this.obelus = Number(this.obelus) / Number(this.temp);
        this.temp = "";
      }

      if (
        this.plus == 0 &&
        this.minus == 0 &&
        this.obelus == 0 &&
        this.times == 0
      ) {
        this.obelus = Number(this.temp);
        this.temp = "";
      } else {
        if (this.minus != 0) {
          this.obelus = Number(this.minus) - Number(this.temp);
          this.temp = "";
          this.minus = "";
        } else if (this.plus != 0) {
          this.obelus = Number(this.plus) + Number(this.temp);
          this.temp = "";
          this.plus = "";
        } else if (this.times != 0) {
          this.obelus = Number(this.times) * Number(this.temp);
          this.temp = "";
          this.times = "";
        }
      }
    },
    rot: function () {
      document.getElementById("type").innerHTML = "&#8730;";
      this.root = true;
    },
    equal_a: function () {
      if (this.root == true) {
        this.result = Math.sqrt(this.temp);
        document.getElementById("ans").innerText = this.result;
        this.temp = "";
        this.root = false;
      }
      this.temp = "";
      document.getElementById("type").style.display = "none";
      document.getElementById("ans").style.cssText =
        "height:100%;text-align:center;font-size:200%;";
    },

    clear: function () {
      //  Fix Style
      document.getElementById("type").style.display = "block";
      document.getElementById("ans").style.cssText =
        "height:30%;text-align:right;";

      //Claer All Data
      document.getElementById("type").innerText = "";
      document.getElementById("ans").innerText = "";

      this.temp = "";
      this.minus = "";
      this.times = "";
      this.plus = "";
      this.obelus = "";
      this.result = "";
    },
    back: function () {
      var type = document.getElementById("type").innerText;

      var length = type.length - 1;

      if (
        type[type.length - 1] == "+" ||
        type[type.length - 1] == "x" ||
        type[type.length - 1] == "÷" ||
        type[type.length - 1] == "-"
      ) {
      } else {
        if (this.temp != 0) {
          var value = this.temp.toString();
          var edit = value.slice(0, value.length - 1);
          this.temp = edit;
        } else {
          if (this.plus != 0) {
            var value = this.plus.toString();
            var edit = value.slice(0, value.length - 1);
            this.plus = Number(edit) + Number(this.temp);
          } else if (this.minus != 0) {
            var value = this.minus.toString();
            var edit = value.slice(0, value.length - 1);
            this.minus = Number(edit) + Number(this.temp);
          } else if (this.times != 0) {
            var value = this.times.toString();
            var edit = value.slice(0, value.length - 1);
            this.times = Number(edit) + Number(this.temp);
          } else if (this.obelus != 0) {
            var value = this.obelus.toString();
            var edit = value.slice(0, value.length - 1);
            this.obelus = Number(edit) + Number(this.temp);
          }
        }
      }

      var edit = type.slice(0, length);
      document.getElementById("type").innerHTML = edit;
      document.getElementById("ans").innerText = "";
    },
  },
});
