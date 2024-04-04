import { ReactNode } from 'react';

export function Button({ children, ...props }: { children: ReactNode }): ReactNode {
    return <button {...props}>{children}</button>;
}

export function ButtonRedirect({ path, children }: { path: string, children: ReactNode }): ReactNode {
    return <button onClick={() => window.location.href = path}>{children}</button>;
}