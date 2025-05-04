import { Checkbox, CheckboxIndicator } from "components/Form/Checkbox";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";
import { setFilterOption } from "../filtersSlice";
import { useAppDispatch, useAppSelector } from "state";
import { useReducer, useEffect } from "react";
import { CheckBoxEnum, CollateralCheckBoxEnum } from "../types";

const collateralChecks = [
  {
    id: 3,
    label: "Single Token",
    coins: CollateralCheckBoxEnum.SINGLE_TOKEN,
  },
  {
    id: 4,
    label: "Single NFT",
    coins: CollateralCheckBoxEnum.SINGLE_NFT,
  },
  {
    id: 5,
    label: "Multi Token",
    coins: CollateralCheckBoxEnum.MULTI_TOKEN,
  },
  {
    id: 6,
    label: "Multi NFT",
    coins: CollateralCheckBoxEnum.MULTI_NFT,
  }

];

const Collateralreducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_COLLATERAL":
      const selectedCollaterals = state.selectedCollaterals.includes(action.payload)
        ? state.selectedCollaterals.filter(type => type !== action.payload)
        : [...state.selectedCollaterals, action.payload];
      return { selectedCollaterals };
    default:
      return state;
  }
};

const FilterChecks: React.FC = () => {
  const dispatch = useAppDispatch();
  const [collateralCheck, collateralDispatch] = useReducer(Collateralreducer, {
    selectedCollaterals: []
  });
  
  const { filterOptions } = useAppSelector((state) => state.filters);
  useEffect(() => {
    dispatch(
      setFilterOption({ key: "tokenType", value: filterOptions["tokenType"] })
    );    dispatch(setFilterOption({ key: "collateralType", value: collateralCheck.selectedCollaterals })); // Convert to arra
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ collateralCheck]);

  return (
    <div className="checks-group">
       {/* {checks.map((check, index) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
          key={check.id}
        >
          <Label htmlFor={check.id.toString()}>{check.label === "ALTs" ? "Tokens" : check.label}</Label>
          <Checkbox
            checked={checkValue[index]}
            id={check.id.toString()}
            onCheckedChange={(e) => {
              localDispatch({ type: check.label, payload: e });
              dispatch(
                setFilterOption({ key: "tokenType", value: check.coin })
              );
            }}
          >
            <CheckboxIndicator>
              <FiCheck />
            </CheckboxIndicator>
          </Checkbox>
        </div>
      ))} */}
      {collateralChecks.map((check, index) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
          key={check.id}
          className="filter-checks"
        >
          <Checkbox
            checked={collateralCheck.selectedCollaterals.includes(check.coins)}
            id={check.id.toString()}
            onCheckedChange={() => {
              collateralDispatch({ type: "TOGGLE_COLLATERAL", payload: check.coins });
            }}
          >
            <CheckboxIndicator>
              <FiCheck />
            </CheckboxIndicator>
          </Checkbox>
          <Label htmlFor={check.id.toString()}>{check.label}</Label>
        </div>
      ))}
    </div>
  );
};

const Label = styled.label`
  font-weight: 500;
  font-size: 0.875rem;
`;


export default FilterChecks;