describe("Mi primer Test Suite", () => {

    it("Verificar Login", () => {
        cy.visit("https://admin-demo.nopcommerce.com/login")
        cy.typeLogin({ email: "admin@yourstore.com", password: 'admin' })
        cy.url().should("eq", "https://admin-demo.nopcommerce.com/admin/")
    })

    it("Verificar correo Fallido", () => {
        cy.visit("https://admin-demo.nopcommerce.com/login")
        cy.typeLogin({ email: "ralfie.testcom", password: 'admin' })
        cy.get('#Email-error').should("have.text", "Wrong email")

    })

    it("Verificar password Fallido", () => {
       cy.visit("https://admin-demo.nopcommerce.com/login")
       cy.typeLogin({email: "admin@yourstore.com", password: 'admin1'})
       cy.get('.message-error').should("have.text", "Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect\n")
       cy.get('li').should("have.text", "The credentials provided are incorrect")
       cy.get('.button-1').should("be.visible")
       cy.url().should("eq", "https://admin-demo.nopcommerce.com/login")
    })
    
})