const inches: any = document.getElementById("inches") as HTMLInputElement
const centim: any = document.getElementById("centimeter") as HTMLInputElement

inches.addEventListener("input", function(){
        let inchesV: number = parseFloat(inches.value)
        let result: number = inchesV * 2.54
        centim.value = result
        if (inchesV <= 0){
                centim.value = 0
        }
})
centim.addEventListener("input", function(){
        let centimV: number = parseFloat(centim.value)
        let result: number = centimV * 0.393701
        inches.value = result.toFixed(6)
        if (centimV <= 0){
                inches.value = 0
        }
})
