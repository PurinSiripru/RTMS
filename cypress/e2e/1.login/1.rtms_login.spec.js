describe('RTMS Log In Test',()=>{
    it('shoud enter log in page',()=>{
        cy.visit('http://localhost/rtms/#/')
    })
    it('type wrong number',()=>{
        cy.wait(5000)
        cy.get('body').type('15',{delay: 0})
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('type 14 to access RTMS',()=>{
        cy.get('body').type('{1}{4}', { delay: 0 })
    })
    it('using keyboard software',()=>{
        cy.get('div[class="home"]').eq(5).should('be.visible').click()
        cy.get('div[class="home"]').eq(6).should('be.visible').click()
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-primary"]').should('be.visible').click()
    })
    it('select sign out',()=>{
        cy.get('div[class="b_logout"]').should('be.visible').click()
        cy.wait(2000)
    })
    it('sign in again',()=>{
        cy.wait(4000)
        cy.get('body').type('{1}{4}', { delay: 0 })
    })
    it('test keyboard software',()=>{
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // เบิกสินค้า
        cy.get('input[class="form-control"]').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_T"]').contains('T').should('be.visible').click()
        cy.get('button[id="kb_E"]').contains('E').should('be.visible').click()
        cy.get('button[id="kb_S"]').contains('S').should('be.visible').click()
        cy.get('button[id="kb_T"]').contains('T').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('button[class="btn btn-danger"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
    })
})