//The shape that the print method will return should resemble a diamond. A number provided as input will represent the number of asterisks printed on the middle line. The line above and below will be centered and will have two less asterisks than the middle line. This reduction will continue for each line until a line with a single asterisk is printed at the top and bottom of the figure.
//Return null if input is an even number or a negative number.
//Note: JS and Python students must implement diamond() method and return None (Py) or null(JS) for invalid input.


function diamond(number) {
    const blank = "a"
    const full = "*";
    let output = "";

    if (number %2 == 0 || number < 1) return null;

    for (let i= 1; i<number; i += 2) {
        spacing = blank.repeat((number-i)/2);
        console.log(spacing);
        output += spacing + full.repeat(i) + spacing + "\n"
        }

    output += full.repeat(number) + output.split("").reverse().join("")

    console.log(output)
    }
    
    diamond(11);
