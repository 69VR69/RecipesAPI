export function RedirectPage({ to }: { to: string })
{
    window.location.href = to;
    return (
        <div>
            Redirecting to {to}...
        </div>
    );
}