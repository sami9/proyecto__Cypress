class customersPage {
    getEmail() { return cy.get("#Email"); }
    getPassword() { return cy.get("#Password"); }
    getName() { return cy.get('#FirstName')}
    getTaxExempt() { return cy.get("#IsTaxExempt"); }

    goToCustomers() {
        cy.get('#nopSideBarPusher').click()
        cy.get(':nth-child(4) > [href="#"] > p').click()
        cy.get('.menu-open > .nav > :nth-child(1) > .nav-link > p').click()
        cy.get('.float-left').should("have.text", "\nCustomers\n")
        cy.get('.float-right > .btn-primary').click()
    }

    selectGender() {
        cy.get(':nth-child(5) > .col-md-9')
        cy.get('.raw > :nth-child(1)')
        cy.get('#Gender_Male').click()
    }

    selectNewsLetter(newsletter){
        cy.get(':nth-child(9) > .col-md-9 > .input-group-append > .input-group > .k-widget > .k-multiselect-wrap').click();
        cy.get('#SelectedNewsletterSubscriptionStoreIds_listbox').contains(newsletter).click();
        //cy.get('Select').select(0).should('have.value', '1')

    }
 
    selectVender() {
        cy.get('#VendorId').select("Vendor 2").should('have.value', '2')     
    }

    // Metodo que llena un formulario, pero no es la mejor opción
    fillForm(newsletter){
        cy.get('#Email').type("admin@yourstore.com")
        cy.get('#Password').type("admin")
        cy.get('#FirstName').type("Riley Andres" )
        cy.get('#LastName').type("Mendoza")
        this.selectGender()
        cy.get('#DateOfBirth').type("9/16/2019")// Se puede seleccionar ?
        cy.get('#Company').type("Happy dogs")
        cy.get(':nth-child(9) > .col-md-9 > .input-group-append > .input-group > .k-widget > .k-multiselect-wrap').click();
        cy.get('#SelectedNewsletterSubscriptionStoreIds_listbox').contains(newsletter).click();
        this.selectVender()
        cy.get('#AdminComment').type("AdminComment")
        this.saveBotton()
        cy.get('.validation-summary-errors > ul > li').should("have.text","Email is already registered")
    }

    saveBotton(){
        cy.get('[name="save"]').click();

    }

    addRegister(){

      cy.get('.validation-summary-errors > ul > li').then(($Mensaje) => {
        if ($Mensaje.hasClass('active')) {
            cy.get  .should("have.text","The new customer has been added successfully.") // como pongo esto
        
        } else {
            cy.get('#Email').clear()
            cy.get('#Email').type("Riley@yourstore.com")
            cy.get('#Password').type("admin")
            this.saveBotton()
          
        }
      })
 
   }

    searchInTable(customerName) {
        cy.get("tr td:nth-child(2)").each(($el, index, $list) => {
          const validateCustomerName = $el.text();
          if (validateCustomerName.includes(customerName)) {
            cy.get("td:nth-child(7)").eq(index).click();
            cy.get('#Email').should("have.value", customerName);
          }
        });
      }
}

export default customersPage;