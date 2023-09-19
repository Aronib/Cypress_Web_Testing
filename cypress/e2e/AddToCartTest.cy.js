import AddToCart from "../pages/AddToCart"
import LoginPage from "../pages/LoginPage"

describe("Add products to the cart", ()=>{
    
    const loginPage = new LoginPage
    const addToCart = new AddToCart
    
    beforeEach(()=>{
        loginPage.userLogin("rawnak5738@gmail.com", "Aroni5588")
    })

    it("Add products to the cart", ()=>{
        //loginPage.userLogin("rawnak5738@gmail.com", "Aroni5588")
        addToCart.mAddToCart()

    })

    it.only("Add products to the cart", ()=>{
        //loginPage.userLogin("rawnak5738@gmail.com", "Aroni5588")
        addToCart.mViewCart()

    })
})