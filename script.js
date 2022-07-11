var path_order = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];

var order_A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
var start_A = order_A[0];
var flag_A = 0;
var numberOfCoinsCompleted_A = 0;

var order_B = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var start_B = order_B[0];
var flag_B = 0;
var numberOfCoinsCompleted_B = 0;


var randomNumber_A;
var randomDiceImage_A;

var randomNumber_B;
var randomDiceImage_B;

var player_A_Roll = $("turnA");
var player_B_Roll = $("turnB");

var chance = true;

var playerA = prompt("Enter Player A's Name!");
var playerB = prompt("Enter Player B's Name!");



function rollGuide(chance) {
  if (chance === true) {
    $(".turnA").html("PLAYER A");
    $(".turnB").html("");
  } else if (chance === false) {
    $(".turnB").html("PLAYER B");
    $(".turnA").html("");
  }
}


rollGuide(chance);



function show_CoinsA() {
  var cells_having_coinA = $(".cell").has('.coinA');
  cells_having_coinA.each(function() {$(this).css("box-shadow", "10px 5px 5px red");});
}

function show_CoinsB() {
  var cells_having_coinB = $(".cell").has('.coinB');
  cells_having_coinB.each(function() {$(this).css("box-shadow", "10px 5px 5px blue");});
}


function remove_shadow() {
  document.querySelectorAll(".cell").forEach((cell, i) => {cell.style.boxShadow = "none";});
}




