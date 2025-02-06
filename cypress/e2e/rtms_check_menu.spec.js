describe('RTMS Check Menu Test',()=>{
    it('access RTMS',()=>{
        cy.wait(5000)
        cy.visit('http://localhost/rtms/#/')
        cy.wait(4000)
        cy.get('body').type('15',{delay: 0.1})
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(300).click()
        cy.wait(2000)
       cy.get('body').type('{1}{4}', { delay: 0 })
    })
    it('insert Cost Center',()=>{
        cy.wait(2000)
        cy.get('div[class="home"]').eq(6).should('be.visible').click() // ตั้งค่าขั้นสูง
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // จัดการงาน
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[id="cost_center_header_name"]').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_T"]').contains('T').should('be.visible').click()
        cy.get('button[id="kb_E"]').contains('E').should('be.visible').click()
        cy.get('button[id="kb_S"]').contains('S').should('be.visible').click()
        cy.get('button[id="kb_T"]').contains('T').should('be.visible').click()
        cy.get('button[id="kb_E"]').contains('E').should('be.visible').click()
        cy.get('button[id="kb_R"]').contains('R').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="ant-switch ant-switch-checked"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').click()
        cy.wait(500)
        cy.get('td[class="ant-table-cell"]').eq(0).should('be.visible').click()
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('add Fix Costcenter',()=>{
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.scrollTo('bottom')
        cy.get('div[class="home"]').eq(12).should('be.visible').click() // จัดการ Fix Costcenter
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="form-control"]').eq(1).should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_M"]').contains('M').should('be.visible').click()
        cy.get('button[id="kb_A"]').contains('A').should('be.visible').click()
        cy.get('button[id="kb_X"]').contains('X').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="ml-1"]').eq(0).should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="ml-1"]').eq(1).should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('search License',()=>{
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.scrollTo('top')
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // จัดการข้อมูลผู้ใช้
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // จัดการสิทธิ์การใช้งาน
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
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.scrollTo('top')
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
        cy.get('input[type="checkbox"]').eq(0).should('be.visible').click()
        cy.scrollTo('top')
        cy.wait(500)
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('search found TEST001',()=>{
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
    it('check details TEST001 License',()=>{
        cy.get('button[class="btn btn-info"]').eq(2).should('be.visible').click()
        cy.scrollTo('bottom')
        cy.wait(1000)
        cy.scrollTo('top')
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
    })
    it('search User PURIN001',()=>{
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // จัดการผู้ใช้
        cy.get('input[class="form-control"]').eq(0).should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_P"]').contains('P').should('be.visible').click()
        cy.get('button[id="kb_U"]').contains('U').should('be.visible').click()
        cy.get('button[id="kb_R"]').contains('R').should('be.visible').click()
        cy.get('button[id="kb_I"]').contains('I').should('be.visible').click()
        cy.get('button[id="kb_N"]').contains('N').should('be.visible').click()
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
    it('create new User which using TEST001 license',()=>{
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click()
        cy.get('input[class="form-control"]').eq(1).should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('button[id="kb_3"]').contains('3').should('be.visible').click()
        cy.get('button[id="kb_4"]').contains('4').should('be.visible').click()
        cy.get('button[id="kb_5"]').contains('5').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('input[class="form-control"]').eq(2).should('be.visible').click()
        cy.get('button[id="kb_6"]').contains('6').should('be.visible').click()
        cy.get('button[id="kb_7"]').contains('7').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('input[class="form-control"]').eq(3).should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_P"]').contains('P').should('be.visible').click()
        cy.get('button[id="kb_U"]').contains('U').should('be.visible').click()
        cy.get('button[id="kb_R"]').contains('R').should('be.visible').click()
        cy.get('button[id="kb_I"]').contains('I').should('be.visible').click()
        cy.get('button[id="kb_N"]').contains('N').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('input[class="form-control"]').eq(4).should('be.visible').click()
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').eq(0).should('be.visible').click()
        cy.wait(500)
        cy.get('td[class="ant-table-cell"]').eq(2).should('be.visible').click()
        cy.get('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').eq(1).should('be.visible').click()
        cy.wait(500)
        cy.get('td[class="ant-table-cell"]').eq(0).should('be.visible').click()
        cy.get('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').eq(2).should('be.visible').click()
        cy.wait(500)
        cy.get('td[class="ant-table-cell"]').eq(0).should('be.visible').click()
        cy.get('input[class="form-control"]').eq(5).should('be.visible').click()
        cy.get('button[id="kb_8"]').contains('8').should('be.visible').click()
        cy.get('button[id="kb_8"]').contains('8').should('be.visible').click()
        cy.get('button[id="kb_8"]').contains('8').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_@"]').contains('@').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_g"]').contains('g').should('be.visible').click()
        cy.get('button[id="kb_m"]').contains('m').should('be.visible').click()
        cy.get('button[id="kb_a"]').contains('a').should('be.visible').click()
        cy.get('button[id="kb_i"]').contains('i').should('be.visible').click()
        cy.get('button[id="kb_l"]').contains('l').should('be.visible').click()
        cy.get('button[id="kb_."]').contains('.').should('be.visible').click()
        cy.get('button[id="kb_c"]').contains('c').should('be.visible').click()
        cy.get('button[id="kb_o"]').contains('o').should('be.visible').click()
        cy.get('button[id="kb_m"]').contains('m').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').eq(3).should('be.visible').click()
        cy.wait(500)
        cy.get('td[class="ant-table-cell"]').eq(0).should('be.visible').click()
        cy.get('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').eq(4).should('be.visible').click()
        cy.wait(500)
        cy.get('td[class="ant-table-cell"]').eq(0).should('be.visible').click()
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('search found PURIN001',()=>{
        cy.get('input[class="form-control"]').eq(0).should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_P"]').contains('P').should('be.visible').click()
        cy.get('button[id="kb_U"]').contains('U').should('be.visible').click()
        cy.get('button[id="kb_R"]').contains('R').should('be.visible').click()
        cy.get('button[id="kb_I"]').contains('I').should('be.visible').click()
        cy.get('button[id="kb_N"]').contains('N').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
        cy.get('input[class="form-control"]').should('be.visible').clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click()
    })
    it('check PURIN001 details',()=>{
        cy.get('button[class="btn btn-info"]').eq(2).should('be.visible').click()
        cy.wait(1000)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
    })
    it('Test log out then log in with new user',()=>{
        cy.get('svg[stroke="currentColor"]').should('be.visible').click()
        cy.wait(4000)
        cy.get('body').type('67',{delay: 10})
        cy.get('label[style="padding-top: 10px;"]').contains('PURIN 001').should('be.visible')
    })
    it('Test check all RTMS menu',()=>{
        cy.get('button[class="position-relative btn"]').should('be.visible').click() // เบิกสินค้าขออนุมัติ
        cy.get('button[class="btn btn-info"]').should('be.visible').click()
        cy.get('i[class="fas fa-file fa-3x mr-2 btn-info text-white d-flex justify-content-center align-items-center rounded"]').should('be.visible').click() // รายการขออนุมัติ
        cy.get('button[class="btn btn-info"]').should('be.visible').click()
        cy.get('i[class="fas fa-shopping-cart fa-3x btn-info text-white d-flex justify-content-center align-items-center rounded"]').should('be.visible').click() // ตะกร้า
        cy.wait(800)
        cy.get('button[class="text-white btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.wait(800)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // เบิกสินค้า
        cy.get('h5[style="background-color: rgb(4, 87, 162);"]').eq(0).should('be.visible').click() // ค้นหา
        cy.wait(800)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('h5[style="background-color: rgb(4, 87, 162);"]').eq(1).should('be.visible').click() // MENU1
        cy.wait(800)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.wait(800)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // เติมสินค้า
        cy.get('i[class="fas fa-file fa-3x mr-2 btn-info text-white d-flex justify-content-center align-items-center rounded"]').should('be.visible').click()
        cy.wait(800)
        cy.get('button[class="btn btn-info"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(2).should('be.visible').click() // คืนสินค้า
        cy.wait(800)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(3).should('be.visible').click() // เบิกสินค้าแบบ JOB
        cy.wait(800)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(4).should('be.visible').click() // สินค้าประเภทยืม
        cy.get('h5[style="background-color: rgb(4, 87, 162);"]').eq(0).should('be.visible').click() // ยืมสินค้า
        cy.wait(800)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('h5[style="background-color: rgb(4, 87, 162);"]').eq(1).should('be.visible').click() // คืนสินค้า
        cy.wait(800)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('h5[style="background-color: rgb(4, 87, 162);"]').eq(2).should('be.visible').click() // นำสินค้าเข้า
        cy.wait(800)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('h5[style="background-color: rgb(4, 87, 162);"]').eq(3).should('be.visible').click() // นำสินค้าออก
        cy.wait(800)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(5).should('be.visible').click() // รายงาน
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // รายงานการเติมสินค้า
        cy.get('button[class="btn btn-primary"]').eq(0).should('be.visible').click() // ค้นหา
        cy.get('button[class="btn btn-primary"]').eq(1).should('be.visible').click() // ส่งอีเมล
        cy.get('button[class="btn btn-primary"]').eq(2).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').eq(1).should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').eq(0).should('be.visible').click()
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // รายงานการเบิกสินค้า
        cy.get('button[class="btn btn-primary"]').eq(0).should('be.visible').click() // ค้นหา
        cy.get('button[class="btn btn-primary"]').eq(1).should('be.visible').click() // ส่งอีเมล
        cy.get('button[class="btn btn-primary"]').eq(2).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').eq(1).should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').eq(0).should('be.visible').click()
        cy.get('div[class="home"]').eq(2).should('be.visible').click() // รายงานสินค้าคงเหลือ
        cy.get('button[class="btn btn-primary"]').eq(0).should('be.visible').click() // ค้นหา
        cy.get('button[class="btn btn-primary"]').eq(1).should('be.visible').click() // ส่งอีเมล
        cy.get('button[class="btn btn-primary"]').eq(2).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').eq(1).should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').eq(0).should('be.visible').click()
        cy.get('div[class="home"]').eq(3).should('be.visible').click() // รายงานสินค้าที่มีปัญหา
        cy.get('button[class="btn btn-primary"]').eq(0).should('be.visible').click() // ค้นหา
        cy.get('button[class="btn btn-primary"]').eq(1).should('be.visible').click() // ส่งอีเมล
        cy.get('button[class="btn btn-primary"]').eq(2).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').eq(1).should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').eq(0).should('be.visible').click()
        cy.get('div[class="home"]').eq(4).should('be.visible').click() // รายงานสินค้าเคลื่อนไหว
        cy.get('button[class="btn btn-primary"]').eq(0).should('be.visible').click() // ค้นหา
        cy.get('button[class="btn btn-primary"]').eq(1).should('be.visible').click() // ส่งอีเมล
        cy.get('button[class="btn btn-primary"]').eq(2).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').eq(1).should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').eq(0).should('be.visible').click()
        cy.get('div[class="home"]').eq(5).should('be.visible').click() // รายงานสินค้าต่ำกว่าเกณฑ์
        cy.get('button[class="btn btn-primary"]').eq(0).should('be.visible').click() // ค้นหา
        cy.get('button[class="btn btn-primary"]').eq(1).should('be.visible').click() // ส่งอีเมล
        cy.get('button[class="btn btn-primary"]').eq(2).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').eq(1).should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').eq(0).should('be.visible').click()
        cy.get('div[class="home"]').eq(6).should('be.visible').click() // รายงานจำนวนสินค้าต่ำกว่าเกณฑ์
        cy.get('button[class="btn btn-primary"]').eq(0).should('be.visible').click() // ค้นหา
        cy.get('button[class="btn btn-primary"]').eq(1).should('be.visible').click() // ส่งอีเมล
        cy.get('button[class="btn btn-primary"]').eq(2).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').eq(1).should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').eq(0).should('be.visible').click()
        cy.get('div[class="home"]').eq(7).should('be.visible').click() // รายงานสินค้ายืม
        cy.get('button[class="btn btn-primary"]').eq(0).should('be.visible').click() // ค้นหา
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(8).should('be.visible').click() // ตั้งค่าการส่งอีเมลอัตโนมัติ
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click() // เพิ่มการส่งเมล
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.scrollTo('top')
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(9).should('be.visible').click() // รายงานการเบิกสินค้าแบบ JOB
        cy.get('button[class="btn btn-primary"]').eq(0).should('be.visible').click() // ค้นหา
        cy.get('button[class="btn btn-primary"]').eq(1).should('be.visible').click() // ส่งอีเมล
        cy.get('button[class="btn btn-primary"]').eq(2).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').eq(1).should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').eq(0).should('be.visible').click()
        cy.get('div[class="home"]').eq(10).should('be.visible').click() // รายงานสรุปการเบิก
        cy.get('button[class="btn btn-primary"]').eq(0).should('be.visible').click() // ค้นหา
        cy.get('button[class="btn btn-primary"]').eq(1).should('be.visible').click() // ส่งอีเมล
        cy.get('button[class="btn btn-primary"]').eq(2).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').eq(1).should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').eq(0).should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(6).should('be.visible').click() // ตั้งค่าขั้นสูง
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // จัดการข้อมูลผู้ใช้
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // จัดการผู้ใช้
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click()
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.scrollTo('top')
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // จัดการสิทธิ์การใช้งาน
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click()
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.scrollTo('top')
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(2).should('be.visible').click() // จัดการแผนก
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click()
        cy.wait(800)
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(3).should('be.visible').click() // จัดการกลุ่มการเข้าถึงสินค้า
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click()
        cy.wait(800)
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-success"]').eq(1).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.scrollTo('top')
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // จัดการงาน
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click()
        cy.wait(800)
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.wait(800)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(2).should('be.visible').click() // จัดการ JOB
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').eq(0).should('be.visible').click()
        cy.get('button[class="btn btn-success"]').eq(1).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').eq(1).should('be.visible').click()
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').eq(1).should('be.visible').click()
        cy.get('button[class="btn btn-success"]').eq(1).should('be.visible').click()
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(3).should('be.visible').click() // จัดการข้อมูลสินค้า
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // สินค้า
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click() // เพิ่มสินค้า
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.scrollTo('top')
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // ประเภทสินค้า
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click() // เพิ่มประเภทสินค้า
        cy.wait(800)
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(2).should('be.visible').click() // กลุ่มสินค้า
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click() // เพิ่มกลุ่มสินค้า
        cy.wait(800)
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(3).should('be.visible').click() // แบรนด์สินค้า
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click() // เพิ่มแบรนด์สินค้า
        cy.wait(800)
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(4).should('be.visible').click() // จัดการเมนู
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click() // เพิ่มเมนูสินค้า
        cy.wait(800)
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(5).should('be.visible').click() // ชุดสินค้า
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click() // เพิ่มชุดสินค้า
        cy.get('i[class="fas fa-tasks text-white bg-info p-2 text-center rounded"]').should('be.visible').click() // จัดการชุดสินค้า
        cy.get('button[class="btn btn-success"]').eq(1).should('be.visible').click()
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.scrollTo('top')
        cy.get('a[class="btn btn-secondary d-flex"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(6).should('be.visible').click() // จัดการหน่วยสินค้า
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click() // เพิ่มหน่วยสินค้า
        cy.wait(800)
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(4).should('be.visible').click() // ตรวจสอบการทำงาน
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').click() // ตรวจสอบประตู
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').eq(0).should('be.visible').click()
        cy.get('button[class="btn btn-info"]').eq(1).should('be.visible').click() // ตรวจสอบการหมุนแบบสุ่ม
        cy.get('button[class="btn btn-info"]').contains('ยกเลิก').should('be.visible').click() // ยกเลิก
        cy.get('button[class="btn btn-info"]').eq(2).should('be.visible').click() // ตรวจสอบการบำรุงรักษา
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').eq(3).should('be.visible').click() // ตรวจสอบการหมุนแบบที่ละช่อง
        cy.get('button[class="btn btn-info"]').contains('ยกเลิก').should('be.visible').click() // ยกเลิก
        cy.get('button[class="btn btn-info"]').eq(4).should('be.visible').click() // ประวัติการเปลี่ยนประตู
        cy.get('button[class="btn btn-info ml-auto d-block my-3"]').should('be.visible').click() // เปลี่ยนประตู
        cy.get('button[class="d-flex justify-content-center align-items-center flex-column btn btn-secondary"]').should('be.visible').click() // ปิด
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(5).should('be.visible').click() // ตรวจสอบจำนวน
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(6).should('be.visible').click() // ภาพรวม
        cy.get('button[class="btn btn-secondary"]').eq(1).should('be.visible').click() // รายงานรวม
        cy.get('button[class="btn btn-info"]').should('be.visible').click() // ตกลง
        cy.get('button[class="btn btn-secondary"]').eq(2).should('be.visible').click() // รายงาน
        cy.get('button[class="btn btn-info"]').should('be.visible').click() // ตกลง
        cy.get('button[class="btn btn-secondary"]').eq(0).should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(7).should('be.visible').click() // ตั้งค่าระบบ
        cy.scrollTo('bottom')
        cy.wait(500)
        cy.scrollTo('top')
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(8).should('be.visible').click() // จัดการตู้
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // จัดการตู้
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click() // เพิ่มตู้
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').eq(0).should('be.visible').click()
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.get('div[class="home"]').eq(9).should('be.visible').click() // Tools life
        cy.get('button[class="ant-switch"]').should('be.visible').click() // เปิดใช้งาน Tools life 
        cy.get('button[class="swal2-cancel swal2-styled"]').should('be.visible').click() // ยกเลิก
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click() // เพิ่ม Tools life
        cy.get('button[class="btn btn-primary"]').should('be.visible').click() // เพิ่มสินค้า
        cy.get('button[class="btn btn-success"]').eq(1).should('be.visible').click() // ตกลง
        cy.wait(500)
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(10).should('be.visible').click() // ย้ายสินค้า
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click() // เพิ่มการย้ายสินค้า
        cy.get('button[class="p-4 w-25 h5 btn btn-info"]').should('be.visible').click() // ยกเลิก
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(11).should('be.visible').click() // นำเข้าข้อมูลพื้นฐาน
        cy.get('label[class="btn btn-success"]').eq(0).should('be.visible').click() // อัพโหลดไฟล์ข้อมูลพื้นฐาน
        cy.get('button[class="btn btn-primary btn btn-secondary"]').should('be.visible').click() // สร้างไฟล์ Excel จากไฟล์ข้อมูลพื้นฐานปัจจุบัน
        cy.get('label[class="btn btn-success"]').eq(1).should('be.visible').click() // นำเข้าข้อมูลเมนูสินค้า
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(12).should('be.visible').click() // จัดการ Fix Costcenter
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click() // เพิ่ม Fix Costcenter
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(13).should('be.visible').click() // จัดการ QR Code เบิกสินค้า
        cy.wait(1000)
        cy.scrollTo('top')
        cy.wait(500)
        cy.get('button[class="btn btn-info btn btn-secondary"]').should('be.visible').click() // ส่งอีเมล
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-success btn btn-secondary"]').should('be.visible').click() // เพิ่ม QR Code สินค้า
        cy.get('button[class="text-white btn btn-info text-center rounded"]').should('be.visible').click() // เลือกสินค้า
        cy.get('button[class="btn btn-secondary"]').eq(1).should('be.visible').click() // ยกเลิก
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').eq(0).should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(14).should('be.visible').click() // ตั้งค่าหัวข้อรายงาน
        cy.get('a[class="btn btn-info"]').eq(0).should('be.visible').click() // รายงานการเบิกสินค้า
        cy.wait(1000)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('a[class="btn btn-info"]').eq(1).should('be.visible').click() // รายงานสินค้าคงเหลือ
        cy.wait(1000)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
    })
    it('check user relation data',()=>{
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // จัดการผู้ใช้
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // จัดการสิทธิ์การใช้งาน
        cy.get('button[class="btn btn-danger"]').eq(1).should('be.visible').click() // ลบสิทธิ์การใช้งาน
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // จัดการงาน
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(12).should('be.visible').click() // จัดการ Fix Costcenter
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
    })
    it('delete User & All Data',()=>{
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // จัดการข้อมูลผู้ใช้
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // จัดการผู้ใช้
        cy.get('button[class="btn btn-danger"]').eq(1).should('be.visible').click() // ลบ User
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // จัดการสิทธิ์การใช้งาน
        cy.get('button[class="btn btn-danger"]').eq(1).should('be.visible').click() // ลบสิทธิ์การใช้งาน
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(12).should('be.visible').click() // จัดการ Fix Costcenter
        cy.get('button[class="btn btn-danger"]').eq(0).should('be.visible').click() // ลบ Fix Costcenter
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // จัดการงาน
        cy.wait(500)
        cy.get('button[class="btn btn-danger"]').eq(0).should('be.visible').click() // ลบ Costcenter
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
    })
    it('Log out and Log in to admin CTO',()=>{
        cy.get('svg[stroke="currentColor"]').should('be.visible').click()
        cy.wait(4000)
       cy.get('body').type('{1}{4}', { delay: 0 })
        cy.get('label[style="padding-top: 10px;"]').contains('admin CTO').should('be.visible')
    })
})