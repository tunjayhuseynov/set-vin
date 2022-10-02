import axios from 'axios';

const Base = 'https://europe-west3-setvin-db365.cloudfunctions.net/carfaxAPI';

export default function useApi() {
	const instance = axios.create({
		baseURL: Base
	});

	const GetRecords = async (vin: string) => {
		try {
			const res = await instance.get<Records>('', {
				params: {
					vin,
					function: "get_records"
				}
			});
			return res.data;
		} catch (error: any) {
			throw new Error(error);
		}
	};

	const GetReport = async (vin: string, type: string) => {
		try {
			const res = await instance.get<Report>(``, {
				params: {
					vin,
					type,
					function: "get_report_check"
				}
			});
			return res.data;
		} catch (error: any) {
			throw new Error(error);
		}
	};

	const GetBalance = () => { };

	return { GetRecords, GetReport, GetBalance };
}

export interface Report {
	info: string;
	report: {
		vin: string;
		type: string;
		ur_id: string;
		report: string;
		report_hash: string;
	};
}

export interface Records {
	carfax: {
		Records: number;
		Vehicle: string;
		Year: number;
		VIN: string;
		Body: number;
	};
	autocheck: {
		Records: number;
		Vehicle: string;
		Year: number;
		VIN: string;
		Body: number;
	};
}
