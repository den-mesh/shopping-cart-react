import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const [counters, setCounters] = useState([
        {id: 0, value: 0, name: 'Ненужная вещь'},
        {id: 1, value: 0, name: 'Ложка'},
        {id: 2, value: 0, name: 'Вилка'},
        {id: 3, value: 0, name: 'Тарелка'},
        {id: 4, value: 0, name: 'Набор минималиста'},
    ]);

    const handleDelete = (id) => {
        const newCounters = counters.filter((count) => count.id !== id)
        setCounters(newCounters)
    }

    return (
        <>
            {counters.map((count) => (
                <Counter key={count.id}
                         id={count.id}
                         value={count.value}
                         name={count.name}
                         onDelete={handleDelete}
                />
            ))}
        </>
    );
}

export default CountersList;
