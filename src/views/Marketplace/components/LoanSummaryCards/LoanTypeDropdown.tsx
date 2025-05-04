import { FiCheck, FiChevronRight, FiChevronDown } from "react-icons/fi";
import Button from "components/Elements/Button";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuItemIndicator,
} from "components/Elements/DropdownMenu";

interface IProps {
  loanDataType?: boolean;
  setType?: any;
}
const LoanTypeDropdown = ({ setType, loanDataType }: IProps) => {
  const [loanType, setLoanType] = useState<"public" | "private" | null>(null);

  const options = [
    {
      id: 0,
      label: "Public",
      checked: loanType === "public",
      handleChecked: () => {
        setLoanType("public");
        setType(false);
      },
    },
    {
      id: 1,
      label: "Private",
      checked: loanType === "private",
      handleChecked: () => {
        setLoanType("private");
        setType(true);
      },
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger style={{ minWidth: 140 }} asChild>
        <Button>
          {loanType
            ? loanType
            : loanDataType && loanDataType != null
              ? "Private"
              : !loanDataType && loanDataType != null
                ? "Public"
                : "Choose"}
          {open ? <FiChevronDown /> : <FiChevronRight />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent style={{ minWidth: 140 }} sideOffset={0}>
        {options.map((item) => (
          <DropdownMenuCheckboxItem
            key={item.id}
            // onSelect={(e) => e.preventDefault()}
            checked={item.checked}
            onCheckedChange={item.handleChecked}
          >
            <DropdownMenuItemIndicator>
              <FiCheck />
            </DropdownMenuItemIndicator>
            <span className="filter-label">{item.label}</span>
            <span className="filter-value"></span>
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LoanTypeDropdown;
