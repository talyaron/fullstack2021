function handleIdCard(e: any) {
    e.preventDefault();

    const object = {}
    for (let field of e.target) {
        if (field.type !== 'submit') {
            if (field.type === 'number') {
                object[field.name] = field.valueAsNumber;
            }
            else {
                object[field.name] = field.value;
            }
        }
    }
    createCard(object);
}


function createCard(cardObject: any) {

    const cardText =

    `<div id="printCard">

    <div class="firstRow"></div>

    <div class="secondRow">
        <div></div>
        <div id="display_image"></div>
        <div class="thirdColumn">
            <div></div>
            <div class="cardName">
                <h2>${cardObject.firstName} ${cardObject.lastName}</h2>
                <h3>Creative Manager</h3>
            </div>
        </div>
    </div>

    <div class="thirdRow">
        <div></div>

        <div class="info">
            <h3><b>ID No</b></h3>
            <h3><b>${cardObject.idNumber}</b></h3>
            <div class="infoBottom">
                <h3><b>D.O.B</b></h3>
                ${cardObject.month}/${cardObject.day}/${cardObject.year}
            </div>
        </div>

        <div class="info">
            <h3><b>Gender</b></h3>
            <h3>${cardObject.gender}</h3>
            <div class="infoBottom">
                <h3><b>Expire Date</b></h3>
                ${cardObject.month}/${cardObject.day}/${cardObject.year + 1}
            </div>
        </div>

        <div class="barcode">
            <h3 style="color: #9c9c9c;">Your Signature</h3>
            <h3><b>Yours Sincerely</b></h3>
            <img src="barcode.png" alt="">
        </div>

        <div></div>

    </div>`

    document.getElementById('printCardPreview').innerHTML = cardText;

}


const image_input: any = document.querySelector("#image_input");

var uploaded_image: any = "";
image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
})