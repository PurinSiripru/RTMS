describe('RTMS Product Set Test',()=>{
    it('access RTMS',()=>{
        cy.visit('http://localhost/rtms/#/')
        cy.wait(4000)
        cy.get('body').click().type('15',{delay: 10})
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(300).click()
        cy.wait(2000)
        cy.get('body').click().type('14',{delay: 10})
    })
    it('add group , unit of PURIN1',()=>{
        cy.get('div[class="home"]').eq(6).should('be.visible').wait(300).click()
        cy.get('div[class="home"]').eq(3).should('be.visible').wait(300).click()
        cy.get('div[class="home"]').eq(2).should('be.visible').wait(300).click() // กลุ่มสินค้า
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.get('input[class="form-control"]').eq(1).should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('P').should('be.visible').click()
        cy.get('button[type="button"]').contains('U').should('be.visible').click()
        cy.get('button[type="button"]').contains('R').should('be.visible').click()
        cy.get('button[type="button"]').contains('I').should('be.visible').click()
        cy.get('button[type="button"]').contains('N').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-success"]').should('be.visible').wait(300).click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.get('div[class="home"]').eq(6).should('be.visible').wait(300).click() // จัดการหน่วยสินค้า
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-success"]').should('be.visible').wait(300).click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(300).click()
        cy.get('input[class="text-right form-control"]').should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('1').should('be.visible').click()
        cy.get('button[type="button"]').contains('2').should('be.visible').click()
        cy.get('button[type="button"]').contains('3').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-success"]').should('be.visible').wait(300).click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(300).click()
        cy.get('input[class="form-control"]').eq(1).should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('P').should('be.visible').click()
        cy.get('button[type="button"]').contains('U').should('be.visible').click()
        cy.get('button[type="button"]').contains('R').should('be.visible').click()
        cy.get('button[type="button"]').contains('I').should('be.visible').click()
        cy.get('button[type="button"]').contains('N').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-success"]').should('be.visible').wait(300).click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.get('div[class="home"]').eq(6).should('be.visible').wait(300).click() // จัดการหน่วยสินค้า
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-success"]').should('be.visible').wait(300).click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(300).click()
        cy.get('input[class="text-right form-control"]').should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('4').should('be.visible').click()
        cy.get('button[type="button"]').contains('5').should('be.visible').click()
        cy.get('button[type="button"]').contains('6').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-success"]').should('be.visible').wait(300).click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(300).click()
        cy.get('input[class="form-control"]').eq(1).should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('P').should('be.visible').click()
        cy.get('button[type="button"]').contains('U').should('be.visible').click()
        cy.get('button[type="button"]').contains('R').should('be.visible').click()
        cy.get('button[type="button"]').contains('I').should('be.visible').click()
        cy.get('button[type="button"]').contains('N').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('2').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-success"]').should('be.visible').wait(300).click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').wait(300).click()
    })
    it('add PURIN1 , test validation',()=>{
        cy.get('div[class="home"]').eq(0).should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click()
        cy.wait(300)
        cy.get('input[type="file"]').should('be.visible').wait(300).click()
        cy.wait(300)
        const filePath = '6.jpg'
        cy.get('input[type="file"]').attachFile(filePath);
        cy.get('label[class="ant-radio-button-wrapper"]').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.contains('รหัสสินค้า ลูกค้า').parent().find('input').should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('1').should('be.visible').click()
        cy.get('button[type="button"]').contains('2').should('be.visible').click()
        cy.get('button[type="button"]').contains('3').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.scrollTo('top')
        cy.get('input[class="form-control"]').eq(2).should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('+').should('be.visible').click()
        cy.get('button[type="button"]').contains('_').should('be.visible').click()
        cy.get('button[type="button"]').contains('_').should('be.visible').click()
        cy.get('button[type="button"]').contains('+').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.scrollTo('top')
        cy.contains('บาร์โค้ด').parent().find('button').should('be.visible').wait(300).click()
        cy.contains('จัดการ').parent().find('input').should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('7').should('be.visible').click()
        cy.get('button[type="button"]').contains('7').should('be.visible').click()
        cy.get('button[type="button"]').contains('7').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').wait(300).click()
        cy.contains('เพิ่ม').get('button[class="btn btn-info"]').should('be.visible').should('be.visible').wait(300).click()
        cy.contains('ตกลง').parent().find('button[class="btn btn-success"]').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.contains('ชื่อที่ใช้งาน ลูกค้า').parent().find('input').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('P').should('be.visible').click()
        cy.get('button[type="button"]').contains('U').should('be.visible').click()
        cy.get('button[type="button"]').contains('R').should('be.visible').click()
        cy.get('button[type="button"]').contains('I').should('be.visible').click()
        cy.get('button[type="button"]').contains('N').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.contains('ขนาดช่อง').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.get('input[class="form-check-input"]').eq(3).should('be.visible').click()
        cy.wait(300)
        cy.contains('กลุ่มสินค้า').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.get('input[class="form-check-input"]').eq(1).should('be.visible').click()
        cy.wait(300)
        cy.contains('ประเภทสินค้า').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.get('input[type="radio"]').eq(6).should('be.visible').click()
        cy.wait(300)
        cy.contains('แบรนด์สินค้า').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.get('input[type="radio"]').eq(5).should('be.visible').click()
        cy.wait(300)
        cy.contains('Min').parent().find('input[class="float text-right form-control"]').should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('9').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.contains('Warning').parent().find('input[class="text-right form-control"]').should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('9').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.contains('ประเภทสินค้าของการเบิก').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.contains('สิ้นเปลือง').get('td[class="ant-table-cell"]').eq(0).should('be.visible').wait(300).click()
        cy.wait(300)
        cy.scrollTo('top')
        cy.get('label[class="ant-radio-button-wrapper"]').eq(1).should('be.visible').wait(300).click()
        cy.wait(300)
        cy.contains('ประเภทการเบิก').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.contains('เบิกแบบระบุจำนวน').get('td[class="ant-table-cell"]').eq(4).should('be.visible').wait(300).click()
        cy.wait(300)
        cy.contains('จำนวนต่อการเติม').parent().find('input[class="text-right form-control"]').should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('9').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.contains('ราคา').parent().find('input[class="float text-right form-control"]').should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('9').should('be.visible').click()
        cy.get('button[type="button"]').contains('9').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.contains('หน่วยสินค้า').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.get('td[class="ant-table-cell"]').eq(0).should('be.visible').wait(300).click()
        cy.wait(300)
        cy.get('button[class="btn btn-success"]').should('be.visible').wait(300).click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').wait(300).click()
    })
    it('add PURIN2 product',()=>{
        cy.get('div[class="home"]').eq(0).should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click()
        cy.wait(300)
        cy.get('input[type="file"]').should('be.visible').wait(300).click()
        cy.wait(300)
        const filePath = '5.jpg'
        cy.get('input[type="file"]').attachFile(filePath);
        cy.get('label[class="ant-radio-button-wrapper"]').should('be.visible').wait(300).click()
        cy.contains('รหัสสินค้า ลูกค้า').parent().find('input').should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('4').should('be.visible').click()
        cy.get('button[type="button"]').contains('5').should('be.visible').click()
        cy.get('button[type="button"]').contains('6').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.scrollTo('top')
        cy.get('input[class="form-control"]').eq(2).should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('_').should('be.visible').click()
        cy.get('button[type="button"]').contains('_').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.scrollTo('top')
        cy.contains('บาร์โค้ด').parent().find('button').should('be.visible').wait(300).click()
        cy.contains('จัดการ').parent().find('input').should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('9').should('be.visible').click()
        cy.get('button[type="button"]').contains('9').should('be.visible').click()
        cy.get('button[type="button"]').contains('9').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').wait(300).click()
        cy.contains('เพิ่ม').get('button[class="btn btn-info"]').should('be.visible').should('be.visible').wait(300).click()
        cy.contains('ตกลง').parent().find('button[class="btn btn-success"]').should('be.visible').wait(300).click()
        cy.contains('ชื่อที่ใช้งาน ลูกค้า').parent().find('input').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('P').should('be.visible').click()
        cy.get('button[type="button"]').contains('U').should('be.visible').click()
        cy.get('button[type="button"]').contains('R').should('be.visible').click()
        cy.get('button[type="button"]').contains('I').should('be.visible').click()
        cy.get('button[type="button"]').contains('N').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('2').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.contains('ขนาดช่อง').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.get('input[class="form-check-input"]').eq(4).should('be.visible').click()
        cy.wait(300)
        cy.contains('กลุ่มสินค้า').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.get('input[class="form-check-input"]').eq(0).should('be.visible').click()
        cy.wait(300)
        cy.contains('ประเภทสินค้า').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.get('input[type="radio"]').eq(5).should('be.visible').click()
        cy.wait(300)
        cy.contains('แบรนด์สินค้า').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.get('input[type="radio"]').eq(4).should('be.visible').click()
        cy.wait(300)
        cy.contains('Min').parent().find('input[class="float text-right form-control"]').should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('7').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').wait(300).click()
        cy.contains('Warning').parent().find('input[class="text-right form-control"]').eq(0).should('be.visible').wait(300).click()
        cy.wait(300)
        cy.get('button[type="button"]').contains('7').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.contains('ประเภทสินค้าของการเบิก').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.contains('สิ้นเปลือง').get('td[class="ant-table-cell"]').eq(0).should('be.visible').wait(300).click()
        cy.wait(300)
        cy.scrollTo('top')
        cy.get('label[class="ant-radio-button-wrapper"]').eq(1).should('be.visible').wait(300).click()
        cy.wait(300)
        cy.contains('ประเภทการเบิก').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.contains('เบิกแบบกำหนดจำนวนต่อการเบิก').get('td[class="ant-table-cell"]').eq(2).should('be.visible').wait(300).click()
        cy.wait(300)
        cy.get('input[class="float text-right form-control"]').eq(2).should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('backspace').should('be.visible').click()
        cy.get('button[type="button"]').contains('7').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.get('input[class="text-right form-control"]').eq(1).should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('backspace').should('be.visible').click()
        cy.get('button[type="button"]').contains('7').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.contains('ราคา').parent().find('input[class="float text-right form-control"]').should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('backspace').should('be.visible').click()
        cy.get('button[type="button"]').contains('backspace').should('be.visible').click()
        cy.get('button[type="button"]').contains('backspace').should('be.visible').click()
        cy.get('button[type="button"]').contains('backspace').should('be.visible').click()
        cy.get('button[type="button"]').contains('backspace').should('be.visible').click()
        cy.get('button[type="button"]').contains('7').should('be.visible').click()
        cy.get('button[type="button"]').contains('7').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').should('be.visible').wait(300).click()
        cy.wait(300)
        cy.contains('หน่วยสินค้า').parent().find('button[class="d-flex align-items-center w-100 border-secondary bg-white btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.get('td[class="ant-table-cell"]').eq(2).should('be.visible').wait(300).click()
        cy.wait(300)
        cy.get('button[class="btn btn-success"]').should('be.visible').wait(300).click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').wait(300).click()
    })
    it('search TEST001 product set',()=>{
        cy.get('div[class="home"]').eq(5).should('be.visible').wait(300).click()
        cy.get('input[class="form-control"]').should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('E').should('be.visible').click()
        cy.get('button[type="button"]').contains('S').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-info"]').should('be.visible').wait(300).click()
        cy.get('input[class="form-control"]').should('be.visible').wait(300).clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-info"]').should('be.visible').wait(300).click()
    })
    it('insert TEST001 product set',()=>{
        cy.get('button[class="btn btn-success float-right btn btn-secondary"]').should('be.visible').click()
        cy.get('label[class="btn btn-secondary"]').should('be.visible').click()
        const filePath = '4.jpg'
        cy.get('input[type="file"]').attachFile(filePath);
        cy.scrollTo('top')
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.contains('ชื่อชุดสินค้า').parent().find('input[class="form-control"]').should('be.visible').click()
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
        cy.contains('Barcode ชุดสินค้า').parent().find('input[class="form-control"]').should('be.visible').click()
        cy.get('button[type="button"]').contains('1').should('be.visible').click()
        cy.get('button[type="button"]').contains('2').should('be.visible').click()
        cy.get('button[type="button"]').contains('3').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.scrollTo('top')
        cy.get('i[class="fas fa-tasks text-white bg-info p-2 text-center rounded"]').should('be.visible').click()
        cy.get('input[class="form-check-input"]').eq(2).should('be.visible').click()
        cy.get('button[class="btn btn-success"]').eq(1).should('be.visible').click()
        cy.get('input[class="text-right form-control"]').should('be.visible').click()
        cy.get('button[type="button"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('search found TEST001 ',()=>{
        cy.get('input[class="form-control"]').should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('E').should('be.visible').click()
        cy.get('button[type="button"]').contains('S').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').wait(300).click()
        cy.get('input[class="form-control"]').should('be.visible').wait(300).clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').wait(300).click()
    })
    it('check TEST001 product set',()=>{
        cy.get('button[class="btn btn-info"]').eq(1).should('be.visible').click()
        cy.scrollTo('bottom')
        cy.wait(2000)
        cy.scrollTo('top')
        cy.wait(2000)
        cy.get('a[class="btn btn-secondary d-flex"]').should('be.visible').click()
    })
    it('update TEST001 to TEST002',()=>{
        cy.get('button[class="btn btn-info"]').eq(1).should('be.visible').click()
        cy.get('label[class="btn btn-secondary"]').should('be.visible').click()
        const filePath = '9preh2.jpg'
        cy.get('input[type="file"]').attachFile(filePath);
        cy.scrollTo('top')
        cy.contains('ชื่อชุดสินค้า').parent().find('input[class="form-control"]').should('be.visible').clear()
        cy.contains('ชื่อชุดสินค้า').parent().find('input[class="form-control"]').should('be.visible').click()
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
        cy.contains('Barcode ชุดสินค้า').parent().find('input[class="form-control"]').should('be.visible').clear()
        cy.contains('Barcode ชุดสินค้า').parent().find('input[class="form-control"]').should('be.visible').click()
        cy.get('button[type="button"]').contains('4').should('be.visible').click()
        cy.get('button[type="button"]').contains('5').should('be.visible').click()
        cy.get('button[type="button"]').contains('6').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.scrollTo('top')
        cy.get('button[class="btn btn-danger rounded-circle"]').should('be.visible').click()
        cy.get('i[class="fas fa-tasks text-white bg-info p-2 text-center rounded"]').should('be.visible').click()
        cy.get('input[class="form-check-input"]').eq(3).should('be.visible').click()
        cy.get('button[class="btn btn-success"]').eq(1).should('be.visible').click()
        cy.get('input[class="text-right form-control"]').should('be.visible').click()
        cy.get('button[type="button"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').click()
        cy.get('button[class="btn btn-success"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('search not found TEST001 ',()=>{
        cy.get('input[class="form-control"]').should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('E').should('be.visible').click()
        cy.get('button[type="button"]').contains('S').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('1').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').wait(300).click()
        cy.get('input[class="form-control"]').should('be.visible').wait(300).clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').wait(300).click()
    })
    it('search found TEST002 ',()=>{
        cy.get('input[class="form-control"]').should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('E').should('be.visible').click()
        cy.get('button[type="button"]').contains('S').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('2').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').wait(300).click()
        cy.get('input[class="form-control"]').should('be.visible').wait(300).clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').wait(300).click()
    })
    it('check TEST002 product set',()=>{
        cy.get('button[class="btn btn-info"]').eq(1).should('be.visible').click()
        cy.scrollTo('bottom')
        cy.wait(2000)
        cy.scrollTo('top')
        cy.wait(2000)
        cy.get('a[class="btn btn-secondary d-flex"]').should('be.visible').click()
    })
    it('delete TEST002 product set',()=>{
        cy.get('button[class="btn btn-danger"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.wait(300)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it('search not found TEST002 ',()=>{
        cy.get('input[class="form-control"]').should('be.visible').wait(300).click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('E').should('be.visible').click()
        cy.get('button[type="button"]').contains('S').should('be.visible').click()
        cy.get('button[type="button"]').contains('T').should('be.visible').click()
        cy.get('button[type="button"]').contains('shift').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('0').should('be.visible').click()
        cy.get('button[type="button"]').contains('2').should('be.visible').click()
        cy.get('i[class="fa fa-times"]').should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').wait(300).click()
        cy.get('input[class="form-control"]').should('be.visible').wait(300).clear()
        cy.get('i[class="fa fa-times"]').should('be.visible').wait(300).click()
        cy.get('button[class="btn btn-info"]').eq(0).should('be.visible').wait(300).click()
    })
    it('test relation delete',()=>{
        cy.get('button[class="btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.get('div[class="home"]').eq(2).should('be.visible').wait(300).click() // กลุ่มสินค้า
        cy.get('button[class="btn btn-danger"]').eq(1).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.wait(300)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.get('div[class="home"]').eq(6).should('be.visible').wait(300).click() // หน่วยสินค้า
        cy.get('button[class="btn btn-danger"]').eq(0).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.wait(300)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-danger"]').eq(1).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.wait(300)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').wait(300).click()
    })
    it('delete product,group,unit of PURIN1,2',()=>{
        cy.get('div[class="home"]').eq(0).should('be.visible').wait(300).click() // สินค้า
        cy.get('div[class="overflow-auto"]').scrollTo('right')
        cy.get('button[class="btn btn-danger"]').eq(0).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.wait(300)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('div[class="overflow-auto"]').scrollTo('left')
        cy.get('div[class="overflow-auto"]').scrollTo('right')
        cy.get('button[class="btn btn-danger"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.wait(300)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('div[class="overflow-auto"]').scrollTo('left')
        cy.get('button[class="btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.get('div[class="home"]').eq(2).should('be.visible').wait(300).click() // กลุ่มสินค้า
        cy.get('button[class="btn btn-danger"]').eq(1).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.wait(300)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').wait(300).click()
        cy.get('div[class="home"]').eq(6).should('be.visible').wait(300).click() // หน่วยสินค้า
        cy.get('button[class="btn btn-danger"]').eq(0).should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.wait(300)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-danger"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.wait(300)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('button[class="btn btn-secondary"]').should('be.visible').wait(300).click()
    })
})