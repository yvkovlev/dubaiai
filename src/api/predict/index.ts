import { makeRequest } from '../index';
import {
  PropertyPricePredictionRequest,
  PropertyPricePredictionResponse,
  PropertySearchRequest,
  PropertySearchResponse,
} from './types';
import { ApiEndpoint, ApiEndpointVersion } from '../../constants';

export async function getPropertyPricePrediction(parameters: PropertyPricePredictionRequest): Promise<PropertyPricePredictionResponse | null> {
  return makeRequest<PropertyPricePredictionResponse>({
    endpoint: ApiEndpoint.PROPERTY_PREDICT,
    method: 'post',
    endpoint_version: ApiEndpointVersion.V1,
    data: parameters,
  });
}

export async function getPropertySearchResults(data: PropertySearchRequest, accessToken: string): Promise<PropertySearchResponse> {
  return makeRequest({
    endpoint: ApiEndpoint.PROPERTY_SEARCH,
    method: 'post',
    endpoint_version: ApiEndpointVersion.V1,
    data,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
