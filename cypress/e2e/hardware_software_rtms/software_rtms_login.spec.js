describe('Software RTMS Log In Test',()=>{
    it('shoud enter log in page',()=>{
        cy.visit('http://localhost/rtms/#/')
        cy.wait(3000)
    })
    it('type wrong number',()=>{
        cy.wait(3000)
        cy.get('body').click().type('15',{delay: 10})
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(300).click()
    })
    it('type 14 to access RTMS',()=>{
        cy.wait(3000)
        cy.get('body').click().type('14',{delay: 10})
    })
    it('select advance option -> system setting -> using keyboard',()=>{
        cy.get('div[class="home"]').eq(6).should('be.visible').wait(300).click()
        cy.get('div[class="home"]').eq(7).should('be.visible').wait(300).click()
        cy.scrollTo('bottom')
        // cy.get('input[class="ml-1"]').eq(0).should('be.visible').wait(300).click() // เปิดคีย์บอร์ด
        cy.get('button[class="btn btn-primary"]').should('be.visible').wait(300).click()
    })
    it('select sign out',()=>{
        cy.get('div[class="b_logout"]').should('be.visible').wait(300).click()
    })
    it('sign in again',()=>{
        cy.visit('http://localhost/rtms/#/')
        cy.wait(3000)
        cy.get('body').click().type('15',{delay: 10})
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(300).click()
        cy.wait(2000)
        cy.get('body').click().type('14',{delay: 10})
    })
    it('test software keyboard',()=>{
        cy.get('div[class="home"]').eq(0).should('be.visible').wait(300).click()
        cy.get('input[class="form-control"]').should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('E').should('be.visible').click()
        cy.get('button[type="button"]').contains('S').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').contains('0').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').contains('0').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').contains('1').should('be.visible').click()
        cy.get('button[class="btn btn-danger"]').should('be.visible').wait(300).click()
    })
})