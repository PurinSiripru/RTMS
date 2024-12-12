describe('RTMS Log In Test',()=>{
    it('shoud enter log in page',()=>{
        cy.visit('http://localhost/rtms/#/')
        cy.wait(3000)
    })
    it('type wrong number',()=>{
        cy.wait(3000)
        cy.get('body').click().type('15',{delay: 10})
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(1000).click()
    })
    it('type 14 to access RTMS',()=>{
        cy.wait(3000)
        cy.get('body').click().type('14',{delay: 10})
    })
})