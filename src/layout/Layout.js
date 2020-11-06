import Sidebar from './Sidebar';
import WrapperApp from './WrapperApp';

export default function Layout ({ children, ...props}) {

    return (
        <WrapperApp>            
                <Sidebar />
                {children}
        </WrapperApp>
    )
}

