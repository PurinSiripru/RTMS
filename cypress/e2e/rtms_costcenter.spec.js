describe('RTMS Cost Center Test',()=>{
    it('access RTMS',()=>{
        cy.visit('http://localhost/rtms/#/')
        cy.wait(4000)
        cy.get('body').click().type('15',{delay: 10})
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(300).click()
        cy.wait(2000)
        cy.get('body').click().type('14',{delay: 10})
    })
    it('select Cost Center',()=>{
        cy.wait(1000)
        cy.get('div[class="home"]').eq(6).should('be.visible').click() // ตั้งค่าขั้นสูง
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // จัดการงาน
    })
    it('search TEST001 Cost Center',()=>{
        cy.get('input[class="form-control"]').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('E').should('be.visible').click()
        cy.get('button[type="button"]').contains('S').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').should('be.visible').click()
        cy.get('input[class="form-control"]').should('be.visible').clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').should('be.visible').click()
    })
    it('insert TEST001 Cost Center',()=>{
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[id="cost_center_header_name"]').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('E').should('be.visible').click()
        cy.get('button[type="button"]').contains('S').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="ant-switch ant-switch-checked"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').click()
        cy.get('td[class="ant-table-cell"]').eq(0).should('be.visible').click()
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('search found TEST001 Cost Center',()=>{
        cy.get('input[class="form-control"]').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('E').should('be.visible').click()
        cy.get('button[type="button"]').contains('S').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').should('be.visible').click()
        cy.get('input[class="form-control"]').should('be.visible').clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').should('be.visible').click()
    })
    it('check data of TEST001',()=>{
        cy.get('a[class="btn btn-warning"]').should('be.visible').click()
        cy.wait(1000)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
    })
    it('update TEST001 to TEST002 and change data',()=>{
        cy.get('a[class="btn btn-warning"]').should('be.visible').click()
        cy.get('input[id="cost_center_header_name"]').should('be.visible').clear()
        cy.get('input[id="cost_center_header_name"]').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('E').should('be.visible').click()
        cy.get('button[type="button"]').contains('S').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('2').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').click()
        cy.get('td[class="ant-table-cell"]').eq(2).should('be.visible').click()
        cy.get('button[class="ant-switch"]').should('be.visible').click()
        cy.get('td[class="text-info text-center align-middle"]').should('be.visible').click()
        cy.get('input[class="form-control"]').eq(2).should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('P').should('be.visible').click()
        cy.get('button[type="button"]').contains('U').should('be.visible').click()
        cy.get('button[type="button"]').contains('R').should('be.visible').click()
        cy.get('button[type="button"]').contains('I').should('be.visible').click()
        cy.get('button[type="button"]').contains('N').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('4').should('be.visible').click()
        cy.get('button[type="button"]').contains('5').should('be.visible').click()
        cy.get('button[type="button"]').contains('6').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('search not found TEST001',()=>{
        cy.get('input[class="form-control"]').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('E').should('be.visible').click()
        cy.get('button[type="button"]').contains('S').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').should('be.visible').click()
        cy.get('input[class="form-control"]').should('be.visible').clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').should('be.visible').click()
    })
    it('search found TEST002',()=>{
        cy.get('input[class="form-control"]').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('E').should('be.visible').click()
        cy.get('button[type="button"]').contains('S').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('2').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').should('be.visible').click()
        cy.get('input[class="form-control"]').should('be.visible').clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').should('be.visible').click()
    })
    it('check data of TEST002',()=>{
        cy.get('a[class="btn btn-warning"]').should('be.visible').click()
        cy.wait(1000)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
    })
    it('delete TEST002 Cost Center',()=>{
        cy.get('button[class="btn btn-danger"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('search not found TEST002',()=>{
        cy.get('input[class="form-control"]').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('E').should('be.visible').click()
        cy.get('button[type="button"]').contains('S').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('2').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').should('be.visible').click()
        cy.get('input[class="form-control"]').should('be.visible').clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').should('be.visible').click()
    })
})