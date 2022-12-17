const cardObjectDefinitions = [
    { id: 1, imagePath: "/images/card-KingHearts.png" },
    { id: 2, imagePath: "/images/card-JackClubs.png" },
    { id: 3, imagePath: "/images/card-QueenDiamonds.png" },
    { id: 4, imagePath: "/images/card-AceSpades.png" },
]

const cardBackImgPath = '/images/card-back-Blue.png'

function createCard(cardItem)
{
    // These are teh div elements that make up the card
    const cardElem = createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardBackElem = createElement('div')

    // Create the front and back elements for the card
    const cardFrontImg = createElement('img')
    const cardBackImg = createElement('img')

    // Add classes and ids to card elememts
    addClassToElement(cardElem, "card")
    addIdToElement(cardElem, cardItem.id)

    // Add a class to the inner card element
    addClassToElement(cardInnerElem, 'card-inner')

    // Add class to front card element
    addClassToElement(cardFrontElem, 'card-front')

    // Add class to back card element
    addClassToElement(cardBackElem, 'card-back')

    // Add src attribute and appropriate value to the img element - Back of card
    addSrcToImageElem(cardBackElem, cardBackImgPath)

    // Add src attribute and appropriate value to the img element - Front of card
    addSrcToImageElem(cardFrontElem, cardItem.imagePath)

    // Assign a class to the back image element of the back of the card
    addClassToElement(cardBackElem, 'card-img')

    // Assign a class to the front image element of the back of the card
    addClassToElement(cardFrontElem, 'card-img')
}

function createElement(elemType)
{
    return document.createElement(elemType)
}

function addClassToElement(elem, className)
{
    elem.classList.add(className)
}

function addIdToElement(elem, id)
{
    elem.id = id
}

function addSrcToImageElem(imgELem, src)
{
    imgELem.src = src
}