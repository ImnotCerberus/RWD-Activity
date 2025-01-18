const firstName = "foo"
const lastName = "bar"

for (let i = 0; i <= 20; i++) {

    if (i >= 3 && i <= 5){
    console.log('foo');
    }

    else if (i >= 6 && i <= 10){
    console.log('bar');
    }

    else {
        console.log(i)
    }
}

//converting this into ternary operator

for (let i = 0; i <= 20; i++) {
    let output = (i >= 3 && i <=5 ) ? "foo" : (i >= 6 && i <= 10) ? "bar" : i;
    console.log(output);
}

