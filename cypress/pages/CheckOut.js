
class CheckOut{
    checkOut(){

        // The id of the dropdown menue keeps changing with every refresh, So, checkout form fill remains incomplete.
        
        cy.get('.checkout-methods-items > :nth-child(1) > .action').click()
        cy.wait(2000)
        cy.get('.street').type("c ,w c, v,nv nv nd,v n,dvn vn dn,vndvnn,d")
        cy.get('[name="shippingAddress.city"]').type("LA")
        cy.get('#WPFS944').click().scrollIntoView('California').click()
        //cy.get('#Y1DW899').select('California')
        cy.get('[name="shippingAddress.postcode"]').type("12345-6789")
        cy.get('[name="shippingAddress.telephone"]').type("222222222")
        cy.get(':nth-child(1) > :nth-child(1) > .radio').click()
        cy.get('.button').click()


    }
}

export default CheckOut;