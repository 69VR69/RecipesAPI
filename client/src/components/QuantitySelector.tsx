export function QuantitySelector({ nbPersons, setNbPersons }: { nbPersons: number, setNbPersons: (nbPersons: number) => void }) {

    function increment() {
        setNbPersons(nbPersons + 1);
    }

    function decrement() {
        setNbPersons(nbPersons - 1);
    }

    return (
        <>
            <button onClick={decrement}>-</button>
            <span>{nbPersons} personnes</span>
            <button onClick={increment}>+</button>
        </>
    );
}