import React from "react"

interface FilterInputProps {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  startTransition: React.TransitionStartFunction
}

const FilterInput: React.FC<FilterInputProps> = ({
  value,
  setValue,
  startTransition,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setValue(e.target.value)
    })
  }
  return (
    <div className="filterInput">
      <input
        type="text"
        placeholder="search"
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default FilterInput