function click_to_move(num) {
  if ((flag_A === 2 && numberOfCoinsCompleted_A === 0) || (flag_B === 2 && numberOfCoinsCompleted_B === 0)) {
    var number = num;
    if ((flag_A - numberOfCoinsCompleted_A) === 2 && chance === true) {
      var flag_1 = true;
      var cells_of_A = $('.cell').has('.coinA');
      cells_of_A.each(function() {
        $(this).one("click", function() {
          if (flag_1 === true) {
            var startIdA = this.id;
            var startPosA = parseInt(startIdA.replace(/^\D+/g, ''));
            var coinsOnStartPosA = $("#" + startIdA + " div").length;
            var endPosA = startPosA + num;

            if (coinsOnStartPosA === 1) {
              $("#" + startIdA).empty();
              if (endPosA < path_order.length) {
                var targetEndPosA = "#_" + endPosA + ">div";
                if ($(targetEndPosA).length === 0) {
                  $("#_" + endPosA).append("<div class='coinA'></div>");
                }
                else if ($(targetEndPosA).length === 1) {
                  if ($("#_" + endPosA).has(".coinB").length) {
                    var music = new Audio('ohno.mp3');
                    music.play();
                    $("#_" + endPosA).empty();
                    $("#_" + endPosA).append("<div class='coinA'></div>");
                    if (flag_B === 1) {
                      if (numberOfCoinsCompleted_B === 0) {
                        $(".coin1B").show(); 
                        flag_B--;
                      }
                    }
                    if (flag_B === 2) {
                      $(".coin2B").show();
                      flag_B--;
                    }
                  }
                  else if ($("#_" + endPosA).has(".coinA").length) {
                    $("#_" + endPosA).append("<div class='coinA'></div>");
                  }
                }
                else if ($(targetEndPosA).length === 2) {
                  var music = new Audio('ohno.mp3');
                  music.play();
                  $("#_" + endPosA).empty();
                  $("#_" + endPosA).append("<div class='coinA'></div>");
                  $(".coin1B").show();
                  $(".coin2B").show();
                  flag_B -= 2;
                }
              }
              else {
                alert("Coin Completed Player A!");
                var coinComplete = new Audio('coincomplete.mp3');
                coinComplete.play();
                numberOfCoinsCompleted_A++;
              }
            }
            else if (coinsOnStartPosA === 2) {
              document.querySelectorAll("td>.coinA")[0].remove();
              if (endPosA < path_order.length) {
                var targetEndPosA = "#_" + endPosA + ">div";
                if ($(targetEndPosA).length === 0) {
                  $("#_" + endPosA).append("<div class='coinA'></div>");
                }
                else if ($(targetEndPosA).length === 1) {
                  if ($("#_" + endPosA).has(".coinB").length) {
                    var music = new Audio('ohno.mp3');
                    music.play();
                    $("#_" + endPosA).empty();
                    $("#_" + endPosA).append("<div class='coinA'></div>");
                    if (flag_B === 1) {
                      if (numberOfCoinsCompleted_B === 0) {
                        $(".coin1B").show();
                        flag_B--;
                      }
                    }
                    if (flag_B === 2) {
                      $(".coin2B").show();
                      flag_B--;
                    }
                  }
                  else if ($("#_" + endPosA).has(".coinA").length) {
                    $("#_" + endPosA).append("<div class='coinA'></div>");
                  }
                }
                else if ($(targetEndPosA).length === 2) {
                  var music = new Audio('ohno.mp3');
                  music.play();
                  $("#_" + endPosA).empty();
                  $("#_" + endPosA).append("<div class='coinA'></div>");
                  $(".coin1B").show();
                  $(".coin2B").show();
                  flag_B -= 2;
                }
              }
              else {
                alert("Coin Completed Player A!");
                var coinComplete = new Audio('coincomplete.mp3');
                coinComplete.play();
                numberOfCoinsCompleted_A++;
              }
            }
            chance = !chance;
            rollGuide(chance);
            remove_shadow();
            $("#buttonB").show();
            flag_1 = false;
          }
        });
      });
    }

    if ((flag_B - numberOfCoinsCompleted_B) === 2 && chance === false) {
      var flag_2 = true;
      var cells_of_B = $('.cell').has('.coinB');
      cells_of_B.each(function() {
        $(this).one("click", function() {
          if (flag_2 === true) {
            var startIdB = this.id;
            var startPosB = order_B.indexOf(parseInt(startIdB.replace(/^\D+/g, '')));
            var coinsOnStartPosB = $("#" + startIdB + " div").length;
            var endPosB = startPosB + num;
            if (coinsOnStartPosB === 1) {
              $("#" + startIdB).empty();
              if (endPosB < path_order.length - 1) {
                var targetEndPosB = "#_" + order_B[endPosB] + ">div";
                if ($(targetEndPosB).length === 0) {
                  $("#_" + order_B[endPosB]).append("<div class='coinB'></div>");
                }
                else if ($(targetEndPosB).length === 1) {
                  if ($("#_" + order_B[endPosB]).has(".coinA").length) {
                    var music = new Audio('ohno.mp3');
                    music.play();
                    $("#_" + order_B[endPosB]).empty();
                    $("#_" + order_B[endPosB]).append("<div class='coinB'></div>");
                    if (flag_A === 1) {
                      if (numberOfCoinsCompleted_A === 0) {
                        $(".coin1A").show();
                        flag_A--;
                      }
                    }
                    if (flag_A === 2) {
                      $(".coin2A").show();
                      flag_A--;
                    }
                  }
                  else if ($("#_" + order_B[endPosB]).has(".coinB").length) {
                    $("#_" + order_B[endPosB]).append("<div class='coinB'></div>");
                  }
                }
                else if ($(targetEndPosB).length === 2) {
                  var music = new Audio('ohno.mp3');
                  music.play();
                  $("#_" + order_B[endPosB]).empty();
                  $("#_" + order_B[endPosB]).append("<div class='coinB'></div>");
                  $(".coin1A").show();
                  $(".coin2A").show();
                  flag_A -= 2;
                }
              }
              else {
                alert("Coin Completed PlayerB!");
                var coinComplete = new Audio('coincomplete.mp3');
                coinComplete.play();
                numberOfCoinsCompleted_B++;
              }
            } 
            else if (coinsOnStartPosB === 2) {
              document.querySelectorAll("td>.coinB")[0].remove();
              if (endPosB < path_order.length - 1) {
                var targetEndPosB = "#_" + order_B[endPosB] + ">div";
                if ($(targetEndPosB).length === 0) {
                  $("#_" + order_B[endPosB]).append("<div class='coinB'></div>");
                }
                else if ($(targetEndPosB).length === 1) {
                  if ($("#_" + order_B[endPosB]).has(".coinA").length) { 
                    var music = new Audio('ohno.mp3');
                    music.play();
                    $("#_" + order_B[endPosB]).empty();
                    $("#_" + order_B[endPosB]).append("<div class='coinB'></div>");
                    if (flag_A === 1) {
                      if (numberOfCoinsCompleted_A === 0) {
                        $(".coin1A").show();
                        flag_A--;
                      }
                    }
                    if (flag_A === 2) {
                      $(".coin2A").show();
                      flag_A--;
                    }
                  }
                  else if ($("#_" + order_B[endPosB]).has(".coinB").length) {
                    $("#_" + order_B[endPosB]).append("<div class='coinB'></div>");
                  }
                }
                else if ($(targetEndPosB).length === 2) { 
                  var music = new Audio('ohno.mp3');
                  music.play();
                  $("#_" + order_B[endPosB]).empty(); 
                  $("#_" + order_B[endPosB]).append("<div class='coinB'></div>"); 
                  $(".coin1A").show(); 
                  $(".coin2A").show();
                  flag_A -= 2;
                }
              }
              else {
                alert("Coin Completed PlayerB!");
                var coinComplete = new Audio('coincomplete.mp3');
                coinComplete.play();
                numberOfCoinsCompleted_B++;
              }
            }
            chance = !chance;
            rollGuide(chance);
            remove_shadow();
            $("#buttonA").show();
            flag_2 = false;
          }
        });
      });
    }
  }
}



