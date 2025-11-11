
function abc() {

    //window
    //abc scope

    var x = 10;

    function xyz() {

        //window
        //abs scope
        //xyz scope
        var y = 5;
        

        function foo() {

            //window
            //abs scope
            //xyz scope
            //foo scope
            var z = 2;

            console.log(x + y + z,"from foo")


        }


        foo()

    }

    xyz()

}

abc()






//closure is a term in which the variable declared inside parent function are available to nested function(s) and can be used there

// like foo function has acess to x and y