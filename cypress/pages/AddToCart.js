class AddToCart {
    mAddToCart(){
        cy.get('.home-main > .content > .action').click()
        cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get('#option-label-size-143-item-171').click()
        cy.get('#option-label-color-93-item-49').click()
        cy.get('#product-addtocart-button').click()

    }
    mAddCartAssert(){
        cy.get('.base').should("have.text", "Shopping Cart")
    }
    mViewCart(){
        cy.get('.showcart').click()
        //cy.get(':nth-child(7) > .secondary > .action > span').click()
        //cy.get('[data-bind="i18n: '/Item in Cart/'"]').should("have.text", "Item in Cart")
        cy.get('.base').should("have.text", "Shopping Cart")
    }
}

export default AddToCart