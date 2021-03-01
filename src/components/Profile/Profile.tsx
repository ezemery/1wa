import {useParams} from 'react-router-dom';

export const  Profile = () => {
    interface ParamTypes {
        query: string
      }
    const {query} = useParams<ParamTypes>();
    console.log(query)
    return (
        <div>
            {`Hello ${query}`}
        </div>
    )
}
