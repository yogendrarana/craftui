import { SessionProvider } from 'next-auth/react';

interface IAuthSessionProvider {
    children: React.ReactNode
}

const AuthSessionProvider = (props: IAuthSessionProvider) => {
    return (
        <SessionProvider>{props.children}</SessionProvider>
    )
}

export default AuthSessionProvider;