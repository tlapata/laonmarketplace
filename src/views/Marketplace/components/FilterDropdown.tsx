import { FiCheck, FiChevronRight, FiChevronDown } from "react-icons/fi";
import Button from "components/Elements/Button";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuItemIndicator,
} from "components/Elements/DropdownMenu";
import { FilterEnum, StableCoinEnum } from "../types";
import { setFilterOption } from "../filtersSlice";
import { useAppDispatch, useAppSelector, RootState } from "state";

type FilterItem = {
  label: string;
  value: string;
  checked: boolean;
  handleChecked: () => void;
};

const FilterDropdown = () => {
  const filters = useAppSelector(
    (state: RootState) => state.filters.filterOptions
  );
  const dispatch = useAppDispatch();
  const filtersList: FilterItem[] = [
    {
      label: "%APY:",
      value: "Low to High",
      checked: filters?.apy === FilterEnum.LOW_TO_HIGH,
      handleChecked: () =>
        dispatch(
          setFilterOption({ key: "apy", value: FilterEnum.LOW_TO_HIGH })
        ),
    },
    {
      label: "%APY:",
      value: "High to Low",
      checked: filters.apy === FilterEnum.HIGH_TO_LOW,
      handleChecked: () =>
        dispatch(
          setFilterOption({ key: "apy", value: FilterEnum.HIGH_TO_LOW })
        ),
    },
    {
      label: "Loan Amt:",
      value: "Low to High",
      checked: filters.loanAmount === FilterEnum.LOW_TO_HIGH,
      handleChecked: () =>
        dispatch(
          setFilterOption({ key: "loanAmount", value: FilterEnum.LOW_TO_HIGH })
        ),
    },
    {
      label: "Loan Amt:",
      value: "High to low",
      checked: filters.loanAmount === FilterEnum.HIGH_TO_LOW,
      handleChecked: () =>
        dispatch(
          setFilterOption({ key: "loanAmount", value: FilterEnum.HIGH_TO_LOW })
        ),
    },
    {
      label: "Days:",
      value: "Low to High",
      checked: filters.termLength === FilterEnum.LOW_TO_HIGH,
      handleChecked: () =>
        dispatch(
          setFilterOption({ key: "termLength", value: FilterEnum.LOW_TO_HIGH })
        ),
    },
    {
      label: "Days:",
      value: "High to low",
      checked: filters.termLength === FilterEnum.HIGH_TO_LOW,
      handleChecked: () =>
        dispatch(
          setFilterOption({ key: "termLength", value: FilterEnum.HIGH_TO_LOW })
        ),
    },
    {
      label: "Collateral:",
      value: "Low to High",
      checked: filters.collateral === FilterEnum.LOW_TO_HIGH,
      handleChecked: () =>
        dispatch(
          setFilterOption({ key: "collateral", value: FilterEnum.LOW_TO_HIGH })
        ),
    },
    {
      label: "Collateral:",
      value: "High to low",
      checked: filters.collateral === FilterEnum.HIGH_TO_LOW,
      handleChecked: () =>
        dispatch(
          setFilterOption({ key: "collateral", value: FilterEnum.HIGH_TO_LOW })
        ),
    },
    {
      label: "LTV:",
      value: "Low to High",
      checked: filters.ltv === FilterEnum.LOW_TO_HIGH,
      handleChecked: () =>
        dispatch(
          setFilterOption({ key: "ltv", value: FilterEnum.LOW_TO_HIGH })
        ),
    },
    {
      label: "LTV:",
      value: "High to low",
      checked: filters.ltv === FilterEnum.HIGH_TO_LOW,
      handleChecked: () =>
        dispatch(
          setFilterOption({ key: "ltv", value: FilterEnum.HIGH_TO_LOW })
        ),
    },
    {
      label: "Oracle:",
      value: "Chainlink",
      checked: filters.chainLink === "chainlink",
      handleChecked: () =>
        dispatch(setFilterOption({ key: "chainLink", value: "chainlink" })),
    },
    {
      label: "Stablecoin:",
      value: "USDC",
      checked: filters.stableUSDC === StableCoinEnum.USDC,
      handleChecked: () =>
        dispatch(
          setFilterOption({ key: "stableUSDC", value: StableCoinEnum.USDC })
        ),
    },
    {
      label: "Stablecoin:",
      value: "USDT",
      checked: filters.stableUSDT === StableCoinEnum.USDT,
      handleChecked: () =>
        dispatch(
          setFilterOption({ key: "stableUSDT", value: StableCoinEnum.USDT })
        ),
    },
    {
      label: "Stablecoin:",
      value: "DAI",
      checked: filters.stableDAI === StableCoinEnum.DAI,
      handleChecked: () =>
        dispatch(
          setFilterOption({ key: "stableDAI", value: StableCoinEnum.DAI })
        ),
    },
    {
      label: "Stablecoin:",
      value: "BUSD",
      checked: filters.stableBUSD === StableCoinEnum.BUSD,
      handleChecked: () =>
        dispatch(
          setFilterOption({ key: "stableBUSD", value: StableCoinEnum.BUSD })
        ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenuTrigger className="filter" style={{ minWidth: 220 }} asChild>
        <Button>
          {open ? "Add Filters" : "Filters"}
          {open ? <FiChevronDown /> : <FiChevronRight />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent style={{ minWidth: 220 }} sideOffset={0}>
          {filtersList.map((item) => (
            <DropdownMenuCheckboxItem
              key={item.label + item.value}
              onSelect={(e) => e.preventDefault()}
              checked={item.checked}
              onCheckedChange={item.handleChecked}
            >
              <DropdownMenuItemIndicator>
                <FiCheck />
              </DropdownMenuItemIndicator>
              <span className="filter-label">{item.label}</span>
              <span className="filter-value">{item.value}</span>
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};

export default FilterDropdown;
