window.addEventListener('load', ()=>{
    function getTagValue(tag){
        return document.querySelector(tag).value;
    }

    function encryptMsg(msg, key){
        const encryptedMsg = CryptoJS.AES.encrypt(msg, key).toString();
        return encryptedMsg;
    }

    function decryptMsg(msg, key){
        const decryptedKeyBts = CryptoJS.AES.decrypt(msg, key);
        const decryptedMsg = decryptedKeyBts.toString(CryptoJS.enc.Utf8);
        return decryptedMsg;
    }

    // Clean the output screen
    const inputMsg = document.querySelector('#input-text');
    inputMsg.addEventListener('change', ()=>{
        if(inputMsg.value == ''){
            document.querySelector('.output-div').classList.remove('hidden');
            document.querySelector('#output-label').innerHTML = '';
        }
    })

    // Encrypted button
    const buttonEncrypt = document.querySelector('#encriptar');
    buttonEncrypt.addEventListener('click', () =>{
        const msg = encryptMsg(getTagValue('#input-text').toUpperCase(), 'casa nueva');

        // Hidde the ouput image ('non message was found...)
        document.querySelector('.output-div').classList.add('hidden');
        // Print the encrypted msg
        document.querySelector('#output-label').innerHTML = msg;
    })

    // Decrypted button
    const buttonDecrypted = document.querySelector('#desencriptar');
    buttonDecrypted.addEventListener('click', () =>{
        const decMsg = decryptMsg(document.querySelector('#output-label').innerText, 'casa nueva');

        // Print the encrypted msg
        document.querySelector('#output-label').innerHTML = decMsg;
    })

    // Copy button
    const buttonCopy = document.querySelector('#copiar')
    buttonCopy.addEventListener(('click'), () =>{
        const cb = navigator.clipboard;
        const copyMsg = document.querySelector('#output-label');
        cb.writeText(copyMsg.innerText).then( alert('Se ha copiado el texto!') );
    })
})