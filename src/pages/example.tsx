const example = () => import("../example.json");
import { useState, useEffect, useCallback } from 'react'
import parser from 'html-react-parser'
import { useParams } from 'react-router-dom';
import { DecodeBase64 } from '../utils';


export default function Example() {
    const { type } = useParams()
    const [html, setHtml] = useState<JSX.Element | JSX.Element[] | string>(<></>)

    const carfaxExample = async () => {
        if (type === "carfax") {
            const { carfax } = await example()
            setHtml(parser(DecodeBase64(carfax)))
        } else if (type === "autocheck") {
            const { autocheck } = await example()
            setHtml(parser(DecodeBase64(autocheck)))
        }
    }

    useEffect(() => {
        carfaxExample()
    }, [type])


    return <div>
        {html}
    </div>
}