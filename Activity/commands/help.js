function fun(props){
    console.log(`List of all Commands
                    1. node main.js tree ${props}
                    2. node main.js organise ${props}
                    3. node main.js help`);
}

module.exports = {
    fn : fun
}