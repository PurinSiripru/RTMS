describe('Hardware RTMS Log In Test',()=>{
    it('shoud enter log in page',()=>{
        cy.visit('http://localhost/rtms/#/')
        cy.wait(3000)
    })
    it('type wrong number',()=>{
        cy.wait(3000)
        cy.get('body').click().type('15',{delay: 10})
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('type 14 to access RTMS',()=>{
        cy.wait(3000)
        cy.get('body').click().type('14',{delay: 10})
    })
    it('select advance option',()=>{
        cy.get('div[class="home"]').eq(6).should('be.visible').click()
    })
    it('select system setting',()=>{
        cy.get('div[class="home"]').eq(7).should('be.visible').click()
    })
    it('turn off keyboard',()=>{
        cy.scrollTo('bottom')
        cy.get('input[class="ml-1"]').eq(0).should('be.visible').click()
        cy.get('button[class="btn btn-primary"]').should('be.visible').click()
    })
    it('select sign out',()=>{
        cy.get('div[class="b_logout"]').should('be.visible').click()
    })
    it('sign in again',()=>{
        cy.visit('http://localhost/rtms/#/')
        cy.wait(3000)
        cy.get('body').click().type('15',{delay: 10})
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.wait(2000)
        cy.get('body').click().type('14',{delay: 10})
    })
    it('check that keyboard is not show',()=>{
        cy.get('div[class="home"]').eq(0).should('be.visible').click()
        cy.get('input[class="form-control"]').should('be.visible').click()
        cy.wait(2000)
    })
})