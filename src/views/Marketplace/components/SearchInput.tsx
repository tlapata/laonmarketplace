import IconInput from "components/Form/IconInput";
import { useAppDispatch, useAppSelector } from "state";
import { setSearchTerm } from "../filtersSlice";
import React from "react";

const SearchInput = () => {

  const { searchTerm } = useAppSelector((state) => state.filters);
  const [searchValue, setSearchValue] = React.useState("");
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    setSearchValue(searchTerm);
  }, [searchTerm]);

  return (
      <IconInput
        className="input"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          setTimeout(() => {
            dispatch(setSearchTerm(e.target.value));
          }, 500);
        }}
        placeholder="Search By Contract #"
      />
  );

};

export default SearchInput;