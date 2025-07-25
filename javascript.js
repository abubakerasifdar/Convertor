     document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = "";
               
            }
        })
        function myFunction() {
            let Convertor = document.getElementById("Convertor").value;
            let input = document.getElementById("input").value;
            let converts;
            let output;
            switch (Convertor) {
                case "ASCII_to_Charactors": {
                console.log(Convertor);
                    converts =  String.fromCharCode(input)
                    output = `You have Entered ${input} which is ASCII and Conversion to Charactor is ${converts}`
                    break;
                }
                case "Charactors_to_ASCII": {
                         console.log(Convertor);
                    converts = input.charCodeAt()
                     output = `You have Entered ${input} which is Charactor and Conversion to ASCII is ${converts}`
                     break;
                }
            }
            document.getElementById("output").style.display = "flex";
            document.getElementById('output').innerHTML = output;

        }
