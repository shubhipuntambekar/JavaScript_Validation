(function (){
    var myinput = document.getElementById("password");
    var lowercase = document.getElementById("lowercase");
    var uppercase = document.getElementById("uppercase");
    var number = document.getElementById("number");
    var lengths = document.getElementById("length");
    var validationDiv = document.getElementById("validation-div");
    var generic;

    var validators = {
        lowercaseLetters : /[a-z]/g,
        uppercaseLetters : /[A-Z]/g,
        numbers : /[0-9]/g,
        length : 8
    }

    class Generic{
        addClass(el,className){
            el.classList.add(className);
        }
        removeClass(el,className){
            el.classList.remove(className);
        }
        addEvent(el,event,callback){
            el.addEventListener(event,callback);
        }
    }
    function eventListeners() {
        generic.addEvent(myinput,'keyup',keyupC);
        generic.addEvent(myinput,'focus',focusC);
        generic.addEvent(myinput,'blur',blurC);
    }

    var focusC = function () {
        validationDiv.style.display = "block";
    }
    var blurC = function () {
        validationDiv.style.display = "none";
    }
    var keyupC = function () {
        var validate = new Validate();
        validate.check();
    }

    class Validate{
        check(){
            if(myinput.value.match(validators.lowercaseLetters)){
                generic.removeClass(lowercase,"invalid");
                generic.addClass(lowercase,"valid");
            }else{
                generic.removeClass(lowercase,"valid");
                generic.addClass(lowercase,"invalid");
            }

            if(myinput.value.match(validators.uppercaseLetters)){
                generic.removeClass(uppercase,"invalid");
                generic.addClass(uppercase,"valid");
            }else{
                generic.removeClass(uppercase,"valid");
                generic.addClass(uppercase,"invalid");
            }

            if(myinput.value.match(validators.numbers)){
                generic.removeClass(number,"invalid");
                generic.addClass(number,"valid");
            }else{
                generic.removeClass(number,"valid");
                generic.addClass(number,"invalid");
            }

            if(myinput.value.length >= validators.length){
                console.log("inside");
                generic.removeClass(lengths,"invalid");
                generic.addClass(lengths,"valid");
            }else{
                generic.removeClass(lengths,"valid");
                generic.addClass(lengths,"invalid");
            }
        }
    }

    function init() {
        generic = new Generic();
        eventListeners();
    }

    init();
})();