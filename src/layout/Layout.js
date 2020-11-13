import Sidebar from './Sidebar';
import styled from "styled-components";

export default function Layout ({ children, ...props}) {
    

    const WrapperApp = styled.section`
        display: grid;
        grid-template-columns: 650px 1fr;
        grid-gap: 16px;
        max-width: 60%;
        margin: 10% auto;
        `
    return (
        <WrapperApp>            
                <Sidebar />
                {children}
        </WrapperApp>
    )
}

