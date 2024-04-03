import { ReactNode } from 'react';

export function Button({ children, ...props }: { children: ReactNode }) : ReactNode
{
    return <button {...props}>{children}</button>;
}