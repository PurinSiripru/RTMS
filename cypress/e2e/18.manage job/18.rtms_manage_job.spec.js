describe('RTMS Manage Job Test',()=>{
    it('enable Manage Job,Fix Cost Center',()=>{
        cy.get('div[class="home"]').eq(5).should('be.visible').click() // ตั้งค่าขั้นสูง
        cy.scrollTo('top')
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // จัดการข้อมูลผู้ใช้
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // จัดการสิทธิ์การใช้งาน
        cy.get('button[class="btn btn-info"]').eq(1).should('be.visible').click() // แก้ไข
        cy.scrollTo('bottom')
        cy.get('input[type="checkbox"]').eq(27).should('be.visible').click() // เปิด จัดการ Job
        cy.wait(3000)
        cy.get('input[type="checkbox"]').eq(31).should('be.visible').click() // เปิด Fix Cost Center
        cy.wait(3000)
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // เพิ่ม
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
    })
    it('test check menu by log out then log in',()=>{
        cy.get('div[class="b_logout"]').should('be.visible').click() // log out
        cy.wait(5000)
       cy.get('body').type('{1}{4}', { delay: 0 })
        cy.get('div[class="home"]').eq(5).should('be.visible').click() // ตั้งค่าขั้นสูง
        cy.log('Found Manage Job , Fix Cost Center menu')
        cy.scrollTo('bottom')
        cy.wait(1000)
        cy.scrollTo('top')
    })
    it('insert Costcenter and Test process',()=>{
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // จัดการงาน
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[id="cost_center_header_name"]').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('button[id="kb_3"]').contains('3').should('be.visible').click()
        cy.get('button[id="kb_4"]').contains('4').should('be.visible').click()
        cy.get('button[id="kb_5"]').contains('5').should('be.visible').click()
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
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
        cy.scrollTo('bottom')
    })
    it('insert TEST001 Fix Costcenter',()=>{
        cy.get('div[class="home"]').eq(10).should('be.visible').click() // จัดการ Fix Costcenter
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
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="ml-1"]').eq(0).should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="ml-1"]').eq(1).should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click()
    })
    it('create new User',()=>{
        cy.scrollTo('top')
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // จัดการข้อมูลผู้ใช้
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // จัดการผู้ใช้
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click() // เพิ่มผู้ใช้
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('input[class="form-control"]').eq(1).should('be.visible').click() // รหัสพนักงาน
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('button[id="kb_3"]').contains('3').should('be.visible').click()
        cy.get('button[id="kb_4"]').contains('4').should('be.visible').click()
        cy.get('button[id="kb_5"]').contains('5').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('input[class="form-control"]').eq(2).should('be.visible').click() // RFID
        cy.get('button[id="kb_6"]').contains('6').should('be.visible').click()
        cy.get('button[id="kb_7"]').contains('7').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('input[class="form-control"]').eq(3).should('be.visible').click() // ชื่อ
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_T"]').contains('T').should('be.visible').click()
        cy.get('button[id="kb_E"]').contains('E').should('be.visible').click()
        cy.get('button[id="kb_S"]').contains('S').should('be.visible').click()
        cy.get('button[id="kb_T"]').contains('T').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('input[class="form-control"]').eq(4).should('be.visible').click() // นามสกุล
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_B"]').contains('B').should('be.visible').click()
        cy.get('button[id="kb_Y"]').contains('Y').should('be.visible').click()
        cy.get('button[id="kb_ "]').should('be.visible').click()
        cy.get('button[id="kb_M"]').contains('M').should('be.visible').click()
        cy.get('button[id="kb_A"]').contains('A').should('be.visible').click()
        cy.get('button[id="kb_X"]').contains('X').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').eq(0).should('be.visible').click() // สิทธิ์การใช้งาน
        cy.get('td[class="ant-table-cell"]').eq(0).should('be.visible').click()
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').eq(1).should('be.visible').click() // แผนก
        cy.get('td[class="ant-table-cell"]').eq(0).should('be.visible').click()
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').eq(2).should('be.visible').click() // กลุ่มการเข้าถึงสินค้า
        cy.get('td[class="ant-table-cell"]').eq(0).should('be.visible').click()
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('input[class="form-control"]').eq(5).should('be.visible').click() // Email
        cy.get('button[id="kb_t"]').contains('t').should('be.visible').click()
        cy.get('button[id="kb_e"]').contains('e').should('be.visible').click()
        cy.get('button[id="kb_s"]').contains('s').should('be.visible').click()
        cy.get('button[id="kb_t"]').contains('t').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('button[id="kb_3"]').contains('3').should('be.visible').click()
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
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').eq(3).should('be.visible').click() // ภาษา
        cy.get('td[class="ant-table-cell"]').eq(0).should('be.visible').click() // Thai
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').eq(4).should('be.visible').click() // fix costcenter
        cy.get('td[class="ant-table-cell"]').eq(0).should('be.visible').click() 
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
    })
    it('create PURIN1 product',()=>{
        cy.get('div[class="home"]').eq(3).should('be.visible').click() // จัดการข้อมูลสินค้า
        cy.get('div[class="home"]').eq(6).should('be.visible').click() // จัดการหน่วยสินค้า
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click() // เพิ่มหน่วยสินค้า
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="text-right form-control"]').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('button[id="kb_3"]').contains('3').should('be.visible').click()
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
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // สินค้า 
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[type="file"]').eq(0).should('be.visible').click()
        const filePath = '4.jpg'
        cy.get('input[type="file"]').attachFile(filePath);
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('label[class="ant-radio-button-wrapper"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.contains('รหัสสินค้า ลูกค้า').parent().find('input').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('button[id="kb_3"]').contains('3').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.scrollTo('top')
        cy.get('input[class="form-control"]').eq(2).should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_T"]').contains('T').should('be.visible').click()
        cy.get('button[id="kb_E"]').contains('E').should('be.visible').click()
        cy.get('button[id="kb_S"]').contains('S').should('be.visible').click()
        cy.get('button[id="kb_T"]').contains('T').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.scrollTo('top')
        cy.contains('บาร์โค้ด').parent().find('button').should('be.visible').click()
        cy.contains('จัดการ').parent().find('input').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').click()
        cy.contains('เพิ่ม').get('button[class="btn btn-info"]').should('be.visible').should('be.visible').click()
        cy.contains('ตกลง').parent().find('button[class="btn btn-success"]').should('be.visible').click()
        cy.wait(500)
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.contains('ชื่อที่ใช้งาน ลูกค้า').parent().find('input').should('be.visible').click()
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
        cy.contains('ขนาดช่อง').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').click()
        cy.get('input[class="form-check-input"]').eq(0).should('be.visible').click()
        cy.wait(500)
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.contains('กลุ่มสินค้า').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').click()
        cy.get('input[class="form-check-input"]').eq(0).should('be.visible').click()
        cy.wait(500)
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.contains('ประเภทสินค้า').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').click()
        cy.get('input[type="radio"]').eq(6).should('be.visible').click()
        cy.wait(500)
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.contains('แบรนด์สินค้า').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').click()
        cy.get('input[type="radio"]').eq(5).should('be.visible').click()
        cy.wait(500)
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.contains('Min').parent().find('input[class="float text-right form-control"]').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.contains('Warning').parent().find('input[class="text-right form-control"]').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.contains('ประเภทสินค้าของการเบิก').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').click()
        cy.contains('สิ้นเปลือง').get('td[class="ant-table-cell"]').eq(0).should('be.visible').click()
        cy.wait(500)
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.scrollTo('top')
        cy.get('label[class="ant-radio-button-wrapper"]').eq(1).should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.contains('ประเภทการเบิก').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').click()
        cy.contains('เบิกแบบระบุจำนวน').get('td[class="ant-table-cell"]').eq(4).should('be.visible').click()
        cy.wait(500)
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.contains('จำนวนต่อการเติม').parent().find('input[class="text-right form-control"]').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.contains('ราคา').parent().find('input[class="float text-right form-control"]').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.contains('หน่วยสินค้า').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').click()
        cy.get('td[class="ant-table-cell"]').eq(0).should('be.visible').click()
        cy.wait(500)
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('create PURIN2 product',()=>{
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click() // เพิ่มสินค้า
        cy.get('input[type="file"]').eq(0).should('be.visible').click()
        const filePath = '5.jpg'
        cy.get('input[type="file"]').attachFile(filePath);
        cy.get('label[class="ant-radio-button-wrapper"]').should('be.visible').click()
        cy.contains('รหัสสินค้า ลูกค้า').parent().find('input').should('be.visible').click()
        cy.get('button[id="kb_4"]').contains('4').should('be.visible').click()
        cy.get('button[id="kb_5"]').contains('5').should('be.visible').click()
        cy.get('button[id="kb_6"]').contains('6').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').click()
        cy.scrollTo('top')
        cy.get('input[class="form-control"]').eq(2).should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_T"]').contains('T').should('be.visible').click()
        cy.get('button[id="kb_E"]').contains('E').should('be.visible').click()
        cy.get('button[id="kb_S"]').contains('S').should('be.visible').click()
        cy.get('button[id="kb_T"]').contains('T').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').click()
        cy.scrollTo('top')
        cy.contains('บาร์โค้ด').parent().find('button').should('be.visible').click()
        cy.contains('จัดการ').parent().find('input').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').click()
        cy.contains('เพิ่ม').get('button[class="btn btn-info"]').should('be.visible').should('be.visible').click()
        cy.contains('ตกลง').parent().find('button[class="btn btn-success"]').should('be.visible').click()
        cy.wait(500)
        cy.contains('ชื่อที่ใช้งาน ลูกค้า').parent().find('input').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_P"]').contains('P').should('be.visible').click()
        cy.get('button[id="kb_U"]').contains('U').should('be.visible').click()
        cy.get('button[id="kb_R"]').contains('R').should('be.visible').click()
        cy.get('button[id="kb_I"]').contains('I').should('be.visible').click()
        cy.get('button[id="kb_N"]').contains('N').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.contains('ขนาดช่อง').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').click()
        cy.get('input[class="form-check-input"]').eq(1).should('be.visible').click()
        cy.wait(500)
        cy.contains('กลุ่มสินค้า').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').click()
        cy.get('input[class="form-check-input"]').eq(0).should('be.visible').click()
        cy.wait(500)
        cy.contains('ประเภทสินค้า').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').click()
        cy.get('input[type="radio"]').eq(5).should('be.visible').click()
        cy.wait(500)
        cy.contains('แบรนด์สินค้า').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').click()
        cy.get('input[type="radio"]').eq(4).should('be.visible').click()
        cy.wait(500)
        cy.contains('Min').parent().find('input[class="float text-right form-control"]').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').click()
        cy.contains('Warning').parent().find('input[class="text-right form-control"]').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').click()
        cy.contains('ประเภทสินค้าของการเบิก').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').click()
        cy.contains('สิ้นเปลือง').get('td[class="ant-table-cell"]').eq(0).should('be.visible').click()
        cy.wait(500)
        cy.scrollTo('top')
        cy.get('label[class="ant-radio-button-wrapper"]').eq(1).should('be.visible').click()
        cy.contains('ประเภทการเบิก').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').click()
        cy.contains('เบิกแบบกำหนดจำนวนต่อการเบิก').get('td[class="ant-table-cell"]').eq(2).should('be.visible').click()
        cy.wait(500)
        cy.get('input[class="float text-right form-control"]').eq(2).should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('input[class="text-right form-control"]').eq(1).should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').click()
        cy.contains('ราคา').parent().find('input[class="float text-right form-control"]').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.contains('หน่วยสินค้า').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').click()
        cy.get('td[class="ant-table-cell"]').eq(0).should('be.visible').click()
        cy.wait(500)
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('search Job TEST001',()=>{
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(2).should('be.visible').click() // จัดการ JOB
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
        cy.get('button[class="btn btn-info"]').should('be.visible').click()
        cy.get('input[class="form-control"]').should('be.visible').clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-info"]').should('be.visible').click()
    })
    it('insert TEST001 Job',()=>{
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click() // เพิ่มจัดการ Job
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('input[class="form-control"]').eq(0).should('be.visible').click() // ชื่อ
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_T"]').contains('T').should('be.visible').click()
        cy.get('button[id="kb_E"]').contains('E').should('be.visible').click()
        cy.get('button[id="kb_S"]').contains('S').should('be.visible').click()
        cy.get('button[id="kb_T"]').contains('T').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click() // ปิด keyboard
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('div[class="ant-picker form-control"]').eq(0).should('be.visible').click() // วันที่เริ่ม
        cy.get('div[class="card-body"]').should('be.visible').click()
        cy.get('div[class="ant-picker form-control"]').eq(1).should('be.visible').click() // วันที่สิ้นสุด
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').eq(1).should('be.visible').click() // เพิ่มสินค้า
        cy.get('input[class="form-check-input"]').eq(2).should('be.visible').click() // สินค้า 1
        cy.get('button[class="btn btn-success"]').eq(1).should('be.visible').click() // ตกลง
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('input[class="form-control"]').eq(1).should('be.visible').click() // จำนวน
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click() // ปิด keyboard
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.scrollTo('top')
        cy.get('div[class="ant-tabs-tab"]').should('be.visible').click() // แท็บผู้ใช้
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').eq(2).should('be.visible').click() // เพิ่มผู้ใช้
        cy.get('input[class="form-check-input"]').eq(4).should('be.visible').click() // admin CTO
        cy.get('button[class="btn btn-success"]').eq(1).should('be.visible').click() // ตกลง
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').click() // เลือกสิทธิ์การใช้งาน
        cy.get('td[class="ant-table-cell"]').eq(9).should('be.visible').click() // เบิกเกินได้
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
    })
    it('search found Job TEST001',()=>{
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
    it('copy Job TEST001',()=>{
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click() // เพิ่มจัดการ Job
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').eq(0).should('be.visible').click() // คัดลอก Job
        cy.get('td[class="ant-table-cell"]').eq(1).should('be.visible').click() // คัดลอก TEST001
        cy.get('button[class="btn btn-success"]').eq(1).should('be.visible').click() // ตกลง
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-danger"]').eq(1).should('be.visible').click() // ลบคัดลอก Job TEST001
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
    })
    it('check data by relation of TEST001',()=>{
        cy.get('button[class="btn btn-info"]').eq(1).should('be.visible').click() // แก้ไข
        cy.scrollTo('bottom')
        cy.wait(500)
        cy.scrollTo('top')
        cy.get('div[class="ant-tabs-tab"]').should('be.visible').click() // แท็บผู้ใช้
        cy.get('div[class="ant-tabs-tab"]').should('be.visible').click() // แท็บสินค้า
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // จัดการข้อมูลผู้ใช้
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // จัดการผู้ใช้
        cy.get('button[class="btn btn-danger"]').eq(0).should('be.visible').click() // ลบผู้ใช้ admin CTO
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.scrollTo('bottom')
        cy.get('div[class="home"]').eq(10).should('be.visible').click() // จัดการ Fix Costcenter
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.scrollTo('top')
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // จัดการงาน
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(3).should('be.visible').click() // จัดการข้อมูลสินค้า
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // สินค้า
        cy.get('div[class="overflow-auto"]').scrollTo('right') 
        cy.get('button[class="btn btn-danger"]').eq(0).should('be.visible').click() // ลบสินค้า 1
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(6).should('be.visible').click() // จัดการหน่วยสินค้า
        cy.get('button[class="btn btn-danger"]').eq(0).should('be.visible').click() // ลบหน่วยสินค้า 
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
    })
    it('update TEST001 to TEST002 & change data',()=>{
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(2).should('be.visible').click() // จัดการ JOB
        cy.get('button[class="btn btn-info"]').eq(1).should('be.visible').click() // แก้ไข
        cy.get('input[class="form-control"]').eq(0).should('be.visible').clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click() // ปิด keyboard 
        cy.get('input[class="form-control"]').eq(0).should('be.visible').click() // ชื่อ
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_T"]').contains('T').should('be.visible').click()
        cy.get('button[id="kb_E"]').contains('E').should('be.visible').click()
        cy.get('button[id="kb_S"]').contains('S').should('be.visible').click()
        cy.get('button[id="kb_T"]').contains('T').should('be.visible').click()
        cy.get('button[id="kb_shift"]').contains('shift').should('be.visible').click()
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click() // ปิด keyboard
        cy.get('button[class="btn btn-danger rounded-circle"]').should('be.visible').click()
        cy.get('div[class="ant-tabs-tab"]').should('be.visible').click() // แท็บผู้ใช้
        cy.get('button[class="btn btn-danger rounded-circle"]').should('be.visible').click()
        cy.get('div[class="ant-tabs-tab"]').should('be.visible').click() // แท็บสินค้า
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').eq(0).should('be.visible').click() // เพิ่มสินค้า
        cy.get('input[class="form-check-input"]').eq(4).should('be.visible').click() // สินค้า 2
        cy.get('button[class="btn btn-success"]').eq(1).should('be.visible').click() // ตกลง
        cy.get('input[class="form-control"]').eq(1).should('be.visible').click() // จำนวน
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click() // ปิด keyboard
        cy.get('div[class="ant-tabs-tab"]').should('be.visible').click() // แท็บผู้ใช้
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').eq(1).should('be.visible').click() // เพิ่มผู้ใช้
        cy.get('input[class="form-check-input"]').eq(5).should('be.visible').click() // TEST BY MAX
        cy.get('button[class="btn btn-success"]').eq(1).should('be.visible').click() // ตกลง
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').click() // เลือกสิทธิ์การใช้งาน
        cy.get('td[class="ant-table-cell"]').eq(10).should('be.visible').click() // เบิกเกินแบบขออนุญาติ
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
    })
    it('search not found Job TEST001',()=>{
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
    it('search found Job TEST002',()=>{
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
    it('copy Job TEST002',()=>{
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click() // เพิ่มจัดการ Job
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').eq(0).should('be.visible').click() // คัดลอก Job
        cy.get('td[class="ant-table-cell"]').eq(1).should('be.visible').click() // คัดลอก TEST002
        cy.get('button[class="btn btn-success"]').eq(1).should('be.visible').click() // ตกลง
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-danger"]').eq(1).should('be.visible').click() // ลบคัดลอก Job TEST002
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
    })
    it('check data by relation of TEST002',()=>{
        cy.get('button[class="btn btn-info"]').eq(1).should('be.visible').click() // แก้ไข
        cy.scrollTo('bottom')
        cy.wait(500)
        cy.scrollTo('top')
        cy.get('div[class="ant-tabs-tab"]').should('be.visible').click() // แท็บผู้ใช้
        cy.get('div[class="ant-tabs-tab"]').should('be.visible').click() // แท็บสินค้า
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // จัดการข้อมูลผู้ใช้
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // จัดการผู้ใช้
        cy.get('button[class="btn btn-danger"]').eq(1).should('be.visible').click() // ลบผู้ใช้ TEST BY MAX
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.scrollTo('bottom')
        cy.get('div[class="home"]').eq(10).should('be.visible').click() // จัดการ Fix Costcenter
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.scrollTo('top')
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // จัดการงาน
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(3).should('be.visible').click() // จัดการข้อมูลสินค้า
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // สินค้า
        cy.get('div[class="overflow-auto"]').scrollTo('right') 
        cy.get('button[class="btn btn-danger"]').eq(1).should('be.visible').click() // ลบสินค้า 1
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(6).should('be.visible').click() // จัดการหน่วยสินค้า
        cy.get('button[class="btn btn-danger"]').eq(0).should('be.visible').click() // ลบหน่วยสินค้า 
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
    })
    it('delete Job TEST002',()=>{
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(2).should('be.visible').click() // จัดการ JOB
        cy.get('button[class="btn btn-danger"]').should('be.visible').click() // ลบ Job TEST002
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
    })
    it('search not found Job TEST002',()=>{
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
    it('delete All Test Data',()=>{
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // จัดการข้อมูลผู้ใช้
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // จัดการผู้ใช้
        cy.get('button[class="btn btn-danger"]').eq(1).should('be.visible').click() // ลบผู้ใช้ TEST BY MAX
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(3).should('be.visible').click() // จัดการข้อมูลสินค้า
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // สินค้า
        cy.get('div[class="overflow-auto"]').scrollTo('right') 
        cy.get('button[class="btn btn-danger"]').eq(0).should('be.visible').click() // ลบสินค้า 1
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('div[class="overflow-auto"]').scrollTo('right') 
        cy.get('button[class="btn btn-danger"]').eq(0).should('be.visible').click() // ลบสินค้า 2
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(6).should('be.visible').click() // จัดการหน่วยสินค้า
        cy.get('button[class="btn btn-danger"]').eq(0).should('be.visible').click() // ลบหน่วยสินค้า
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(10).should('be.visible').click() // จัดการ Fix Costcenter
        cy.get('button[class="btn btn-danger"]').eq(0).should('be.visible').click() // ลบ Fix Cost Center
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // จัดการงาน
        cy.get('button[class="btn btn-danger"]').eq(0).should('be.visible').click() // ลบ Cost Center
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ

    })
    it('disable Manage Job',()=>{
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // จัดการข้อมูลผู้ใช้
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // จัดการสิทธิ์การใช้งาน
        cy.get('button[class="btn btn-info"]').eq(1).should('be.visible').click() // แก้ไข
        cy.scrollTo('bottom')
        cy.get('input[type="checkbox"]').eq(27).should('be.visible').click() // ปิด จัดการ Job
        cy.wait(3000)
        cy.get('input[type="checkbox"]').eq(31).should('be.visible').click() // ปิด Fix Cost Center
        cy.wait(3000)
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // เพิ่ม
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
    })
    it('test check menu by log out then log in',()=>{
        cy.get('div[class="b_logout"]').should('be.visible').click() // log out
        cy.wait(5000)
       cy.get('body').type('{1}{4}', { delay: 0 })
        cy.get('div[class="home"]').eq(5).should('be.visible').click() // ตั้งค่าขั้นสูง
        cy.log('Not found Manage Job , Fix Cost Center menu')
        cy.scrollTo('bottom')
        cy.wait(1000)
        cy.scrollTo('top')
    })
})