import { useParams, useSearchParams } from "react-router-dom"
import { useQuery } from 'react-query'
import parser from 'html-react-parser'
import { DecodeBase64 } from "../utils";

const getReport = async (id: string) => {
    const res = await fetch("https://setvin.com/api/ReportData?id=" + id);
    // const res = await fetch("https://api.allreports.tools/wp-json/v1/get_report_by_wholesaler/WAUDG74F25N111998/68523d5476af56837fd1b57c867f2fe9/carfax/en");
    return res.json()
}

export default function Report() {
    let [params] = useSearchParams()
    let id = params.get("id")
    if (!id) return <div className="w-full text-center pt-10 text-xl">Error: Enter a report's identification number</div>

    const { data, isLoading } = useQuery("getReport", () => getReport(id!))


    return <div>
        <div onClick={() => window.open("https://setvin.com/api/GeneratePDF?id=" + id, "_blank")} className="px-5 py-2 bg-slate-700 text-white font-medium cursor-pointer">Download Report as PDF</div>
        {isLoading || !data ? <div className="w-full text-center pt-10 text-xl">Loading...</div> : parser(DecodeBase64(data?.report.report))}
    </div>
}