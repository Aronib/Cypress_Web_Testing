import CheckOut from "../pages/CheckOut"
import LoginPage from "../pages/LoginPage"
import  AddToCart from '../pages/AddToCart'

describe("Check out testing", ()=>{
    const loginPage = new LoginPage
    const ckout = new CheckOut
    const addCrt = new AddToCart

    it("Proceed to chechout", ()=>{
        loginPage.userLogin("rawnak5738@gmail.com", "Aroni5588")
        addCrt.mViewCart()
        ckout.checkOut()
    })
})