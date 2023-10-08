import { Api, Location } from '../types/data'
import { fetcher } from '../utils/fetcher'

export type GetLocationParams = {
    id: number
}

export const getUser = async (
    context: Api,
    { id }: GetLocationParams,
): Promise<Location> => {
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g, '')}/locations/${id}`,
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
}