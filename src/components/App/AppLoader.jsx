import App from "./App"
import { ProviderWrapper as LoginProviderWrapper } from "contexts/loginContext"
import { ProviderWrapper as CustomersProviderWrapper } from "contexts/customersContext"
import { ProviderWrapper as ProductsProviderWrapper } from "contexts/productsContext"

const AppLoader = () => {
    return (
        <CustomersProviderWrapper>
            <ProductsProviderWrapper>
                <LoginProviderWrapper>
                    <App />
                </LoginProviderWrapper>
            </ProductsProviderWrapper>
        </CustomersProviderWrapper>
    )
}

export default AppLoader