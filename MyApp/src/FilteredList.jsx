import { useMemo } from "react";


function FilteredList ({ list }) {
    const FilteredList = useMemo(() => {
        return list.filter((item) => item.age >= 18);
    }, [list])

    return(
        <>
        <h1>Lista Maggiorenni</h1>
        <hr />
        <ul>
            {FilteredList.map((item) => (
                <li key={item.id}>{item.name} (Age: {item.age})</li>
            ))}
        </ul>
        </>
    )
}

export default FilteredList