function auto_move(num) {
  if (chance === true) {
    if ((flag_A === 1 && numberOfCoinsCompleted_A === 0) || (flag_A === 2 && numberOfCoinsCompleted_A === 1)) {
      var coinAToBeMoved = $(".cell").has(".coinA");
      var idOfCoinAToBeMoved;
      coinAToBeMoved.each(function() {
        idOfCoinAToBeMoved = $(this).attr("id");
      });
      var startPositionA = parseInt(idOfCoinAToBeMoved.replace(/^\D+/g, ''));
      $("#" + idOfCoinAToBeMoved).empty();
      var nextPositionA = startPositionA + num;
      if (nextPositionA < path_order.length) {
        var targetStringNextA = "#_" + nextPositionA + ">div";
        if ($(targetStringNextA).length === 0) {
          $("#_" + nextPositionA).append("<div class='coinA'></div>");
        }
        else if ($(targetStringNextA).length === 1) {
          if ($("#_" + nextPositionA).has(".coinB").length) {
            var music = new Audio('ohno.mp3');
            music.play();
            $("#_" + nextPositionA).empty();
            $("#_" + nextPositionA).append("<div class='coinA'></div>");
            if (flag_B === 1) {
              if (numberOfCoinsCompleted_B === 0) {
                $(".coin1B").show();
                flag_B--;
              }
            }
            if (flag_B === 2) { 
              $(".coin2B").show();
              flag_B--;
            }
          }
        } else if ($(targetStringNextA).length === 2) {
          var music = new Audio('ohno.mp3');
          music.play();
          $("#_" + nextPositionA).empty();
          $("#_" + nextPositionA).append("<div class='coinA'></div>");
          $(".coin1B").show();
          $(".coin2B").show();
          flag_B -= 2;
        }
      }
      else {
        alert("Coin Completed Player A!");
        var coinComplete = new Audio('coincomplete.mp3');
        coinComplete.play();
        numberOfCoinsCompleted_A++;
      }
    }
  }


  if (chance === false) {
    if ((flag_B === 1 && numberOfCoinsCompleted_B === 0) || (flag_B === 2 && numberOfCoinsCompleted_B === 1)) {
      var coinBToBeMoved = $(".cell").has(".coinB");
      var idOfCoinBToBeMoved;
      coinBToBeMoved.each(function() {
        idOfCoinBToBeMoved = $(this).attr("id");
      });
      var startPositionB = order_B.indexOf(parseInt(idOfCoinBToBeMoved.replace(/^\D+/g, '')));
      $("#" + idOfCoinBToBeMoved).empty();
      var nextPositionB = startPositionB + num;
      if (nextPositionB < path_order.length - 1) {
        var targetStringNextB = "#_" + order_B[nextPositionB] + ">div";
        if ($(targetStringNextB).length === 0) {
          $("#_" + order_B[nextPositionB]).append("<div class='coinB'></div>");
        }
        else if ($(targetStringNextB).length === 1) {
          if ($("#_" + order_B[nextPositionB]).has(".coinA").length) {
            var music = new Audio('ohno.mp3');
            music.play();

            $("#_" + order_B[nextPositionB]).empty();
            $("#_" + order_B[nextPositionB]).append("<div class='coinB'></div>");
            if (flag_A === 1) {
              if (numberOfCoinsCompleted_A === 0) {
                $(".coin1A").show();
                flag_A--;
              }
            }
            if (flag_A === 2) {
              $(".coin2A").show();
              flag_A--;
            }
          }
        }
        else if ($(targetStringNextB).length === 2) {
          var music = new Audio('ohno.mp3');
          music.play();
          $("#_" + order_B[nextPositionB]).empty();
          $("#_" + order_B[nextPositionB]).append("<div class='coinB'></div>"); 
          $(".coin1A").show();
          $(".coin2A").show();
          flag_A -= 2;
        }
      }
      else {
        alert("Coin Completed Player B!");
        var coinComplete = new Audio('coincomplete.mp3');
        coinComplete.play();
        numberOfCoinsCompleted_B++;
      }
    }
  }
}



