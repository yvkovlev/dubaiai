import {
  PropertyTransactionGroups,
  PropertyRegistrationTypes,
  PropertyRoomsTypes,
} from "../../constants"
import { PropertySearchResponseItem } from "../../store/property.search.reducer";

export interface PropertyPricePredictionRequest {
  id: number,
  transactionGroup: PropertyTransactionGroups,
  registrationType: PropertyRegistrationTypes,
  rooms: PropertyRoomsTypes,
  hasParking: boolean,
  procedureArea: number,
}

export interface PropertyPricePredictionResponse {
  predictedPrice: string;
}

export interface PropertySearchRequest {
  query: string;
}

export interface PropertySearchResponse {
  items: PropertySearchResponseItem[];
}