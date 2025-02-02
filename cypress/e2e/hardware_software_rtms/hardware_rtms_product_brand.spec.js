describe('Hardware RTMS Product Brand Test',()=>{
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
    it('select advance option -> manage product -> select brand product',()=>{
        cy.get('div[class="home"]').eq(6).should('be.visible').wait(2000).click()
        cy
        cy.get('div[class="home"]').eq(3).should('be.visible').wait(2000).click()
        cy
        cy.get('div[class="home"]').eq(3).should('be.visible').wait(2000).click()
    })
    it('search PURIN1',()=>{
        cy.get('input[class="form-control"]').should('be.visible').wait(2000).click().type('PURIN1')
        cy.scrollTo('top')
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').wait(2000).click()
        cy.get('input[class="form-control"]').should('be.visible').wait(2000).clear()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').wait(2000).click()
    })
    it('add brand PURIN1',()=>{
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.wait(2000)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="form-control"]').eq(1).should('be.visible').click().type('PURIN1')
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy
    })
    it('search found PURIN1',()=>{
        cy.get('input[class="form-control"]').should('be.visible').click().type('PURIN1')
        cy.scrollTo('top')
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
        cy.get('input[class="form-control"]').should('be.visible').clear()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
    })
    it('check PURIN1 detail',()=>{
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-info"]').eq(31).should('be.visible').click()
        cy.wait(3000)
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('update PURIN1 to PURIN2',()=>{
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-info"]').eq(31).should('be.visible').click()
        cy.get('input[class="form-control"]').eq(1).should('be.visible').clear()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="form-control"]').eq(1).should('be.visible').click().type('PURIN2')
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('search not found PURIN1',()=>{
        cy.get('input[class="form-control"]').should('be.visible').wait(2000).click().type('PURIN1')
        cy.scrollTo('top')
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
        cy.get('input[class="form-control"]').should('be.visible').clear()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
    })
    it('search found PURIN2',()=>{
        cy.get('input[class="form-control"]').should('be.visible').click().type('PURIN2')
        cy.scrollTo('top')
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
        cy.get('input[class="form-control"]').should('be.visible').clear()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
    })
    it('check PURIN2 detail',()=>{
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-info"]').eq(31).should('be.visible').click()
        cy.wait(3000)
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('delete PURIN2',()=>{
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-danger"]').eq(30).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.scrollTo('top')
    })
    it('search not found PURIN2',()=>{
        cy.get('input[class="form-control"]').should('be.visible').click().type('PURIN2')
        cy.scrollTo('top')
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
        cy.get('input[class="form-control"]').should('be.visible').clear()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
    })
})