function diceRollA() {
  if (chance === true) {
    if (numberOfCoinsCompleted_B < 2) {
      randomNumber_A = Math.floor(Math.random() * 6) + 1;
      randomDiceImage_A = "dice" + randomNumber_A + ".png";
      var imgA = $("#dicepPlayerA");
      $("#dicepPlayerA").fadeOut();
      $("#dicepPlayerA").fadeIn();
      imgA.attr("src", randomDiceImage_A);
      if (randomNumber_A !== 6) {
        var yellow = new Audio('yellow.mp3');
        yellow.play();
        if (flag_A === 0) {
          $("#buttonA").hide();
          chance = !chance;
          rollGuide(chance);
          $("#buttonB").show();
        }
        else if (flag_A === 1) {
          if (numberOfCoinsCompleted_A === 0) {
            auto_move(randomNumber_A);
            $("#buttonA").hide();
            chance = !chance;
            rollGuide(chance);
            $("#buttonB").show();
          }
          else if (numberOfCoinsCompleted_A === 1) {
            $("#buttonA").hide();
            chance = !chance;
            rollGuide(chance);
            $("#buttonB").show();
          }
        }
        else if (flag_A === 2) {
          if (numberOfCoinsCompleted_A === 0) {
            show_CoinsA();
            document.querySelectorAll(".coinA").forEach((coinA, i) => {
              coinA.style.cursor = "pointer";
            });
            $("#buttonA").hide();
            click_to_move(randomNumber_A);
          }
          else if (numberOfCoinsCompleted_A === 1) {
            auto_move(randomNumber_A);
            $("#buttonA").hide();
            chance = !chance;
            rollGuide(chance);
            $("#buttonB").show();
          }
        }
      }
      else if (randomNumber_A === 6) {
        var blue = new Audio('blue.mp3');
        blue.play();
        if (flag_A === 0) {
          $(".coin1A").hide();
          if ($("#_1>div").length === 0) {
            $("#_1").html("<div class='coinA'></div>");
          }
          else if ($('#_1>div').length !== 0) {
            if ($("#_1>div").length === 1) {
              if ($("#_1").has(".coinB").length) {
                var music = new Audio('ohno.mp3');
                music.play();
                $("#_1").empty();
                $("#_1").append("<div class='coinA'></div>");
                if (flag_B === 1) {
                  if (numberOfCoinsCompleted_B === 0) {
                    $(".coin1B").show();
                    flag_B--;
                  }
                }
                if (flag_B === 2) {
                  $(".coin2B").show();
                  flag_B--;
                }
              }
            }
            else if ($("#_1>div").length === 2) {
              var music = new Audio('ohno.mp3');
              music.play();
              $("#_1").empty();
              $("#_1").append("<div class='coinA'></div>");
              $(".coin1B").show();
              $(".coin2B").show();
              flag_B -= 2;
            }
          }
          flag_A++;
          chance = !chance;
          rollGuide(chance);
          $("#buttonB").show();
          $("#buttonA").hide();
          return;
        }
        else if (flag_A === 1) {
          if (numberOfCoinsCompleted_A === 0) {
            start: do {
              var choiceFor2ndTokenA = prompt("Yor one coin is active playerA! You got a 6! Enter 1--Release 2nd coin   0--Move current coin");
              if (choiceFor2ndTokenA === '1') {
                flag_A++;
                $(".lockerA>.coinA").hide();
                if ($("#_1>div").length === 0) {
                  $("#_1").html("<div class='coinA'></div>");
                }
                else if ($("#_1>div").length !== 0) {
                  if ($("#_1>div").length === 1) {
                    if ($("#_1").has(".coinB").length) {
                      var music = new Audio('ohno.mp3');
                      music.play();
                      $("#_1").empty();
                      $("#_1").append("<div class='coinA'></div>");
                      if (flag_B === 1) {
                        if (numberOfCoinsCompleted_B === 0) {
                          $(".coin1B").show();
                          flag_B--;
                        }
                      }
                      if (flag_B === 2) {
                        $(".coin2B").show();
                        flag_B--;
                      }
                    }
                    else if ($("#_1").has(".coinA").length) { 
                      $("#_1").append("<div class='coinA'></div>");
                    }
                  }
                }
                else if ($("#_1>div").length === 2) { 
                  var music = new Audio('ohno.mp3');
                  music.play();
                  $("#_1").empty(); 
                  $("#_1").append("<div class='coinA'></div>"); 
                  $(".coin1B").show(); 
                  $(".coin2B").show();
                  flag_B -= 2;
                }
                break start;
              }
              else if (choiceFor2ndTokenA === '0') {
                auto_move(randomNumber_A);
                break start;
              }
              else { 
                alert("Please enter either 0 or 1 only!👀");
                continue start; 
              }
            }
            while (1);
            chance = !chance;
            rollGuide(chance);
            $("#buttonB").show();
            $("#buttonA").hide();
            return;
          }
          else if (numberOfCoinsCompleted_A === 1) {
            $(".coin2A").hide();
            flag_A++;
            $("#_1").html("<div class='coinA'></div>");
            chance = !chance;
            rollGuide(chance);
            $("#buttonB").show();
            $("#buttonA").hide();
            return;
          }
        } else if (flag_A === 2) {
          if (numberOfCoinsCompleted_A === 0) {
            show_CoinsA();
            document.querySelectorAll(".coinA").forEach((coinA, i) => {
              coinA.style.cursor = "pointer";
            });
            $("#buttonA").hide();
            click_to_move(randomNumber_A);
            return;
          } else if (numberOfCoinsCompleted_A === 1) {
            auto_move(randomNumber_A);
            chance = !chance;
            rollGuide(chance);
            $("#buttonB").show();
            $("#buttonA").hide();
            return;
          }
        }
      }
    }
    else {
      alert("PlayerB won the game! Refresh the page to play again!");
      $('h1').html(playerB + " won the game!🥇");
      $('.turnA').html('');
      $('.turnB').html('');
      $('.roll').html("Game<br> Over!");
      var music = new Audio('applause.mp3');
      music.play();
    }
  }
}


