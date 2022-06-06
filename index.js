document.getElementById("cs-form").addEventListener("submit",e => {
    e.preventDefault()
    const baseColor = document.getElementById("color-picker").value.substring(1)
    const schemeMode = document.getElementById("scheme-mode").value
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=${schemeMode}`)
        .then(res=>res.json())
        .then(data =>{
            const colorsHexArray = data.colors.map(x=>x.hex.value)
            const resultsColHtml = colorsHexArray.map(hex=>`
                <div class="color-result" style="background-color: ${hex}">
                </div>`).join('')
            const resultsHexHtml = colorsHexArray.map(hex=>`
                <div class="color-hex">
                    <p onclick="copyToClipboard('${hex}')">${hex}</p>
                </div>`).join('')
            document.getElementById("results-col").innerHTML=resultsColHtml
            document.getElementById("results-hex").innerHTML=resultsHexHtml
        })
})
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
    alert(`Copied to clipboard: ${text}`)
}