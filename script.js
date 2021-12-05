const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const IncludeUppercaseElement = document.getElementById('IncludeUppercase')
const IncludeNumbersElement = document.getElementById('IncludeNumbers')
const IncludeSymbolsElement = document.getElementById('IncludeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')


const UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowtoHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowtoHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowtoHigh(33, 47).concat(
  arrayFromLowtoHigh(58, 64)
).concat(
  arrayFromLowtoHigh(91, 96)
).concat(
  arrayFromLowtoHigh(123, 126)
)


characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit' , e => {
   e.preventDefault()
   const characterAmount = characterAmountNumber.value
   const IncludeUppercase = IncludeUppercaseElement.checked
   const IncludeNumbers = IncludecNumbersElement.checked
   const IncludeSymbols = IncludeSymbolsElement.checked
   const password = generatePassword(characterAmount, IncludeUppercase, IncludeNumbers, IncludeSymbols)
   passwordDisplay.innerText = password
})




function generatePassword(characterAmount, IncludeUppercase, IncludeNumbers, IncludeSymbols){
     let charcodes = LOWERCASE_CHAR_CODES
     if (IncludeUppercase) charcodes = charCodes.concat (UPPERCASE_CHAR_CODES)
     if (IncludeNUmbers) charcodes = charCodes.concat (NUMBER_CHAR_CODES)
     if (IncludeSymbols) charcodes = charCodes.concat (SYMBOL_CHAR_CODES)
     
     const passwordCharacters = {}
     for (let i = 0; i < characterAmount; i++) {
       const characterCode = charCodes[Math.floor(Math.random()* charsCodes.length)]
      passwordCharacters.push(String.fromCharCode(characterCode))
     }
     return passwordCharacters.join('')
}

function arrayFromLowtoHigh(low,high) {
  const array = []
  for (let i = low; i <= high; i++) {
     array.push(i)
  }
  return array
}



function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange .value = value
}