function diceRollB() {
  if (chance === false) {
    if (numberOfCoinsCompleted_A < 2) { 
      randomNumber_B = Math.floor(Math.random() * 6) + 1; 
      randomDiceImage_B = "dice" + randomNumber_B + ".png"; 
      var imgB = $("#dicepPlayerB");
      $("#dicepPlayerB").fadeOut();
      $("#dicepPlayerB").fadeIn();
      imgB.attr("src", randomDiceImage_B);

      if (randomNumber_B !== 6) {
        var yellow = new Audio('yellow.mp3');
        yellow.play();
        if (flag_B === 0) {
          chance = !chance;
          rollGuide(chance);
          $("#buttonA").show();
          $("#buttonB").hide();
        }
        else if (flag_B === 1) {
          if (numberOfCoinsCompleted_B === 0) {
            auto_move(randomNumber_B);
            chance = !chance;
            rollGuide(chance);
            $("#buttonA").show();
            $("#buttonB").hide();
          }
          else if (numberOfCoinsCompleted_B === 1) {
            chance = !chance;
            rollGuide(chance);
            $("#buttonA").show();
            $("#buttonB").hide();
          }
        }
        else if (flag_B === 2) {
          if (numberOfCoinsCompleted_B === 0) {
            show_CoinsB();
            document.querySelectorAll(".coinB").forEach((coinB, i) => {
              coinB.style.cursor = "pointer";
            });
            $("#buttonB").hide();
            click_to_move(randomNumber_B);
          }
          else if (numberOfCoinsCompleted_B === 1) {
            auto_move(randomNumber_B);
            chance = !chance;
            rollGuide(chance);
            $("#buttonA").show();
            $("#buttonB").hide();
          }
        }
      } else if (randomNumber_B === 6) {
        var blue = new Audio('blue.mp3');
        blue.play();
        if (flag_B === 0) {
          $(".coin1B").hide();
          if ($("#_15>div").length === 0) {
            $("#_15").html("<div class='coinB'></div>"); 
          } else if ($('#_15>div').length !== 0) { 
            if ($("#_15>div").length === 1) { 
              if ($("#_15").has(".coinA").length) { 
                var music = new Audio('ohno.mp3');
                music.play();
                $("#_15").empty(); 
                
                $("#_15").append("<div class='coinB'></div>");
                if (flag_A === 1) {
                  if (numberOfCoinsCompleted_A === 0) { 
                    $(".coin1A").show(); 
                    flag_A--;
                  }
                }
                if (flag_A === 2) { 
                  $(".coin2A").show();
                  flag_A--;
                }
              }
            } else if ($("#_15>div").length === 2) { 
              var music = new Audio('ohno.mp3');
              music.play();
              $("#_15").empty(); 
              $("#_15").append("<div class='coinB'></div>"); 
              $(".coin1A").show(); 
              $(".coin2A").show();
              flag_A -= 2;
            }
          }
          flag_B++;
          chance = !chance;
          rollGuide(chance);
          $("#buttonA").show();
          $("#buttonB").hide();
          return;
        }
        else if (flag_B === 1) {
          if (numberOfCoinsCompleted_B === 0) {
            start: do {
              var choiceFor2ndTokenB = prompt("Yor one coin is active playerB! You got a 6! Enter 1--Release 2nd coin   0--Move current coin");
              if (choiceFor2ndTokenB === '1') {
                flag_B++; 
                $(".lockerB>.coinB").hide();
                if ($("#_15>div").length === 0) {
                  $("#_15").html("<div class='coinB'></div>"); 
                }
                else if ($("#_15>div").length !== 0) { 
                  if ($("#_15>div").length === 1) { 
                    if ($("#_15").has(".coinA").length) { 
                      var music = new Audio('ohno.mp3');
                      music.play();
                      $("#_15").empty(); 
                      $("#_15").append("<div class='coinB'></div>");
                      if (flag_B === 1) {
                        if (numberOfCoinsCompleted_A === 0) { 
                          $(".coin1A").show(); 
                          flag_A--;
                        }
                      }
                      if (flag_A === 2) {
                        $(".coin2A").show();
                        flag_A--;
                      }
                    }
                    else if ($("#_15").has(".coinB").length) {
                      $("#_15").append("<div class='coinB'></div>");
                    }
                  }
                }
                else if ($("#_15>div").length === 2) {
                  var music = new Audio('ohno.mp3');
                  music.play();
                  $("#_15").empty();
                  $("#_15").append("<div class='coinB'></div>");
                  $(".coin1A").show();
                  $(".coin2A").show();
                  flag_A -= 2;
                }
                break start;
              }
              else if (choiceFor2ndTokenB === '0') {
                auto_move(randomNumber_B);
                break start;
              }
              else {
                alert("Please enter either 0 or 1 only!👀");
                continue start;
              }
            }
            while (1);
            chance = !chance;
            rollGuide(chance);
            $("#buttonA").show();
            $("#buttonB").hide();
            return;
          }
          else if (numberOfCoinsCompleted_B === 1) {
            $(".coin2B").hide();
            flag_B++;
            $("#_15").html("<div class='coinB'></div>");
            chance = !chance;
            rollGuide(chance);
            $("#buttonA").show();
            $("#buttonB").hide();
            return;
          }
        }
        else if (flag_B === 2) {
          if (numberOfCoinsCompleted_B === 0) {
            show_CoinsB();
            document.querySelectorAll(".coinB").forEach((coinB, i) => {
              coinB.style.cursor = "pointer";
            });
            $("#buttonB").hide();
            click_to_move(randomNumber_B);
            return;
          }
          else if (numberOfCoinsCompleted_B === 1) {
            auto_move(randomNumber_B);
            chance = !chance;
            rollGuide(chance);
            $("#buttonA").show();
            $("#buttonB").hide();
            return;
          }
        }
      }
    }
    else {
      alert("PlayerA won the game! Refresh the page to play again!");
      $('h1').html("&#129351" + playerA + " won the game!");
      $('.turnA').html('');
      $('.turnB').html('');
      $('.roll').html("Game<br> Over!");
      var music = new Audio('applause.mp3');
      music.play();
    }
  }
}