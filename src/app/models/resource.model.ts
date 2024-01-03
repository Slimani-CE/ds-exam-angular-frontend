import {ResourceType} from "../enums/resource-type";

export interface Resource {
  id: string;
  name: string;
  type: ResourceType
}
