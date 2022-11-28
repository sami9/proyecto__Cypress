import customersPage from "../../../../support/app-customers/pages/customers/customersPage"
const customerP = new customersPage();

describe("Mi primer Test Suite", function () {
    
    beforeEach(function () {
        //runs once before all the test in the block
        cy.visit("https://admin-demo.nopcommerce.com/login")
        cy.fixture("customers").then(function (data) {
            this.data = data;
        });
    });

// Método usado para llenar el formulario desde un Json un fixxure
    it("Verificar que puedo agregar un cliente (customer)", function () {
        cy.typeLogin({ email: "admin@yourstore.com", password: 'admin' })
        customerP.goToCustomers()
        // Llenar formulario
        customerP.getEmail().type(this.data.email)
        customerP.getPassword().type(this.data.password)
        customerP.selectNewsLetter(this.data.newsletter)
        customerP.getTaxExempt().check(this.data.taxExempt)
        
    })

//// Método usado para llenar el formulario desde un Json
    it("Probar perrito", function () {
        cy.typeLogin({ email: "admin@yourstore.com", password: 'admin' })
        customerP.goToCustomers()
        // Llenar formulario
        customerP.getEmail().type(this.data.email2)


    })


    //// Método usado para llenar d
    it("Agregar cliente segunda forma", function () {
        cy.typeLogin({ email: "admin@yourstore.com", password: 'admin' })
        customerP.goToCustomers()
        customerP.fillForm(this.data.newsletter);
        customerP.addRegister();

    })

 
    //Metodo para recorrer una tabla
    it.only("Buscar en tablas", function () {
        cy.typeLogin({ email: "Admin@yourstore.com", password: 'admin' })
        cy.get('#nopSideBarPusher').click()
        cy.get(':nth-child(4) > [href="#"] > p').click()
        cy.get('.menu-open > .nav > :nth-child(1) > .nav-link > p').click()
        cy.get('.float-left').should("have.text", "\nCustomers\n")
        customerP.searchInTable(this.data.email3)
        
    })

})