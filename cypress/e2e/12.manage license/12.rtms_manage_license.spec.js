describe('RTMS Manage License Test',()=>{
    it('select manage license',()=>{
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // จัดการสิทธิ์การใช้งาน
    })
    it('search TEST001 license',()=>{
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
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
        cy.get('input[class="form-control"]').should('be.visible').clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
    })
    it('insert TEST001 license',()=>{
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="form-control"]').eq(1).should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_T"]').contains('T').should('be.visible').click()
        cy.get('button[id="kb_E"]').contains('E').should('be.visible').click()
        cy.get('button[id="kb_S"]').contains('S').should('be.visible').click()
        cy.get('button[id="kb_T"]').contains('T').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('input[type="checkbox"]').eq(2).should('be.visible').click()
        cy.scrollTo('top')
        cy.get('input[type="checkbox"]').eq(4).should('be.visible').click()
        cy.scrollTo('top')
        cy.get('input[type="checkbox"]').eq(6).should('be.visible').click()
        cy.scrollTo('top')
        cy.get('input[type="checkbox"]').eq(8).should('be.visible').click()
        cy.scrollTo('top')
        cy.get('input[type="checkbox"]').eq(10).should('be.visible').click()
        cy.scrollTo('top')
        cy.get('input[type="checkbox"]').eq(12).should('be.visible').click()
        cy.scrollTo('top')
        cy.get('input[type="checkbox"]').eq(14).should('be.visible').click()
        cy.scrollTo('top')
        cy.get('input[type="checkbox"]').eq(16).should('be.visible').click()
        cy.scrollTo('top')
        cy.get('input[type="checkbox"]').eq(18).should('be.visible').click()
        cy.scrollTo('top')
        cy.get('input[type="checkbox"]').eq(20).should('be.visible').click()
        cy.scrollTo('top')
        cy.get('input[type="checkbox"]').eq(22).should('be.visible').click()
        cy.scrollTo('top')
        cy.get('input[type="checkbox"]').eq(24).should('be.visible').click()
        cy.scrollTo('top')
        cy.get('input[type="checkbox"]').eq(26).should('be.visible').click()
        cy.scrollTo('top')
        cy.get('input[type="checkbox"]').eq(28).should('be.visible').click()
        cy.scrollTo('top')
        cy.get('input[type="checkbox"]').eq(30).should('be.visible').click()
        cy.scrollTo('top')
        cy.get('input[type="checkbox"]').eq(32).should('be.visible').click()
        cy.scrollTo('top')
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('search found TEST001 license',()=>{
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
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
        cy.get('input[class="form-control"]').should('be.visible').clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
    })
    it('check TEST001 license details',()=>{
        cy.get('button[class="btn btn-info"]').eq(2).should('be.visible').click()
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-success"]').should('be.visible')
        cy.wait(1000)
        cy.get('input[class="form-control"]').eq(1).should('be.visible')
        cy.scrollTo('top')
        cy.wait(1000)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
    })
    it('update TEST001 to TEST002 and change data',()=>{
        cy.get('button[class="btn btn-info"]').eq(2).should('be.visible').click()
        cy.get('input[class="form-control"]').eq(1).should('be.visible').clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="form-control"]').eq(1).should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_T"]').contains('T').should('be.visible').click()
        cy.get('button[id="kb_E"]').contains('E').should('be.visible').click()
        cy.get('button[id="kb_S"]').contains('S').should('be.visible').click()
        cy.get('button[id="kb_T"]').contains('T').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('input[type="checkbox"]').eq(0).should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('search not found TEST001 license',()=>{
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
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
        cy.get('input[class="form-control"]').should('be.visible').clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
    })
    it('search found TEST002 license',()=>{
        cy.get('input[class="form-control"]').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_T"]').contains('T').should('be.visible').click()
        cy.get('button[id="kb_E"]').contains('E').should('be.visible').click()
        cy.get('button[id="kb_S"]').contains('S').should('be.visible').click()
        cy.get('button[id="kb_T"]').contains('T').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
        cy.get('input[class="form-control"]').should('be.visible').clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
    })
    it('test checkbox',()=>{
        cy.get('button[class="btn btn-info"]').eq(2).should('be.visible').click()
        cy.get('input[type="checkbox"]').eq(0).should('be.visible').click()
        cy.get('input[type="checkbox"]').eq(1).should('be.visible').click()
        cy.get('input[type="checkbox"]').eq(0).should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
    })
    it('check TEST002 license details',()=>{
        cy.get('button[class="btn btn-info"]').eq(2).should('be.visible').click()
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-success"]').should('be.visible')
        cy.wait(1000)
        cy.get('input[class="form-control"]').eq(1).should('be.visible')
        cy.scrollTo('top')
        cy.wait(1000)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
    })
    it('delete TEST002 license',()=>{
        cy.get('button[class="btn btn-danger"]').eq(1).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('search not found TEST002 license',()=>{
        cy.get('input[class="form-control"]').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_T"]').contains('T').should('be.visible').click()
        cy.get('button[id="kb_E"]').contains('E').should('be.visible').click()
        cy.get('button[id="kb_S"]').contains('S').should('be.visible').click()
        cy.get('button[id="kb_T"]').contains('T').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
        cy.get('input[class="form-control"]').should('be.visible').clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
    })
})