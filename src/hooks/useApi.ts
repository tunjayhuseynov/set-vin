import axios from 'axios';

const Base = 'https://setvin.com/api';

export default function useApi() {
	const instance = axios.create({
		baseURL: Base
	});

	const GetRecords = async (vin: string) => {
		try {
			const res = await instance.get<Records>(`CheckReport`, {
				params: {
					vin
				}
			});
			return res.data;
		} catch (error: any) {
			throw new Error(error);
		}
	};

	const GetBalance = () => { };

	return { GetRecords, GetBalance };
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
		records: number;
		vehicle: string;
		year: number;
		vin: string;
		body: number;
	};
	autocheck: {
		records: number;
		vehicle: string;
		year: number;
		vin: string;
		body: number;
	};
}
