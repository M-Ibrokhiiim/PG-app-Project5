// Simbols
const passwordLength=12

const alphabetsL="qwerrtyuiopasdfghjklzxcvbnm"
const alphabetsU="QWERTYUIOPASDFGHJKLZXCVBNM"
const numbers="1234567890"
const simbols="-=[]{}',.<>?/\|"
const all=alphabetsL+alphabetsU+numbers+simbols

let password=""

const inputField=document.getElementById('random-password-id')

function generateRandomPassword(){
    password+=alphabetsL[Math.floor(Math.random()*alphabetsL.length)]
    password+=alphabetsU[Math.floor(Math.random()*alphabetsU.length)]
    password+=numbers[Math.floor(Math.random()*numbers.length)]
    password+=simbols[Math.floor(Math.random()*simbols.length)]
    
    
    while(passwordLength>password.length){
        password+=all[Math.floor(Math.random()*all.length)]
    }
    inputField.value=password    
    password=''
}

console.log(password);