import { Api, Location } from '../types/data'
import { fetcher } from '../utils/fetcher'

export const getAllLocations = async (
    context: Api,
): Promise<Location[]> => {
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g, '')}/locations`,
        {
            headers: {
                Origin: '*',
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
}