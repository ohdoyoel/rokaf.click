import { getLocations } from "@/src/api/location"
import { SideBar } from "@/src/components/atoms/SideBar"
import { SearchLocation } from "@/src/components/molecules/SearchLocation"
import { Api } from "@/src/types/data"
import { Location } from "@/src/types/data"
import axios from "axios"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

const context: Api = {
    apiRootUrl: "https://3001-ohdoyoel-rokafclickback-4nlx9a00kq8.ws-us105.gitpod.io"
}

interface LocationBarProps {
    setLocationId: Dispatch<SetStateAction<number>>
}

export const LocationBar = ({setLocationId}: LocationBarProps) => {
    const [locations, setLocations] = useState<Location[]>([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    // useEffect(() => {
    //     fetch(context.apiRootUrl + "/locations",
    //             {
    //                 method:'GET',
    //                 headers: {'Content-Type':'application/json'},
    //             })
    //         .then((res) => res.json())
    //         .then((data) => setLocations(data))
    //         .catch((error) => (window.alert(error)))
    // }, [])

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(false);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const response = await axios.get(
                    context.apiRootUrl + "/locations",
                );
                setLocations(response.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(true)
            }
            setLoading(false)
        };

        fetchLocations();
    }, []);

    // if (loading) return <div>로딩중..</div>;
    // if (error) return <div>에러가 발생했습니다</div>;

    return (
        <div className='absolute inset-y-52 left-0 rounded-r-lg
                        w-20 transition-all ease-in-out duration-150 hover:w-80
                        group'>
            <SideBar>
                <div className="hidden group-hover:block">
                    <SearchLocation setLocationId={setLocationId} locations={locations}/>
                    {loading ? <div>로딩중..</div> : null}
                    {error ? <div>에러가 발생했습니다</div> : null}
                </div>
                <div className="group-hover:hidden
                                grid absolute inset-0 place-content-center">
                    <p>부대 바꾸기</p>
                </div>
            </SideBar>
        </div>
    )
}