class LoginPage{
    userLogin(username, password){
        cy.visit('https://magento.softwaretestingboard.com/?ref=hackernoon.com')
        cy.get('.panel > .header > .authorization-link > a').type(username)
        cy.get('#email').type("rawnak5738@gmail.com")
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(password)
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click();

    
    }

    invalidAssertion(){
        cy.get('.message-error > div').should("have.text", "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.");
    }
}

export default LoginPage;