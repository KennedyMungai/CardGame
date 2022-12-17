const cardObjectDefinitions = [
    { id: 1, imagePath: "/images/card-KingHearts.png" },
    { id: 2, imagePath: "/images/card-JackClubs.png" },
    { id: 3, imagePath: "/images/card-QueenDiamonds.png" },
    { id: 4, imagePath: "/images/card-AceSpades.png" },
]

const cardBackImgPath = '/images/card-back-Blue.png'

const cardContainerElem = document.querySelector('.card-container')

createCards()

function createCards()
{
    cardObjectDefinitions.forEach((cardItem) =>
    {
        createCard(cardItem)
    })
}

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
    addSrcToImageElem(cardBackImg, cardBackImgPath)

    // Add src attribute and appropriate value to the img element - Front of card
    addSrcToImageElem(cardFrontImg, cardItem.imagePath)

    // Assign a class to the back image element of the back of the card
    addClassToElement(cardBackElem, 'card-img')

    // Assign a class to the front image element of the back of the card
    addClassToElement(cardFrontElem, 'card-img')

    // Add front image element as a child element to the back of the card element
    addChildElement(cardFrontElem, cardFrontImg)

    // Add back image element as a child element to the back of the card element
    addChildElement(cardBackElem, cardBackImg)

    // Add front card element as a child element to inner card element
    addChildElement(cardInnerElem, cardFrontElem)

    // Add back card element as a child element to inner card element
    addChildElement(cardInnerElem, cardBackElem)

    // Added the inner element as a child of the card element
    addChildElement(cardElem, cardInnerElem)

    // Add the card element as the child element to the appropriate grid cell
    addCardToGridCell(cardElem)
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

function addChildElement(parentElem, childElem)
{
    parentElem.appendChild(childElem)
}

function addCardToGridCell(card)
{
    const cardPositionClassName = mapCardToGridCell(card)

    const cardPosElem = document.querySelector(cardPositionClassName)

    addChildElement(cardPosElem, card)
}

function mapCardToGridCell(card)
{
    if (card.id == 1)
    {
        return '.card-pos-a'
    }
    else if (card.id == 2)
    {
        return '.card-pos-b'
    }
    else if (card.id == 3)
    {
        return '.card-pos-c'
    }
    else (card.id == 4)
    {
        return '.card-pos-d'
    }
}