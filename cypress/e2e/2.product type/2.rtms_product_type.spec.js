describe('RTMS Product Type Test',()=>{
    it('select product type',()=>{
        cy.get('div[class="home"]').eq(5).should('be.visible').click() // ตั้งค่าขั้นสูง
        cy.get('div[class="home"]').eq(2).should('be.visible').click() // จัดการข้อมูลสินค้า
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // ประเภทสินค้า
    })
    it('search PURIN1',()=>{
        cy.get('input[class="form-control"]').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_P"]').contains('P').should('be.visible').click()
        cy.get('button[id="kb_U"]').contains('U').should('be.visible').click()
        cy.get('button[id="kb_R"]').contains('R').should('be.visible').click()
        cy.get('button[id="kb_I"]').contains('I').should('be.visible').click()
        cy.get('button[id="kb_N"]').contains('N').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.scrollTo('top')
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
        cy.get('input[class="form-control"]').should('be.visible').wait(2000).clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
    })
    it('add PURIN1',()=>{
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="form-control"]').eq(1).should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_P"]').contains('P').should('be.visible').click()
        cy.get('button[id="kb_U"]').contains('U').should('be.visible').click()
        cy.get('button[id="kb_R"]').contains('R').should('be.visible').click()
        cy.get('button[id="kb_I"]').contains('I').should('be.visible').click()
        cy.get('button[id="kb_N"]').contains('N').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('search found PURIN1',()=>{
        cy.get('input[class="form-control"]').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_P"]').contains('P').should('be.visible').click()
        cy.get('button[id="kb_U"]').contains('U').should('be.visible').click()
        cy.get('button[id="kb_R"]').contains('R').should('be.visible').click()
        cy.get('button[id="kb_I"]').contains('I').should('be.visible').click()
        cy.get('button[id="kb_N"]').contains('N').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.scrollTo('top')
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
        cy.get('input[class="form-control"]').should('be.visible').wait(2000).clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
    })
    it('check PURIN1 detail',()=>{
        cy.get('button[class="btn btn-info"]').eq(22).should('be.visible').click()
        cy.wait(3000)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
    })
    it('update PURIN1 to PURIN2',()=>{
        cy.get('button[class="btn btn-info"]').eq(22).should('be.visible').click()
        cy.get('input[class="form-control"]').eq(1).should('be.visible').wait(2000).clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="form-control"]').eq(1).should('be.visible').wait(2000).click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_P"]').contains('P').should('be.visible').click()
        cy.get('button[id="kb_U"]').contains('U').should('be.visible').click()
        cy.get('button[id="kb_R"]').contains('R').should('be.visible').click()
        cy.get('button[id="kb_I"]').contains('I').should('be.visible').click()
        cy.get('button[id="kb_N"]').contains('N').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('search not found PURIN1',()=>{
        cy.get('input[class="form-control"]').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_P"]').contains('P').should('be.visible').click()
        cy.get('button[id="kb_U"]').contains('U').should('be.visible').click()
        cy.get('button[id="kb_R"]').contains('R').should('be.visible').click()
        cy.get('button[id="kb_I"]').contains('I').should('be.visible').click()
        cy.get('button[id="kb_N"]').contains('N').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.scrollTo('top')
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
        cy.get('input[class="form-control"]').should('be.visible').wait(2000).clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
    })
    it('search found PURIN2',()=>{
        cy.get('input[class="form-control"]').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_P"]').contains('P').should('be.visible').click()
        cy.get('button[id="kb_U"]').contains('U').should('be.visible').click()
        cy.get('button[id="kb_R"]').contains('R').should('be.visible').click()
        cy.get('button[id="kb_I"]').contains('I').should('be.visible').click()
        cy.get('button[id="kb_N"]').contains('N').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.scrollTo('top')
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
        cy.get('input[class="form-control"]').should('be.visible').wait(2000).clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
    })
    it('check PURIN2 detail',()=>{
        cy.get('button[class="btn btn-info"]').eq(22).should('be.visible').click()
        cy.wait(3000)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
    })
    it('delete PURIN2',()=>{
        cy.get('button[class="btn btn-danger"]').eq(21).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.scrollTo('top')
    })
    it('search not found PURIN1',()=>{
        cy.get('input[class="form-control"]').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_P"]').contains('P').should('be.visible').click()
        cy.get('button[id="kb_U"]').contains('U').should('be.visible').click()
        cy.get('button[id="kb_R"]').contains('R').should('be.visible').click()
        cy.get('button[id="kb_I"]').contains('I').should('be.visible').click()
        cy.get('button[id="kb_N"]').contains('N').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.scrollTo('top')
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
        cy.get('input[class="form-control"]').should('be.visible').wait(2000).clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
    })
    it('check menu by disable license',()=>{
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // จัดการข้อมูลผู้ใช้
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // จัดการสิทธิ์การใช้งาน
        cy.get('button[class="btn btn-info"]').eq(1).should('be.visible').click() // แก้ไข
        cy.scrollTo('bottom')
        cy.get('input[type="checkbox"]').eq(21).should('be.visible').click() // ปิดจัดการสินค้า
        cy.wait(3000)
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // เพิ่ม
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
    })
    it('test check menu by log out then log in',()=>{
        cy.get('div[class="b_logout"]').should('be.visible').click() // log out
        cy.wait(5000)
       cy.get('body').type('{1}{4}', { delay: 0 })
        cy.get('div[class="home"]').eq(5).should('be.visible').click() // ตั้งค่าขั้นสูง
        cy.log('Cannot found product menu')
        cy.wait(1000)
    })
    it('enable license',()=>{
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // จัดการข้อมูลผู้ใช้
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // จัดการสิทธิ์การใช้งาน
        cy.get('button[class="btn btn-info"]').eq(1).should('be.visible').click() // แก้ไข
        cy.scrollTo('bottom')
        cy.get('input[type="checkbox"]').eq(21).should('be.visible').click() // เปิดจัดการสินค้า
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // เพิ่ม
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
    })
    it('test by log out then log in again',()=>{
        cy.get('div[class="b_logout"]').should('be.visible').click() // log out
        cy.wait(5000)
       cy.get('body').type('{1}{4}', { delay: 0 })
        cy.get('div[class="home"]').eq(5).should('be.visible').click() // ตั้งค่าขั้นสูง
        cy.log('Found product menu')
        cy.wait(1000)
    })
})