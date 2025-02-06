describe('RTMS Add Product Test',()=>{
    it('search PURIN1 at Fill Product',()=>{
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // เติมสินค้า
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
        cy.get('input[class="form-control"]').should('be.visible').clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
    })
    it('add PURIN1 , test validation',()=>{
        cy.wait(2000)
        cy.get('div[class="home"]').eq(5).should('be.visible').click() // ตั้งค่าขั้นสูง
        cy.get('div[class="home"]').eq(2).should('be.visible').click() // จัดการข้อมูลสินค้า
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
        const filePath = '5.jpg'
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
        cy.get('input[class="form-check-input"]').eq(1).should('be.visible').click()
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
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.contains('Warning').parent().find('input[class="text-right form-control"]').should('be.visible').click()
        cy.get('button[id="kb_1"]').contains('1').should('be.visible').click()
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
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
        cy.get('button[id="kb_5"]').contains('5').should('be.visible').click()
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
    it('choose Product Slot PURIN1',()=>{
        cy.get('button[class="btn btn-info"]').eq(1).should('be.visible').click() // จองช่อง
        cy.get('td[style="height: 60px; background: rgb(255, 255, 255); color: rgb(189, 190, 192);"]').eq(48).should('be.visible').click()
        cy.get('td[style="height: 30px; background: rgb(255, 255, 255); color: rgb(189, 190, 192);"]').eq(48).should('be.visible').click()
        cy.get('td[style="height: 60px; background: rgb(255, 255, 255); color: rgb(189, 190, 192);"]').eq(48).should('be.visible').click()
        cy.get('td[style="height: 30px; background: rgb(255, 255, 255); color: rgb(189, 190, 192);"]').eq(48).should('be.visible').click()
        cy.get('td[style="height: 60px; background: rgb(255, 255, 255); color: rgb(189, 190, 192);"]').eq(48).should('be.visible').click()
        cy.get('td[style="height: 30px; background: rgb(255, 255, 255); color: rgb(189, 190, 192);"]').eq(48).should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').eq(0).should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
    })
    it('add group access product PURIN1',()=>{
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // จัดการข้อมูลผู้ใช้
        cy.get('div[class="home"]').eq(3).should('be.visible').click() // จัดการกลุ่มการเข้าถึงสินค้า
        cy.get('button[class="btn btn-info"]').eq(1).should('be.visible').click() // เพิ่มกลุ่มเบิกสินค้า ที่ All Item
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click() // เพิ่มสินค้า
        cy.get('input[class="form-check-input"]').eq(2).should('be.visible').click() // เลือกสินค้า 1
        cy.get('button[class="btn btn-success"]').eq(2).should('be.visible').click() // ตกลง
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-success"]').eq(1).should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-info"]').eq(2).should('be.visible').click() // เพิ่มกลุ่มเติมสินค้า ที่ All Item
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click() // เพิ่มสินค้า
        cy.get('input[class="form-check-input"]').eq(2).should('be.visible').click() // เลือกสินค้า 1
        cy.get('button[class="btn btn-success"]').eq(2).should('be.visible').click() // ตกลง
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-success"]').eq(1).should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
    })
    it('search found PURIN1 at Fill Product',()=>{
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // เติมสินค้า
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
        cy.get('input[class="form-control"]').should('be.visible').clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
    })
    it('Fill PURIN1 Product',()=>{
        cy.get('img[class="product-list-img"]').should('be.visible').click() // คลิกเติมสินค้า
        cy.get('button[class="btn btn-info btn btn-secondary"]').should('be.visible').click() // ระบุจำนวนสินค้าที่จะเติม
        cy.get('button[id="kb_5"]').contains('5').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // ยืนยัน
    })
    it('Choose Slot by Manual PURIN1',()=>{
        cy.get('button[class="btn   btn btn-secondary"]').eq(0).should('be.visible').click() // เลือกช่องเอง
        cy.get('tr').contains('SC001-01-01').eq(0).scrollIntoView().should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // ตกลง
        cy.wait(5000)
        cy.get('button[class="btn btn-danger"]').should('be.visible').click() // ปิด
    })
    it('Choose Slot by Auto PURIN1',()=>{
        cy.get('img[class="product-list-img"]').should('be.visible').click() // คลิกเติมสินค้า
        cy.get('button[class="btn btn-info btn btn-secondary"]').should('be.visible').click() // ระบุจำนวนสินค้าที่จะเติม
        cy.get('button[id="kb_5"]').contains('5').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // ยืนยัน
        cy.get('button[class="btn   btn btn-secondary"]').eq(1).should('be.visible').click() // เลือกช่องอัตโนมัติ
        cy.get('button[class="btn btn-danger"]').should('be.visible').click() // ปิด
    })
    it('check logs report PURIN1 Product',()=>{
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(4).should('be.visible').click() // รายงาน
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // รายงานการเติมสินค้า
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
        cy.get('button[class="btn btn-primary"]').eq(0).should('be.visible').click() // ค้นหา
        cy.wait(1000)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
    })
    it('search PURIN2 at Fill Product',()=>{
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // เติมสินค้า
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
        cy.get('input[class="form-control"]').should('be.visible').clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
    })
    it('add PURIN2 product',()=>{
        cy.get('div[class="home"]').eq(5).should('be.visible').click() // ตั้งค่าขั้นสูง
        cy.get('div[class="home"]').eq(2).should('be.visible').click() // จัดการข้อมูลสินค้า
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // สินค้า
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click() // เพิ่มสินค้า
        cy.get('input[type="file"]').eq(0).should('be.visible').click()
        const filePath = '6.jpg'
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
        cy.get('input[class="form-check-input"]').eq(0).should('be.visible').click()
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
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').click()
        cy.contains('Warning').parent().find('input[class="text-right form-control"]').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('button[id="kb_0"]').contains('0').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').click()
        cy.contains('ประเภทสินค้าของการเบิก').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').click()
        cy.contains('สิ้นเปลือง').get('td[class="ant-table-cell"]').eq(0).should('be.visible').click()
        cy.wait(500)
        cy.scrollTo('top')
        cy.get('label[class="ant-radio-button-wrapper"]').eq(1).should('be.visible').click()
        cy.contains('ประเภทการเบิก').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').click()
        cy.contains('เบิกแบบระบุจำนวน').get('td[class="ant-table-cell"]').eq(4).should('be.visible').click()
        cy.wait(500)
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.contains('จำนวนต่อการเติม').parent().find('input[class="text-right form-control"]').should('be.visible').click()
        cy.get('button[id="kb_7"]').contains('7').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.contains('ราคา').parent().find('input[class="float text-right form-control"]').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.get('button[id="kb_2"]').contains('2').should('be.visible').click()
        cy.contains('หน่วยสินค้า').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').click()
        cy.get('td[class="ant-table-cell"]').eq(0).should('be.visible').click()
        cy.wait(500)
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('choose Product Slot PURIN2',()=>{
        cy.get('button[class="btn btn-info"]').eq(5).should('be.visible').click() // จองช่อง
        cy.get('td[style="height: 60px; background: rgb(255, 255, 255); color: rgb(189, 190, 192);"]').eq(49).should('be.visible').click()
        cy.get('td[style="height: 30px; background: rgb(255, 255, 255); color: rgb(189, 190, 192);"]').eq(49).should('be.visible').click()
        cy.get('td[style="height: 60px; background: rgb(255, 255, 255); color: rgb(189, 190, 192);"]').eq(49).should('be.visible').click()
        cy.get('td[style="height: 30px; background: rgb(255, 255, 255); color: rgb(189, 190, 192);"]').eq(49).should('be.visible').click()
        cy.get('td[style="height: 60px; background: rgb(255, 255, 255); color: rgb(189, 190, 192);"]').eq(49).should('be.visible').click()
        cy.get('td[style="height: 30px; background: rgb(255, 255, 255); color: rgb(189, 190, 192);"]').eq(49).should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').eq(0).should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
    })
    it('add group access product PURIN2',()=>{
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // จัดการข้อมูลผู้ใช้
        cy.get('div[class="home"]').eq(3).should('be.visible').click() // จัดการกลุ่มการเข้าถึงสินค้า
        cy.get('button[class="btn btn-info"]').eq(1).should('be.visible').click() // เพิ่มกลุ่มเบิกสินค้า ที่ All Item
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click() // เพิ่มสินค้า
        cy.get('input[class="form-check-input"]').eq(4).should('be.visible').click() // เลือกสินค้า 2
        cy.get('button[class="btn btn-success"]').eq(2).should('be.visible').click() // ตกลง
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-success"]').eq(1).should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-info"]').eq(2).should('be.visible').click() // เพิ่มกลุ่มเติมสินค้า ที่ All Item
        cy.get('button[class="btn btn-success"]').eq(0).should('be.visible').click() // เพิ่มสินค้า
        cy.get('input[class="form-check-input"]').eq(4).should('be.visible').click() // เลือกสินค้า 2
        cy.get('button[class="btn btn-success"]').eq(2).should('be.visible').click() // ตกลง
        cy.scrollTo('bottom')
        cy.get('button[class="btn btn-success"]').eq(1).should('be.visible').click() // บันทึก
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
    })
    it('search found PURIN2 at Fill Product',()=>{
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // เติมสินค้า
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
        cy.get('input[class="form-control"]').should('be.visible').clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
    })
    it('Fill PURIN2 Product',()=>{
        cy.get('img[class="product-list-img"]').eq(1).should('be.visible').click() // คลิกเติมสินค้า 2
        cy.get('button[class="btn btn-info btn btn-secondary"]').should('be.visible').click() // ระบุจำนวนสินค้าที่จะเติม
        cy.get('button[id="kb_7"]').contains('7').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // ยืนยัน
    })
    it('Choose Slot by Manual PURIN2',()=>{
        cy.get('button[class="btn   btn btn-secondary"]').eq(0).should('be.visible').click() // เลือกช่องเอง
        cy.get('tr').contains('SC001-01-05').eq(0).scrollIntoView().should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // ตกลง
        cy.wait(5000)
        cy.get('button[class="btn btn-danger"]').should('be.visible').click() // ปิด
    })
    it('Choose Slot by Auto PURIN2',()=>{
        cy.get('img[class="product-list-img"]').eq(1).should('be.visible').click() // คลิกเติมสินค้า 2
        cy.get('button[class="btn btn-info btn btn-secondary"]').should('be.visible').click() // ระบุจำนวนสินค้าที่จะเติม
        cy.get('button[id="kb_7"]').contains('7').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // ยืนยัน
        cy.get('button[class="btn   btn btn-secondary"]').eq(1).should('be.visible').click() // เลือกช่องอัตโนมัติ
        cy.get('button[class="btn btn-danger"]').should('be.visible').click() // ปิด
    })
    it('check logs report PURIN2 Product',()=>{
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(4).should('be.visible').click() // รายงาน
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // รายงานการเติมสินค้า
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
        cy.get('button[class="btn btn-primary"]').eq(0).should('be.visible').click() // ค้นหา
        cy.wait(1000)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
    })
    it('take PURIN1 product from Take Product',()=>{
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // เบิกสินค้า
        cy.get('h5[style="background-color: rgb(4, 87, 162);"]').eq(0).should('be.visible').click() // ค้นหา
        cy.get('img[class="product-list-img"]').eq(0).should('be.visible').click() // คลิกเบิกสินค้า 1
        cy.get('button[class="btn btn-info btn btn-secondary"]').should('be.visible').click() // ระบุจำนวนสินค้าที่จะเบิก
        cy.get('input[class="form-control"]').eq(1).should('be.visible').click()
        cy.get('button[id="kb_5"]').contains('5').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // ยืนยัน
        cy.get('button[class="btn btn btn-success"]').eq(0).should('be.visible').click() // เบิก
        cy.wait(2000)
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // ใช่
        cy.get('button[class="btn btn-danger"]').should('be.visible').click() // ปิด
        cy.wait(4000)
        cy.get('body').type('{1}{4}', { delay: 0 })
        cy.wait(2000)
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // เบิกสินค้า
        cy.get('h5[style="background-color: rgb(4, 87, 162);"]').eq(0).should('be.visible').click() // ค้นหา
        cy.get('img[class="product-list-img"]').eq(0).should('be.visible').click() // คลิกเบิกสินค้า 1
        cy.get('button[class="btn btn-info btn btn-secondary"]').should('be.visible').click() // ระบุจำนวนสินค้าที่จะเบิก
        cy.get('input[class="form-control"]').eq(1).should('be.visible').click()
        cy.get('button[id="kb_5"]').contains('5').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // ยืนยัน
        cy.get('button[class="btn btn btn-success"]').eq(0).should('be.visible').click() // เบิก
        cy.wait(2000)
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // ใช่
        cy.get('button[class="btn btn-danger"]').should('be.visible').click() // ปิด
        cy.wait(4000)
        cy.get('body').type('{1}{4}', { delay: 0 })
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // เบิกสินค้า
        cy.get('h5[style="background-color: rgb(4, 87, 162);"]').eq(0).should('be.visible').click() // ค้นหา
        cy.get('img[class="product-list-img"]').eq(0).should('be.visible').click() // คลิกเบิกสินค้า 1
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
    })
    it('check logs report take product of PURIN1',()=>{
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(4).should('be.visible').click() // รายงาน
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // รายงานการเติมสินค้า
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
        cy.get('button[class="btn btn-primary"]').eq(0).should('be.visible').click() // ค้นหา
        cy.wait(1000)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
    })
    it('take PURIN2 product from Take Product',()=>{
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // เบิกสินค้า
        cy.get('h5[style="background-color: rgb(4, 87, 162);"]').eq(0).should('be.visible').click() // ค้นหา
        cy.get('img[class="product-list-img"]').eq(1).should('be.visible').click() // คลิกเบิกสินค้า 2
        cy.get('button[class="btn btn-info btn btn-secondary"]').should('be.visible').click() // ระบุจำนวนสินค้าที่จะเบิก
        cy.get('input[class="form-control"]').eq(1).should('be.visible').click()
        cy.get('button[id="kb_7"]').contains('7').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // ยืนยัน
        cy.get('button[class="btn btn btn-success"]').eq(0).should('be.visible').click() // เบิก
        cy.wait(2000)
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // ใช่
        cy.get('button[class="btn btn-danger"]').should('be.visible').click() // ปิด
        cy.wait(4000)
        cy.get('body').type('{1}{4}', { delay: 0 })
        cy.wait(2000)
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // เบิกสินค้า
        cy.get('h5[style="background-color: rgb(4, 87, 162);"]').eq(0).should('be.visible').click() // ค้นหา
        cy.get('img[class="product-list-img"]').eq(1).should('be.visible').click() // คลิกเบิกสินค้า 2
        cy.get('button[class="btn btn-info btn btn-secondary"]').should('be.visible').click() // ระบุจำนวนสินค้าที่จะเบิก
        cy.get('input[class="form-control"]').eq(1).should('be.visible').click()
        cy.get('button[id="kb_7"]').contains('7').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // ยืนยัน
        cy.get('button[class="btn btn btn-success"]').eq(0).should('be.visible').click() // เบิก
        cy.wait(2000)
        cy.get('button[class="btn btn-success"]').should('be.visible').click() // ใช่
        cy.get('button[class="btn btn-danger"]').should('be.visible').click() // ปิด
        cy.wait(4000)
        cy.get('body').type('{1}{4}', { delay: 0 })
        cy.get('div[class="home"]').eq(0).should('be.visible').click() // เบิกสินค้า
        cy.get('h5[style="background-color: rgb(4, 87, 162);"]').eq(0).should('be.visible').click() // ค้นหา
        cy.get('img[class="product-list-img"]').eq(1).should('be.visible').click() // คลิกเบิกสินค้า 2
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click() // OK
    })
    it('check logs report take product of PURIN2',()=>{
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.get('div[class="home"]').eq(4).should('be.visible').click() // รายงาน
        cy.get('div[class="home"]').eq(1).should('be.visible').click() // รายงานการเติมสินค้า
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
        cy.get('button[class="btn btn-primary"]').eq(0).should('be.visible').click() // ค้นหา
        cy.wait(1000)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
        cy.wait(500)
        cy.get('button[class="btn btn-secondary"]').should('be.visible').click() // ย้อนกลับ
    })
})