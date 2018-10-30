const input_cpf = document.getElementById("cpf")
let mask_cpf = "___.___.___-__"
input_cpf.addEventListener("focus", function() {
    this.value = mask_cpf
    const that = this
    setTimeout(function() {
        that.setSelectionRange(0, 0)
    }, 10)
})

input_cpf.addEventListener("blur", function() {
    this.value = ""
})

input_cpf.addEventListener("keypress", function(event) {
    event.preventDefault()
    if("0123456789".indexOf(event.key) !== -1 && this.value.indexOf("_") !== -1) {
        this.value = this.value.replace(/_/, event.key)
        const next_index = this.value.indexOf("_")
        this.setSelectionRange(next_index, next_index)
    }

    if(event.keyCode == 8) {
        this.value = this.value.replace("0123456789".lastIndexOf(event.key), /_/)
    }
})

// input_cpf.addEventListener("keypress", function(event) {
//     event.preventDefault();
//     this.value = mask_cpf
//     for (let i = 0; i < 11; i++) {
//         mask_cpf = mask_cpf.slice(1)
//         input_cpf.value = (event.key + mask_cpf)
//         input_cpf.setSelectionRange(i, i)
//         i++
//     }
// })