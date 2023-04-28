import { PartialType } from "@nestjs/swagger";
import { CreateInspectionsDto } from "./create-inspection.dto";

export class UpdateInspectionDto extends PartialType( CreateInspectionsDto){
    
}