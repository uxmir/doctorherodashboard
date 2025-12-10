import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const SelectInput=({selectLabel,SelectData,width})=> {
  return (
    <Select>
      <SelectTrigger className={`${width}`}>
        <SelectValue placeholder={selectLabel} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{selectLabel}</SelectLabel>
          {
            SelectData.map((data,index)=>(
            <SelectItem key={index} value={data.data}>{data.data}</SelectItem>
            ))
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
export default SelectInput