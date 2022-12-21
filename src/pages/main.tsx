import { Form, Input, Button, Statistic, Select, Tooltip } from 'antd';
import { useState } from 'react';
import useApi, { Records } from '../hooks/useApi';
import { motion } from 'framer-motion'
import { useMutation, useQuery } from 'react-query';
const { Option } = Select;

const Fetch_Report_Check = async (vin: string) => {
    const res = await fetch("https://setvin.com/api/CheckReport?vin=" + vin);
    return res.json()
}

const Fetch_Create_Order = async (vin: string, reportType: string, mail: string, promo: string) => {
    const res = await fetch("https://setvin.com/api/CreateOrder", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            promo: promo.trim(),
            mail: mail.trim(),
            reportType: reportType.trim(),
            vin: vin.trim()
        })
    });
    return res.json()
}

export default function Main() {
    const [form] = Form.useForm();

    const [process, setProcess] = useState(false)

    const { mutate, isLoading, data: records } = useMutation((vin: string) => {
        return Fetch_Report_Check(vin)
    })

    const onFinish = async (values: any) => {
        const { vin, type, mail, promo } = values;
        if (!process) {
            mutate(vin)
            setProcess(true)
        } else {
            const data = await Fetch_Create_Order(vin, type, mail, promo)
            window.open(data.paymentUrl, "_self")
        }
    };

    return (
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
            <motion.div initial={{ height: 620 }} animate={!records ? { height: 620 } : { height: "auto" }} transition={{ type: "tween" }} className='max-w-lg shadow-lg border-2 px-8 py-5 sm:px-16 sm:py-10  rounded-xl flex-col space-y-8 overflow-hidden'>
                <div className='flex space-x-2'>
                    <div>
                        <img src="/imgs/autocheck.png" alt="autocheck setvin setvin.com vin" />
                    </div>
                    <div>
                        <img src="/imgs/carfax.png" alt="carfax setfin setvin.com vin" />
                    </div>
                </div>
                <div className='font-medium'>
                    Report Price - 2.3$
                </div>
                <Form
                    name="form"
                    layout='vertical'
                    form={form}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="VIN"
                        name="vin"
                        rules={[{ required: true, message: 'Please input VIN' }]}
                    >
                        <Input onChange={() => setProcess(false)} />
                    </Form.Item>

                    <Form.Item name="type" label="Report Type" rules={[{ required: true, message: 'Please select a type' }]}>
                        <Select
                            placeholder="Report Type"
                            onChange={() => setProcess(false)}
                        >
                            <Option value="carfax">Carfax</Option>
                            <Option value="autocheck">AutoCheck</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="E-Mail"
                        name="mail"
                        rules={[{ required: true, type: "email", message: 'Please input your mail' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Promo Code"
                        name="promo"
                        rules={[{ required: false }]}
                    >
                        <Input />
                    </Form.Item>
                    <div className="flex justify-between space-x-4 mt-2">
                        <Button type="primary" htmlType="submit" loading={isLoading} disabled={process} className="!bg-yellow-500 !border-none outline-none">
                            Check VIN
                        </Button>
                        {!records && !process ? <Tooltip title="Check the existence of VIN first">
                            <Button type="primary" disabled loading={isLoading} className="!bg-primary !border-none outline-none">
                                Buy Report
                            </Button>
                        </Tooltip> :
                            <Button type="primary" htmlType='submit' loading={isLoading} className="!bg-primary !border-none outline-none">
                                Buy Report
                            </Button>
                        }
                        {/* <Button type="primary" htmlType="submit" loading={isRecords} className="!bg-blue-500 border-none !text-white" >
                            Get Full Report
                        </Button> */}
                    </div>

                </Form>

                <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-2 ${records ? "" : "invisible"}`}>
                    <div className="md:col-span-2">
                        <Statistic title="Vehicle:" value={`${records?.carfax?.vehicle ?? "No Data"}`} decimalSeparator={""} groupSeparator={""} />
                    </div>
                    <div className="md:col-span-2">
                        <Statistic title="Year:" value={`${records?.carfax?.year ?? "No Data"}`} decimalSeparator={""} groupSeparator={""} />
                    </div>
                    <Statistic title="Autocheck Record Amount:" value={`${records?.autocheck?.records ?? "0"} Records`} />
                    <Statistic title="Carfax Record Amount:" value={`${records?.carfax?.records ?? "0"} Records`} />
                </div>

            </motion.div>
        </div>
    )
}
