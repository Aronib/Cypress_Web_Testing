import LoginPage from "../pages/LoginPage";

describe("Login Functionality Test", ()=>{

    const loginPage = new LoginPage();
    

     it.only("Tests with valid credentials", ()=>{
        
        loginPage.userLogin("rawnak5738@gmail.com", "Aroni5588")
    })

    it("Tests with valid credentials", ()=>{
        loginPage.userLogin("rawnak5738@gmail.com", "Aroni5788")
        loginPage.invalidAssertion();
        
        
    })
})