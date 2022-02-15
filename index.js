//Dependencies
const Dcipher = require("dcipher")
const Chalk = require("chalk")

//Variables
const Self_Args = process.argv.slice(2)

//Main
if(!Self_Args.length){
    console.log(Chalk.blueBright(`node index.js <MD5/SHA1/SHA224/SHA256/SHA384/SHA512/RIPEMD320>
Example: node index.js f4020e91252aafd4b18d8acd17f883db`))
    process.exit()
}

void function Main(){
    Dcipher(Self_Args[0]).then(result =>{
        if(result.indexOf("not") !== -1){
            console.log(Chalk.redBright("Hash type not supported."))
            process.exit()
        }

        console.log(Chalk.greenBright(`Decrypted ${Self_Args[0]} result is ${result}`))
    })
}()
