const expect = require('chai').expect
const EC = protractor.ExpectedConditions

describe('First', function(){
    it('Enter Login', async function(){
        const login = "VolodymyrTS"
 
        const searchInpLoginSelector = '#all > div > form > div:nth-child(1) > input'
        const searchInpLogin = $(searchInpLoginSelector)
    
        await browser.get('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php')

        await browser.wait(EC.visibilityOf(searchInpLogin), 25000, 'Search input Login not found')
        await searchInpLogin.sendKeys(login)
        await browser.sleep(2 * 1000)
    })
    it('Enter Password', async function(){
        const pswrd = "123456"
        
        const searchInpPSWRDSelector = '#all > div > form > div:nth-child(2) > input'
        const searchInpPSWRD = $(searchInpPSWRDSelector)
        
        await browser.wait(EC.visibilityOf(searchInpPSWRD), 25000, 'Search input Password not found')


        await searchInpPSWRD.sendKeys(pswrd)
       
        await browser.sleep(2 * 1000)
       
        
    })
    it('Click login button', async function(){
    
        const searchButtonSelector = '#all > div > form > div:nth-child(3) > input'
        const searchButton = $(searchButtonSelector)

        await searchButton.click()
        
        await browser.sleep(2 * 1000)
    })

    it('Is login corect?', async function(){
        const assert = require('assert');
        const messageErr = 'No account found with that username'
        const ErrMessageSelector =  '#all > div > form > div.form-group.has-error > span'
        const ErrMessage = $(ErrMessageSelector)
        
        await browser.wait(EC.visibilityOf(ErrMessage), 500, 'not error message')
        
        const ErrMessageValue = await ErrMessage.getText()
        assert.fail(messageErr == ErrMessageValue, 'Fail because of unsuccessful login');

        await browser.sleep(20 * 1000)
       
    })

})